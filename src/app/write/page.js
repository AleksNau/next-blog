'use client'
import React, {useEffect, useState} from 'react';
import s from "./writePage.module.scss";
import Image from "next/image";
import ReactQuill from "react-quill";

import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {app} from "@/app/utils/firebase";
import {getData} from "@/components/Cardlist/CardList";

const storage = getStorage(app);


const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [title, setTitle] = useState("");

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

    const handleSubmit = async () => {
        const {count} = await getData()
        console.log("count " + count)
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({title, desc: value, img: media, catSlug: "travel", slug: `8`})
        });

        console.log(res)
    }

    return (
        <div className={s.container}>
            <input type="text" placeholder='Title' className={s.input}
                   onChange={event => setTitle(event.target.value)}/>
            <div className={s.editor}>
                <button className={s.button} onClick={() => setOpen(!open)}>
                    <Image src={'/plus.png'} className={s.plus} width={16} height={16}/>
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
                <ReactQuill className={s.textArea} theme='bubble' value={value} onChange={setValue}
                            placeHolder={'Tell your story'}/>
            </div>
            <button className={s.publish} onClick={handleSubmit}>Publish</button>

        </div>
    );
};

export default WritePage;