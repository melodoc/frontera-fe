import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { URLs } from "../../../../__data__/urls";
import { getAccountData } from "../../../../__data__/action/registration";
import { reset } from "../../../../__data__/slice/registration";
import { Button } from "../../../../components/button/button";
import { Input } from "../../../../components/input/input";
import style from "./registration.module.scss";

export const Registration = ({ moveNextStep }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state: any) => state.registration.token);
  const errors = !!useSelector((state: any) => state.registration.errors);

  const handleChangeLogin = (event) => {
    setLogin(event.target.value);

    if (errors) {
      dispatch(reset());
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);

    if (errors) {
      dispatch(reset());
    }
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);

    if (errors) {
      dispatch(reset());
    }
  };

  const handleRepeatPassword = (event) => {
    setPassword(event.target.value);

    if (errors) {
      dispatch(reset());
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getAccountData(login, email, password));

    if (errors) {
      dispatch(reset());
    }
  };

  const history = useHistory();

  if (token) {
    history.push(URLs.personalizations.url);
  }

  const handleClick = (event) => {
    event.preventDefault();
    moveNextStep();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {errors && <span>{t("auth.registartion.form.error")}</span>}
        <div>
          <Input
            onChange={handleChangeLogin}
            label={t("auth.login.form.username.label")}
            id="username"
            name="username"
            type="text"
            placeholder="Elliot Page"
          />
          <Input
            onChange={handleChangeEmail}
            label={t("auth.login.form.email.label")}
            id="userEmail"
            name="email"
            type="email"
            placeholder="email@example.com"
          />
          <Input
            onChange={handleChangePassword}
            label={t("auth.login.form.password.label")}
            id="password"
            name="password"
            type="password"
            placeholder="••••••"
          />
          <Input
            onChange={handleRepeatPassword}
            label={t("auth.login.form.repeat.password.label")}
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            placeholder="••••••"
          />
        </div>
        <div className={style.buttons}>
          <Button>{t("auth.singup.button")}</Button>
        </div>
      </form>
      <div className={style.buttons}>
        <Button onClick={handleClick}>{t("auth.cancel.button")}</Button>
      </div>
    </>
  );
};
