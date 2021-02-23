import React from 'react';

import style from './style.css';

export const CourseInfo = ({ info, description }) => (
        
        <div className={style.courseInfo}>
          <table className={style.courseTable}>
            <tr className={style.courseRow}>
              <td className={style.courseTerm}>Аuthors</td>
              <td className={style.courseCell}>{ info.authors[0] }</td>
            </tr>
            <tr className={style.courseRow}>
              <td className={style.courseTerm}>Language</td>
              <td className={style.courseCell}>{ info.language}</td>
            </tr>
            <tr className={style.courseRow}>
              <td className={style.courseTerm}>Last update</td>
              <td className={style.courseCell}>{ info.lastUpdate } </td>
            </tr>
            <tr className={style.courseRow}>
              <td className={style.courseTerm}>Duration</td>
              <td className={style.courseCell}>{ info.duration }</td>
            </tr>
          </table>
            <p className={style.courseFilmDescription}> { description } </p>
        </div>
);