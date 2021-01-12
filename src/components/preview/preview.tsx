import React from 'react';
import {notebook} from './../../assets';
import Button from './../button/button';
import CourseName from './../course-name'
import style from './style.css';

export const Preview = () => (
    <section className={style.preview}>
        <div className={style.preview_info}>
            <CourseName label="JavaScript mastering"/>
            <div className={style.preview_info_button}>
                <Button name={'continue'} />
                <Button name={'info'} />
            </div>
        </div>
    </section>
)