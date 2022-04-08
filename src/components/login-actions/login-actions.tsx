import { useTranslation } from "react-i18next";
import { Link as ConnectedLink } from "react-router-dom";

import { LinkReset } from "../link";
import { URLs } from "../../__data__/urls";
import { Checkbox } from "../checkbox/checkbox";
import style from "./login-actions.module.scss";

export function LoginActions() {
  const { t } = useTranslation();

  return (
    <div className={style.formActions}>
      <Checkbox label={t("auth.login.remember")} />
      <LinkReset to={URLs.auth.url} as={ConnectedLink}>
        {t("auth.login.forgot")}
      </LinkReset>
    </div>
  );
}
