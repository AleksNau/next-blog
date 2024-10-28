import React from "react";
import s from "./DinamicInput.module.scss";
import {useFieldArray, useFormContext} from "react-hook-form"
import {linkValidation} from '@/settings/validation';

const DinamicInput = () => {
    const {register, control, formState: {errors}} = useFormContext() // retrieve all hook methods
    const {fields, append,  remove} = useFieldArray({
        control,
        name: "photos",
        defaultValues: "",
    });

    const handleAddFields = () => {
        append({value: "https"})
    };


    const handleRemoveFields = (index) => {
        remove(index)
    };

    return (
        <div className={s.container}>
            <h2 className={s.title}>Добавить изображения</h2>
            {fields.map((inputField, index) => (
                <div className={s.inputContainer} key={inputField.id}>
                    <input
                        className={s.inputLink}
                        type="url"
                        placeholder="https://"
                        {...register(`photos.${index}.value`, linkValidation)}
                    />
                    <button className={s.deleteBtn} onClick={() => handleRemoveFields(inputField.id)}>
                        <span>DEL</span>
                    </button>
                    <span className={s.error}>{errors.photos?.[index]?.value.message}&nbsp;</span>
                </div>
            ))}
            <button className={s.addBtn} onClick={handleAddFields}>
                Добавить
            </button>
        </div>
    );
};

export default DinamicInput;