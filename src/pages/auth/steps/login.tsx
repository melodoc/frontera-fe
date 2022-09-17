import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Container,
  Box,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";

import { UIButton } from "components/ui-button/ui-button";

import { URLs } from "../../../__data__/urls";
import { getLogin } from "../../../__data__/action/login";
import { reset } from "../../../__data__/slice/login";
import style from "./auth.module.scss";

export const Login = ({ moveNextStep }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state: any) => state.login.token);
  const errors = !!useSelector((state: any) => state.login.errors);

  const handleSetLogin = (event) => {
    setLogin(event.target.value);

    if (errors) {
      dispatch(reset());
    }
  };

  const handleSetPassword = (event) => {
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
        {errors && <span>{t("auth.login.form.error")}</span>}
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
          onChange={handleSetPassword}
          label={t("auth.login.form.password.label")}
          id="password"
          name="password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ mb: 3 }}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label={t("auth.login.remember")}
          sx={{ alignSelf: "start", mb: 3 }}
        />
        <div className={style.button__container}>
          <UIButton onClick={handleSubmit} size="large" wide>
            {t("auth.login.button")}
          </UIButton>
          <UIButton onClick={handleClick} size="large" wide>
            {t("auth.login.registration")}
          </UIButton>
        </div>
      </Box>
    </Container>
  );
};
