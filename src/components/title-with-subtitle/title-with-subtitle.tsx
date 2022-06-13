import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";

export const TitleWithSubtitle = ({ title, descriptions }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 6,
        }}
      >
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
        <Typography variant="h6" component="h6">
          {descriptions}
        </Typography>
      </Box>
    </>
  );
};

TitleWithSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.string.isRequired,
};
