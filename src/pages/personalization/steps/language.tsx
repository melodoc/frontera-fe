import { useTranslation } from "react-i18next";
import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import { Loader } from "components/loader/loader";
import { UIButton } from "components/ui-button/ui-button";

import { useAppSelector } from '../../../__data__/store/hooks';

export const ChooseLanguage = ({ moveNextStep }) => {
  const { t } = useTranslation();

  const { isLoading } = useAppSelector((state) => ({
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <FormGroup sx={{ mb: 3 }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={t('personalization.lang.english')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={t('personalization.lang.espanol')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={t('personalization.lang.russian')}
            />
          </FormGroup>
          <UIButton onClick={() => {}} size="large">
            {t("personalization.lang.button")}
          </UIButton>
        </>
      )}
    </Box>
  );
};
