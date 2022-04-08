import { useTranslation } from "react-i18next";

import { Button } from "../../../../components/button/button";
import { List } from "../../../../components/list/list";
import style from "./language.module.scss";

export const ChooseLanguage = ({ moveNextStep }) => {
  const { t } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();
    moveNextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.formWrapper}>
        <List
          labels={[
            { name: "English" },
            { name: "Espanol" },
            { name: "Russian" },
          ]}
        />
      </div>
      <div className={style.buttons}>
        <Button>{t("personalizations.lang.button")}</Button>
      </div>
    </form>
  );
};
