import { useHistory } from "react-router-dom";

import { Button } from "../button/button";
import { CourseHeader } from "../page-header";
import { URLs } from "../../__data__/urls";
import style from "./preview.module.scss";

export const Preview = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`${URLs.coursepage.url}/1`);
  };
  return (
    <section className={style.preview}>
      <div className={style.previewInfo}>
        <CourseHeader label="Изучаем JS" />
        <div className={style.previewButtons}>
          <Button onClick={handleClick}>Подробнее</Button>
        </div>
      </div>
    </section>
  );
};
