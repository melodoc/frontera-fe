import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Box,
  FormGroup,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { getThemes } from "../../../__data__/action/themes";
import { Loader } from "../../../components/loader/loader";

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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        themes && (
          <FormGroup sx={{ mb: 3 }}>
            {themes.map((theme, index) => {
              const defaultCheckedProp = index === 0;
              return (
                <FormControlLabel
                  control={<Checkbox defaultChecked={defaultCheckedProp} />}
                  label={theme.name}
                />
              );
            })}
          </FormGroup>
        )
      )}
      {errors && (
        <span>
          {errors.find((error) => error.field === "themes")?.text ?? ""}
        </span>
      )}
      <Button
        type="submit"
        color="primary"
        variant="contained"
        size="large"
        sx={{ mb: 3 }}
      >
        {t("personalization.lang.button")}
      </Button>
    </Box>
  );
};
