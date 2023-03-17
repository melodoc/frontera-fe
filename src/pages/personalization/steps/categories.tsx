import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Box, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

import { UIButton } from 'shared/components/ui-button/ui-button';

import { getThemes } from '../../../__data__/action/themes';
import { Loader } from '../../../components/loader/loader';
import { useAppSelector } from '../../../__data__/store/hooks';

export const ChooseCategories = ({ moveNextStep }) => {
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    moveNextStep();
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThemes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isLoading, themes } = useAppSelector((state) => ({
    isLoading: state.themes.loading,
    themes: state.themes.themes
  }));

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
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
                  key={theme.id}
                  control={<Checkbox defaultChecked={defaultCheckedProp} />}
                  label={theme.name}
                />
              );
            })}
          </FormGroup>
        )
      )}
      <UIButton onClick={() => {}} size="small">
        {t('personalization.lang.button')}
      </UIButton>
    </Box>
  );
};
