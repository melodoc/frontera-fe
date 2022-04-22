import { Container, Box } from "@mui/material";

import { Header } from "../../../../components/header/header";
import { Footer } from "../../../../components/footer/footer";
import { ErrorBoundary } from "../../../../components/error-boundary/error-boundary";
import { TitleWithSubtitle } from "../../../../components/title-with-subtitle/title-with-subtitle";

// TODO: Join with PersonalizationPage
export const AuthPage = ({ children, title, descriptions }) => {
  return (
    <ErrorBoundary>
      <Header />
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TitleWithSubtitle title={title} descriptions={descriptions} />
          {children}
        </Box>
      </Container>
      <Footer
        links={[
          { id: "uhndk3uk", name: "Конфиденциальность", route: "/terms" },
          { id: "kjn348cn", name: "Условия", route: "/conditions" },
          { id: "dhbbk5", name: "Настройки", route: "/settings" },
        ]}
      />
    </ErrorBoundary>
  );
};
