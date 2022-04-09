import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { getThemes } from "../../../../__data__/action/themes";
import { Button } from "../../../../components/button/button";
import { List } from "../../../../components/list/list";
import { Loader } from "../../../../components/loader/loader";
import style from "./categories.module.scss";

export const ChooseCategories = ({ moveNextStep }) => {
  const { t } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();
    moveNextStep();
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThemes());
  }, []);

  const { isLoading } = useSelector((state: any) => ({
    isLoading: state.themes.loading,
  }));
  const { themes } = useSelector((state: any) => ({
    themes: state.themes.themes,
  }));
  const { errors } = useSelector((state: any) => ({
    errors: state.themes.errors,
  }));

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.formWrapper}>
        {isLoading ? <Loader /> : themes && <List labels={themes} />}
        {errors && (
          <span>
            {errors.find((error) => error.field === "themes")?.text ?? ""}
          </span>
        )}
      </div>
      <div className={style.Buttons}>
        <Button>{t("personalizations.lang.button")}</Button>
      </div>
    </form>
  );
};
