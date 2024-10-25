import React, { useState } from "react";
import s from "./DinamicInput.module.scss";
import { useFormContext,useFieldArray } from "react-hook-form"
import {titleValidation} from '@/settings/validation';

const DinamicInput = () => {
 const { register,control } = useFormContext() // retrieve all hook methods
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    name: "photos",
    defaultValues: "",// unique name for your Field Array
  });
  // Function to add a new input field
  const handleAddFields = () => {
      append({value:"https"})
  };

  // Function to remove an input field by index
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

                    {...register(`photos.${index}.value`)}
          />

          <button className={s.deleteBtn} onClick={() => handleRemoveFields(inputField.id)}>
            <span>DEL</span>
          </button>
        </div>
      ))}

      <button className={s.addBtn} onClick={handleAddFields}>
        Добавить
      </button>
    </div>
  );
};

export default DinamicInput;