import style from './course-info.module.scss';

export const CourseInfo = ({ info, description }) => {
  return (
    <div className={style.CourseInfo}>
      <table className={style.CourseTable}>
        <tbody>
          <tr className={style.CourseRow}>
            <td className={style.CourseTerm}>Авторы</td>
            <td className={style.CourseCell}>{info.authors[0]}</td>
          </tr>
          <tr className={style.CourseRow}>
            <td className={style.CourseTerm}>Язык</td>
            <td className={style.CourseCell}>{info.language}</td>
          </tr>
          <tr className={style.CourseRow}>
            <td className={style.CourseTerm}>Обновлено</td>
            <td className={style.CourseCell}>{info.lastUpdate} </td>
          </tr>
          <tr className={style.CourseRow}>
            <td className={style.CourseTerm}>Продолжительность</td>
            <td className={style.CourseCell}>{info.duration}</td>
          </tr>
        </tbody>
      </table>
      <p className={style.CourseDescription}> {description} </p>
    </div>
  );
};
