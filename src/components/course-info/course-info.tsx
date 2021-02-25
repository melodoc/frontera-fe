import React from 'react';

import style from './style.css';

export const CourseInfo = ({ info, description }) => (

    <div className={style.courseInfo}>
        <table className={style.courseTable}>
            <tbody>
                <tr className={style.courseRow}>
                    <td className={style.courseTerm}>Авторы</td>
                    <td className={style.courseCell}>{info.authors[0]}</td>
                </tr>
                <tr className={style.courseRow}>
                    <td className={style.courseTerm}>Язык</td>
                    <td className={style.courseCell}>{info.language}</td>
                </tr>
                <tr className={style.courseRow}>
                    <td className={style.courseTerm}>Обновлено</td>
                    <td className={style.courseCell}>{info.lastUpdate} </td>
                </tr>
                <tr className={style.courseRow}>
                    <td className={style.courseTerm}>Продолжительность</td>
                    <td className={style.courseCell}>{info.duration}</td>
                </tr>
            </tbody>
        </table>
            <p className={style.courseDescription}> { description } </p>
        </div>
);