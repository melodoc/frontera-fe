import { Container, Box } from "@mui/material";

import { Header } from "../../../../components/header/header";
import { Footer } from "../../../../components/footer/footer";
import { ErrorBoundary } from "../../../../components/error-boundary/error-boundary";
import { TitleWithSubtitle } from "../../../../components/title-with-subtitle/title-with-subtitle";

// TODO: Join with AuthPage
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
      <Footer
        links={[
          { id: "kjhbj4bh", name: "Конфиденциальность", route: "/terms" },
          { id: "kjn42nk", name: "Условия", route: "/conditions" },
          { id: "o6bh3jh", name: "Настройки", route: "/settings" },
        ]}
      />
    </ErrorBoundary>
  );
};
