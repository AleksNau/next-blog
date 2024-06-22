'use client'
import React, {useEffect, useState} from 'react';
import s from "./writePage.module.scss";
import Image from "next/image";

import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {app} from "@/app/utils/firebase";

import {useRouter} from "next/navigation";
import dynamic from "next/dynamic";
import {Editor} from "@/components/Editor/Editor";
import {getData} from "@/components/Cardlist/CardList";

const storage = getStorage(app);

const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false,
})
const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const router = useRouter();
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [title, setTitle] = useState("");

    const quillModules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
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

    useEffect(() => {
        const upload = () => {
            const name = new Date().getTime() + file.name
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

// Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL)
                        console.log('File available at', downloadURL);
                    });
                }
            );
        }
        file && upload()

    }, [file])

    const getData = async () => {

        const res = await fetch(`http://localhost:3000/api/posts?page=1`, {cache: 'no-store'});

        if (!res.ok) {
            throw new Error('Нет постов')
        }

        return res.json()
    }




    const handleSubmit = async () => {
        let count;
        const data = await getData().then((res) => {
            count =  res.count;

        })


        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({title, desc: value, img: media, catSlug: "travel", slug: count + 1})
        });
        if (res.ok) {
            router.push("/")
        }
    }

    return (
        <div className={s.container}>
            <input type="text" placeholder='Title' className={s.input}
                   onChange={event => setTitle(event.target.value)}/>
            <div className={s.editor}>
                <button className={s.button} onClick={() => setOpen(!open)}>
                    <Image src={'/sun.png'} alt={'sun'} className={s.plus} width={16} height={16}/>
                </button>

                {open &&
                    (
                        <div className={s.add}>
                            <input type="file" id='image' onChange={event => setFile(event.target.files[0])}/>

                            <button className={s.addButton} onClick={() => setOpen(!open)}>
                                <label htmlFor="image"><Image src={'/sun.png'} alt={'image'} className={s.plus}
                                                              width={16} height={16}/></label>
                            </button>


                            <button className={s.addButton}>
                                <Image src={'/sun.png'} alt={'image'} className={s.plus} width={16} height={16}/>
                            </button>
                            <button className={s.addButton}>
                                <Image src={'/sun.png'} alt={'image'} className={s.plus} width={16} height={16}/>
                            </button>
                        </div>)}
                {/*<ReactQuill className={s.textArea} theme='bubble' value={value} onChange={setValue}
                             placeHolder={'Tell your story'}/>*/}
                <div>
                    <div className="h-screen w-screen flex items-center flex-col">
                        <div className="h-full w-[90vw]">
                            <QuillEditor
                                value={value}
                                onChange={setValue}
                                modules={quillModules}
                                formats={quillFormats}
                                className="w-full h-[70%] mt-10 bg-white"
                                theme={'snow'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button className={s.publish} onClick={handleSubmit}>Publish</button>

        </div>
    );
};

export default WritePage;