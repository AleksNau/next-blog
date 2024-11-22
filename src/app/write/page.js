"use client";
import React, {useContext, useState} from "react";
import s from "./writePage.module.scss";
import {Controller, FormProvider, useForm} from "react-hook-form"
import dynamic from "next/dynamic";
import {useUser} from "@clerk/clerk-react";
import {getData} from "@/app/utils/data";
import {MyContext} from "@/context/MyContext";
import UploadFile from "@/components/UploadFile/UploadFile";
import DinamicInput from "@/components/DinamicInput/DinamicInput";
import {linkValidation, titleValidation} from '@/settings/validation';
import {quillFormats, quillModules} from "@/app/utils/quil"
import {handleSubmitFirst} from "@/app/utils/CreatePost"
import { useRouter } from 'next/navigation'
const QuillEditor = dynamic(() => import("react-quill"), {ssr: false});

const WritePage = () => {
    const {cat} = useContext(MyContext);
    const {user} = useUser();
    const router = useRouter()

    const [media, setMedia] = useState("");

    const methods = useForm({mode: "onChange"});
    const {
        register,
        formState: {errors, isValid},
        getValues,
        control
    } = methods;

    const getinfo = async () => {
        let formData =  getValues();

        let  {photos,referal, title,desc,catSlug}=  formData;

        const arrayPhotos = photos.map(function(el) {
            return el.value;
        });
        const arrayReferal = [referal]
        const data = {email:"test@mail.ru",photos:arrayPhotos,referal:arrayReferal, title:title,desc:desc,catSlug:catSlug,media:media}
        return data


    }

    const handleSubmitData = async () => {
        const  data = await getinfo()

       await handleSubmitFirst(data).then(res => {
        if(res.status === 200 ){
            router.push('/')
        }
       });

    };

    return (
        <FormProvider {...methods}>
            <form id="form" className={s.container}>
                <input
                    type="text"
                    placeholder="Заголовок..."
                    className={s.input}
                    {...register('title', {
                        ...titleValidation
                    })} noValidate
                />
                <span className={s.error}>{errors?.title?.message}&nbsp;</span>

                <div className={s.editor}>
                    <UploadFile setMedia={setMedia}/>
                    <div>
                        <div className="h-screen w-screen flex items-center flex-col">
                            <div className=" w-[90vw]">
                                <Controller
                                    control={control}
                                    name="desc"
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <QuillEditor
                                            value={value}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            modules={quillModules}
                                            formats={quillFormats}
                                            placeholder="Основной текст"
                                            className="w-full h-[70%] mt-10 bg-white"
                                            theme="snow"
                                        />
                                    )}
                                />

                            </div>
                            <select
                                list="options"
                                className={s.select}
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                }}
                                {...register('catSlug', {required: "Необходимо выбрать категорию"})}
                            >

                                {cat?.map((item) => {
                                    return (
                                        <option className={s.option} value={item.slug} key={item.id}>
                                            {item.title}
                                        </option>
                                    );
                                })}
                            </select>
                            <div className={s.container_link}>
                                <label className={s.link_label}>
                                    Добавить реферальную ссылку
                                </label>
                                <input className={s.reflink}
                                       placeholder="https://" {...register('referal', linkValidation)}/>
                                <span className={s.error}>{errors?.referal?.message}&nbsp;</span>
                            </div>
                            <DinamicInput/>
                        </div>
                    </div>
                </div>

                <button
                         onClick={(e) => {
                             e.preventDefault();
                             handleSubmitData()
                         }}
                         className={isValid ? (`${s.publish}`) : (`${s.publish} ${s.disPublish}`)}
                         disabled={!isValid}>
                    Опубликовать
                </button>
            </form>
        </FormProvider>
    );
};

export default WritePage;
