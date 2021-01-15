import React from 'react';
import Button from './../button/';
import CourseName from './../course-name'

import style from './style.css';

export const Preview = () => (
    <section className={style.preview}>
        <div className={style.previewInfo}>
            <CourseName label="JavaScript mastering"/>
            <div className={style.previewButtons}>
                <Button type="submit">
                    Continue
                </Button>
                <Button type="submit">
                    Info
                </Button>
            </div>
        </div>
    </section>
)