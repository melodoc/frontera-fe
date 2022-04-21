import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Box, TextField, Button } from "@mui/material";

import { URLs } from "../../../__data__/urls";
import { getAccountData } from "../../../__data__/action/registration";
import { reset } from "../../../__data__/slice/registration";

export const Registration = ({ moveNextStep }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state: any) => state.registration.token);
  const errors = !!useSelector((state: any) => state.registration.errors);

  const handleSetLogin = (event) => {
    setLogin(event.target.value);

    if (errors) {
      dispatch(reset());
    }
  };

  const handleSetEmail = (event) => {
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
    history.push(URLs.personalization.url);
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
        {errors && <span>{t("auth.signUp.form.error")}</span>}
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
        <Button
          onClick={handleSubmit}
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
          size="large"
          sx={{ mb: 3 }}
        >
          {t("auth.singUp.button")}
        </Button>
        <Button
          onClick={handleClick}
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
          size="large"
          sx={{ mb: 3 }}
        >
          {t("auth.cancel.button")}
        </Button>
      </Box>
    </Container>
  );
};
