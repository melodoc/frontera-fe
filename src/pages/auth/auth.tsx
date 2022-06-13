import { useState } from "react";
import { useTranslation } from "react-i18next";

import { AuthPage } from "./components/auth-page/auth-page";
import { Login } from "./steps/login";
import { Registration } from "./steps/registration";
import { AuthSteps } from "./constants/steps";

const steps = {
  [AuthSteps.LOGIN_STEP]: {
    component: Login,
    title: "auth.login.title",
    descriptions: "auth.login.descriptions",
    next: AuthSteps.REGISTRATION_STEP,
  },
  [AuthSteps.REGISTRATION_STEP]: {
    component: Registration,
    title: "auth.signUp.title",
    descriptions: "auth.signUp.descriptions",
    next: AuthSteps.LOGIN_STEP,
  },
};

export const Auth = () => {
  const { t } = useTranslation();

  const [currentStep, setStep] = useState(AuthSteps.LOGIN_STEP);
  const Stage = steps[currentStep].component;

  const moveNextStep = () => {
    setStep(steps[currentStep].next);
  };

  return (
    <AuthPage
      title={t(steps[currentStep].title)}
      descriptions={t(steps[currentStep].descriptions)}
    >
      <Stage moveNextStep={moveNextStep} />
    </AuthPage>
  );
};
