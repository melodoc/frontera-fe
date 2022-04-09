import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { PageHeader } from "../page-header";
import { CourseCards } from "../course-cards/course-cards";
import style from "./trending.module.scss";
import { getCourses } from "../../__data__/action/trending";
import { Loader } from "../loader/loader";

export const Trending = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  const { isLoading } = useSelector((state: any) => ({
    isLoading: state.trending.loading,
  }));

  const { themes } = useSelector((state: any) => ({
    themes: state.trending.themes,
  }));

  const { errors } = useSelector((state: any) => ({
    errors: state.trending.errors,
  }));

  return (
    <div className={style.Wrapper}>
      <PageHeader label={t("home.trends.title")} />
      {isLoading ? (
        <Loader />
      ) : (
        themes && <CourseCards showNumber cards={themes} />
      )}
      {errors && (
        <span>
          {errors.find((error) => error.field === "trending")?.text ?? ""}
        </span>
      )}
    </div>
  );
};
