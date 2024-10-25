"use client";
import React, { useEffect, useState, useContext } from "react";
import s from "./writePage.module.scss";
import Image from "next/image";
import { useForm, FormProvider, useFormContext,Controller  } from "react-hook-form"
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useUser } from "@clerk/clerk-react";
import { getData, getCategoryData } from "@/app/utils/data";
import { MyContext } from "@/context/MyContext";
import UploadFile from "@/components/UploadFile/UploadFile";
import DinamicInput from "@/components/DinamicInput/DinamicInput";
import {titleValidation, linkValidation} from '@/settings/validation';
import {quillModules,quillFormats} from "@/app/utils/quil"

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const WritePage = () => {
  const [valueQuil, setValueQuil] = useState("");
  const cat = useContext(MyContext);
  const { user } = useUser();

  const [media, setMedia] = useState("");
  const [imageList, setImageList] = useState([{ value: "" }]);

  const methods = useForm({mode: "onChange"});
  const {
    register,
    formState: {errors, isValid},
    getValues,
    setValue,
    watch,
    control
  } = methods;


  const handleEditorChange = (newContent) => {
    setValueQuil(newContent);
  };

  const handleSubmitFirst = async () => {
    let count;
    const data2 = await getData().then((res) => {
      count = res.count;
    });
   /*  const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        catSlug: category,
        slug: count + 1,
        userEmail: "omegatorn412@gmail.com",
      }),
    });
    if (res.ok) {
      console.log("res: " + res);
      router.push("/")
    }*/

    let formData = getValues();
    console.log({img: media,slug: count + 1,
      userEmail: user?.primaryEmailAddress.emailAddress? user.primaryEmailAddress.emailAddress: "test@mail.ru",...formData})

  };

  return (
<FormProvider {...methods}>
    <form id="form" className={s.container}>
      <input
        type="text"
        placeholder="Заголовок..."
        className={s.input}
        {...register('title',{ ...titleValidation
      })} noValidate
      />
      <span>{errors?.title?.message}&nbsp;</span>

      <div className={s.editor}>
        <UploadFile setMedia={setMedia} />
        <div>
          <div className="h-screen w-screen flex items-center flex-col">
            <div className=" w-[90vw]">
<Controller
control={control}
name="desc"
render={({ field: { onChange, onBlur, value, ref } }) => (
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
              {...register('catSlug',{ required: "Необходимо выбрать категорию"})}
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
              <input className={s.reflink} placeholder="https://" {...register('referal',linkValidation)}/>
<span>{errors?.referal?.message}&nbsp;</span>
            </div>
            <DinamicInput inputFields={imageList} setInputFields={setImageList}/>
          </div>
        </div>
      </div>

      <button className={s.publish} onClick={(e)=> {
        e.preventDefault();
        handleSubmitFirst()}}>
        Опубликовать
      </button>
    </form>
</FormProvider>
  );
};

export default WritePage;
