import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Box, TextField } from "@mui/material";

import { UIButton } from "shared/components/ui-button/ui-button";
import { User } from "interfaces/interfaces";

import { URLs } from "../../../__data__/urls";
import { getAccountData } from "../../../__data__/action/registration";
import { useAppSelector } from "../../../__data__/store/hooks";
import style from "./auth.module.scss";

export const Registration = ({ moveNextStep }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token } = useAppSelector((state) => ({
    token: state.registration.token,
  }));

  const handleSetLogin = (event) => {
    setLogin(event.target.value);
  };

  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeatPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getAccountData({ login, email, password } as User));
  };

  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push(URLs.personalization.url);
    }
  }, [token, history]);

  const handleClick = (event) => {
    event.preventDefault();
    moveNextStep();
  };

  return (
    <Container component="section" maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          onChange={handleSetLogin}
          label={t("auth.login.form.username.label")}
          id="username"
          name="username"
          variant="outlined"
          autoComplete="false"
          color="primary"
          type="text"
          autoFocus
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          onChange={handleSetEmail}
          label={t("auth.login.form.email.label")}
          id="userEmail"
          name="email"
          variant="outlined"
          autoComplete="false"
          color="primary"
          type="email"
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          onChange={handleChangePassword}
          label={t("auth.login.form.password.label")}
          id="password"
          name="password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          onChange={handleRepeatPassword}
          label={t("auth.login.form.repeat.password.label")}
          id="repeatPassword"
          name="repeatPassword"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ mb: 3 }}
        />
        <div className={style.button__container}>
          <UIButton onClick={handleSubmit} size="large" wide>
            {t("auth.singUp.button")}
          </UIButton>
          <UIButton onClick={handleClick} size="large" wide>
            {t("auth.cancel.button")}
          </UIButton>
        </div>
      </Box>
    </Container>
  );
};
