import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import { UITypography } from 'shared/components/ui-typography/ui-typography';

export const TitleWithSubtitle = ({ title, descriptions }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 6
        }}
      >
        <UITypography
          variant="h1"
          typographyStyle={{
            fontWeight: 'normal',
            uppercase: true,
            color: 'primary',
            marginBottom: true
          }}
        >
          {title}
        </UITypography>
        <UITypography
          variant="caption"
          typographyStyle={{
            fontWeight: 'normal',
            uppercase: true,
            color: 'primary',
            marginBottom: true
          }}
        >
          {descriptions}
        </UITypography>
      </Box>
    </>
  );
};

TitleWithSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.string.isRequired
};
