import { useHistory, Link as ConnectedLink } from "react-router-dom";
import i18next from "i18next";

import { UIButton } from "../ui-button/ui-button";
import { CourseHeader } from "../page-header";
import { URLs } from "../../__data__/urls";
import { Link as UILink } from "../link/link";
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
          <UIButton onClick={handleClick} size="large">
            Подробнее
          </UIButton>
        </div>
      </div>
      <UILink to={URLs.catalogCourses.url} as={ConnectedLink}>
        {i18next.t("js.navigation.suggestion")}
      </UILink>
    </section>
  );
};
