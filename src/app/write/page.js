'use client'
import React, {useEffect, useState,useContext} from 'react';
import s from "./writePage.module.scss";
import Image from "next/image";

import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {app} from "@/app/utils/firebase";

import {useRouter} from "next/navigation";
import dynamic from "next/dynamic";

import {useUser} from "@clerk/clerk-react";
import {getData,getCategoryData} from "@/app/utils/data";
import {MyContext} from "@/context/MyContext";
import UploadFile from '@/components/UploadFile/UploadFile'
const storage = getStorage(app);

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


const WritePage = () => {
    const [value, setValue] = useState('');
    const cat = useContext(MyContext)
    const {user} = useUser();

    console.log(user.primaryEmailAddress.emailAddress)
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const quillModules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
            [{ align: [] }],
            [{ color: [] }],
            ['code-block'],
            ['clean'],
        ],
    };


    const quillFormats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image',
        'align',
        'color',
        'code-block',
    ];


    const handleEditorChange = (newContent) => {
        setValue(newContent);
    };


    const handleSubmit = async () => {
        let count;
        const data2 = await getData().then((res) => {
            count =  res.count;
        })

        const res = await fetch("http://localhost:3000/api/posts", {
            method: "POST",
            body: JSON.stringify({title, desc: value, img: media, catSlug: category, slug: count + 1,userEmail:'omegatorn412@gmail.com'})
        });
        if (res.ok) {
            console.log("res: "+res)
           /* router.push("/")*/
        }
    }

    return (
        <div className={s.container}>
            <input type="text" placeholder='Title' className={s.input}
                   onChange={event => setTitle(event.target.value)}/>
            
            <div className={s.editor}>
            <UploadFile setMedia={setMedia}/>
                <div>
                    <div className="h-screen w-screen flex items-center flex-col">
                        <div className=" w-[90vw]">
                            <QuillEditor
                                value={value}
                                onChange={handleEditorChange}
                                modules={quillModules}
                                formats={quillFormats}
                                className="w-full h-[70%] mt-10 bg-white"
                                theme='snow'
                            />
                        </div>
                        <select list="options" onChange={(e)=>{setCategory(e.target.value)}}>
            {cat?.map(item => {
                return (
                    <option value={item.slug} key={item.id}>{item.title}</option>)
                })}
            </select>
                    </div>
                </div>

            </div>

            
            <button className={s.publish} onClick={handleSubmit}>Publish</button>
        </div>
    );
};

export default WritePage;