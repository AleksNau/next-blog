'use client'
import React, {useState} from 'react';
import s from "./writePage.module.scss";
import Image from "next/image";
import ReactQuill from "react-quill";

const WritePage = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    return (
        <div className={s.container}>
            <input type="text" placeholder='Title' className={s.input}/>
            <div className={s.editor}>
                <button className={s.button} onClick={() => setOpen(!open)}>
                    <Image src={'/plus.png'} className={s.plus} width={16} height={16}/>
                </button>

                {open &&
                    (
                        <div className={s.add}>
                            <button className={s.addButton} onClick={() => setOpen(!open)}>
                                <Image src={'/image.png'} alt={'image'} className={s.plus} width={16} height={16}/>
                            </button>
                            <button className={s.addButton}>
                                <Image src={'/external.png'} alt={'image'} className={s.plus} width={16} height={16}/>
                            </button>
                            <button className={s.addButton}>
                                <Image src={'/video.png'} alt={'image'} className={s.plus} width={16} height={16}/>
                            </button>
                        </div>)}
                <ReactQuill className={s.textArea} theme='bubble' value={value} onChange={setValue}
                            placeHolder={'Tell your story'}/>
            </div>
                <button className={s.publish}>Publish</button>

        </div>
    );
};

export default WritePage;