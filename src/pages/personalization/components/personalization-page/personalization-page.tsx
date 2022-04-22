import { Container, Box } from "@mui/material";

import { Header } from "../../../../components/header/header";
import { Footer } from "../../../../components/footer/footer";
import { ErrorBoundary } from "../../../../components/error-boundary/error-boundary";
import { TitleWithSubtitle } from "../../../../components/title-with-subtitle/title-with-subtitle";

export const PersonalizationPage = ({ children, title, descriptions }) => {
  return (
    <ErrorBoundary>
      <Header />
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <TitleWithSubtitle title={title} descriptions={descriptions} />
          {children}
        </Box>
      </Container>
      <Footer links={["Конфиденциальность", "Условия", "Настройки"]} />
    </ErrorBoundary>
  );
};
