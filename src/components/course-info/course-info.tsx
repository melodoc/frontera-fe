import React from 'react';

import style from './style.css';

export const CourseInfo = () => (
        <div className={style.courseInfo}>
          <table className={style.courseTable}>
            <tr className={style.courseRow}>
              <td className={style.courseTerm}>Аuthors</td>
              <td className={style.courseCell}>Kim Chen</td>
            </tr>
            <tr className={style.courseRow}>
              <td className={style.courseTerm}>Language</td>
              <td className={style.courseCell}>English</td>
            </tr>
            <tr className={style.courseRow}>
              <td className={style.courseTerm}>Last update</td>
              <td className={style.courseCell}>7/2020</td>
            </tr>
            <tr className={style.courseRow}>
              <td className={style.courseTerm}>Duration</td>
              <td className={style.courseCell}>5h 18m</td>
            </tr>
          </table>
          <p className={style.courseFilmDescription}>
            Learn how to create high performance web app with react. Hooks, Redux, React Routing, useContext, Fireabase and more
            Learn how to create high performance web app with react. Hooks, Redux, React Routing, useContext, Fireabase and more
            Learn how to create high performance web app with react. Hooks, Redux, React Routing, useContext, Fireabase and more
          </p>
        </div>
);