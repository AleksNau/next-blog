import React from 'react';
import s from "./Pagination.module.scss";

const Pagination = () => {
    return (
        <div className={s.container}>
            <button className={s.button}>Previus</button>
            <button className={s.button}>Next</button>
        </div>
    );
};

export default Pagination;