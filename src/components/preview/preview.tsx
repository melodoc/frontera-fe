import React from 'react';
import { useHistory } from 'react-router-dom'

import Button from './../button/';
import { CourseHeader } from '../page-header'

import style from './style.css';
import {URLs} from "../../__data__/urls";

export const Preview = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`${URLs.coursepage.url}/1`);
    };
   return (
        <section className={style.preview}>
            <div className={style.previewInfo}>
                <CourseHeader label="JavaScript mastering"/>
                <div className={style.previewButtons}>
                    <Button onClick={handleClick}>
                        Info
                    </Button>
                </div>
            </div>
        </section>
    )
}