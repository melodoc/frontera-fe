import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line prettier/prettier
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import { URLs } from "../../../../__data__/urls";
import { getLogin } from "../../../../__data__/action/login";
import { reset } from "../../../../__data__/slice/login";
// import { Button } from "../../../../components/button/button";
import { Input } from "../../../../components/input/input";
import style from "./login.module.scss";

export const Login = ({ moveNextStep }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state: any) => state.login.token);
  const errors = !!useSelector((state: any) => state.login.errors);

  const handleChangeLogin = (event) => {
    setLogin(event.target.value);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getLogin(login, password));

    if (errors) {
      dispatch(reset());
    }
  };

  const history = useHistory();

  if (token) {
    history.push(URLs.home.url);
  }

  const handleClick = (event) => {
    event.preventDefault();
    moveNextStep();
  };

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[900]),
    backgroundColor: purple[900],
    "&:hover": {
      backgroundColor: purple[800],
    },
  }));

  return (
    <>
      <form onSubmit={handleSubmit}>
        {errors && <span>{t("auth.login.form.error")}</span>}
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
            onChange={handleChangePassword}
            label={t("auth.login.form.password.label")}
            id="password"
            name="password"
            type="password"
            placeholder="••••••"
          />
        </div>
      </form>
      <div className={style.Buttons}>
        {/* https://mui.com/material-ui/react-button/#main-content */}
        <ColorButton onClick={handleSubmit} type="submit">
          {t("auth.login.button")}
        </ColorButton>
        <ColorButton onClick={handleClick} type="submit">
          {t("auth.login.registration")}
        </ColorButton>
      </div>
    </>
  );
};
