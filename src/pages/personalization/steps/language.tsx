import { useTranslation } from "react-i18next";
import {
  Box,
  FormGroup,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useSelector } from "react-redux";

import { Loader } from "components/loader/loader";

export const ChooseLanguage = ({ moveNextStep }) => {
  const { t } = useTranslation();

  const { isLoading } = useSelector((state: any) => ({
    isLoading: state.themes.loading,
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
    moveNextStep();
  };

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
        <>
          <FormGroup sx={{ mb: 3 }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={t("personalization.lang.english")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={t("personalization.lang.espanol")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={t("personalization.lang.russian")}
            />
          </FormGroup>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
            sx={{ mb: 3 }}
          >
            {t("personalization.lang.button")}
          </Button>
        </>
      )}
    </Box>
  );
};
