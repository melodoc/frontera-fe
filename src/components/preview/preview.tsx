import { useHistory } from "react-router-dom";

import { Button } from "../button/button";
import { CourseHeader } from "../page-header";
import { URLs } from "../../__data__/urls";
import style from "./preview.module.scss";

// TODO: Fix hardcode
export const Preview = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`${URLs.coursePage.url}/1`);
  };
  return (
    <section className={style.Preview}>
      <div className={style.PreviewInfo}>
        <CourseHeader label="Изучаем JS" />
        <div className={style.PreviewButtons}>
          <Button onClick={handleClick}>Подробнее</Button>
        </div>
      </div>
    </section>
  );
};
