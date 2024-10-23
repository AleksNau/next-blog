"use client";
import React, { useEffect, useState, useContext } from "react";
import s from "./writePage.module.scss";
import Image from "next/image";
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useUser } from "@clerk/clerk-react";
import { getData, getCategoryData } from "@/app/utils/data";
import { MyContext } from "@/context/MyContext";
import UploadFile from "@/components/UploadFile/UploadFile";
import DinamicInput from "@/components/DinamicInput/DinamicInput";
import {titleValidation} from '@/settings/validation';
import {quillModules,quillFormats} from "@/app/utils/quil"

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const WritePage = () => {
  const [valueQuil, setValueQuil] = useState("");
  const cat = useContext(MyContext);
  const { user } = useUser();

  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [refLInk, setRefLink] = useState("");
  const [category, setCategory] = useState("");
  const [imageList, setImageList] = useState([{ value: "" }]);

  const methods = useForm({mode: "onChange"});
  const {
    register,
    formState: {errors, isValid},
    getValues,
    setValue,
    watch,
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
    console.log({
      title,
      desc: valueQuil,
      img: media,
      catSlug: category,
      slug: count + 1,
      userEmail: user?.primaryEmailAddress.emailAddress? user.primaryEmailAddress.emailAddress: "test@mail.ru",
      referal:refLInk,
      photos:imageList,
    })

    console.log(getValues())

  };

  return (
// pass all methods into the context
<FormProvider {...methods}>
    <form id="form" className={s.container}>
      <input
        type="text"
        placeholder="Заголовок..."
        className={s.input}
        onChange={(event) => setTitle(event.target.value)}
        {...register('title',{ ...titleValidation
      })} noValidate
      />
      <span>{errors?.title?.message}&nbsp;</span>

      <div className={s.editor}>
        <UploadFile setMedia={setMedia} />
        <div>
          <div className="h-screen w-screen flex items-center flex-col">
            <div className=" w-[90vw]">
//внешне подключить надо
              <QuillEditor
                value={valueQuil}
                onChange={handleEditorChange}
                modules={quillModules}
                formats={quillFormats}
                placeholder="Основной текст"
                className="w-full h-[70%] mt-10 bg-white"
                theme="snow"
              />

            </div>
//Обработал
            <select
              list="options"
              className={s.select}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              {...register('catSlug')}
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
              <input className={s.reflink} placeholder="https://" type="url" onChange={(e)=>setRefLink(e.target.value)} {...register('referal')}/>
            </div>
//сделать проброс в компонент, и сохранить в нужный объект
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
