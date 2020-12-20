import React from 'react';
import {notebook} from './../../assets';
import Button from './../button/button';
import style from './style.css';

export const Preview = () => (
    <section className={style.preview}>
        <div className={style.preview_info}>
            <div className={style.preview_info_text}>JavaScript mastering</div>
            <div className={style.preview_info_button}>
                <Button color={'purple'} name={'continue'} />
                <Button color={'white'} name={'info'} />
            </div>
        </div>
    </section>
)