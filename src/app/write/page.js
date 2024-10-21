"use client";
import React, { useEffect, useState, useContext } from "react";
import s from "./writePage.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useUser } from "@clerk/clerk-react";
import { getData, getCategoryData } from "@/app/utils/data";
import { MyContext } from "@/context/MyContext";
import UploadFile from "@/components/UploadFile/UploadFile";
import DinamicInput from "@/components/DinamicInput/DinamicInput";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const WritePage = () => {
  const [value, setValue] = useState("");
  const cat = useContext(MyContext);
  const { user } = useUser();

  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [refLInk, setRefLink] = useState("");
  const [category, setCategory] = useState("");
  const [imageList, setImageList] = useState([{ value: "" }]);

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent) => {
    setValue(newContent);
  };

  const handleSubmit = async () => {
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
      desc: value,
      img: media,
      catSlug: category,
      slug: count + 1,
      userEmail: user?.primaryEmailAddress.emailAddress? user.primaryEmailAddress.emailAddress: "test@mail.ru",
      referal:refLInk,
      photos:imageList,
    })
      
  };

  return (
    <div className={s.container}>
      <input
        type="text"
        placeholder="Заголовок..."
        className={s.input}
        onChange={(event) => setTitle(event.target.value)}
      />

      <div className={s.editor}>
        <UploadFile setMedia={setMedia} />
        <div>
          <div className="h-screen w-screen flex items-center flex-col">
            <div className=" w-[90vw]">
              <QuillEditor
                value={value}
                onChange={handleEditorChange}
                modules={quillModules}
                formats={quillFormats}
                placeholder="Основной текст"
                className="w-full h-[70%] mt-10 bg-white"
                theme="snow"
              />
            </div>
            <select
              list="options"
              className={s.select}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
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
              <input className={s.reflink} placeholder="https://" onChange={(e)=>setRefLink(e.target.value)}/>
            </div>
            <DinamicInput inputFields={imageList} setInputFields={setImageList}/> 
          </div>
        </div>
      </div>

      <button className={s.publish} onClick={handleSubmit}>
        Опубликовать
      </button>
    </div>
  );
};

export default WritePage;
