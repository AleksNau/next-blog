import React, { useState } from "react";
import s from "./DinamicInput.module.scss";
import {useForm} from "react-hook-form";
import {titleValidation} from '@/settings/validation';

const DinamicInput = ({inputFields,setInputFields}) => {


  // Function to add a new input field
  const handleAddFields = () => {
    setInputFields([...inputFields, { value: "" }]);
    console.log(inputFields)
  };

  // Function to remove an input field by index
  const handleRemoveFields = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  // Function to update the value of an input field
  const handleValueChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Добавить изображения</h2>

      {inputFields.map((inputField, index) => (
        <div className={s.inputContainer} key={index}>
          <input
          className={s.inputLink}
            type="url"
            placeholder="https://"
            value={inputField.value}
            onChange={(e) => handleValueChange(index, e)}
          />

          <button className={s.deleteBtn} onClick={() => handleRemoveFields(index)}>
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