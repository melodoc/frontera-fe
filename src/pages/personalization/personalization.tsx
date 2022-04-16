import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Page } from "./components/prelogin-page/prelogin-page";
import { ChooseLanguage } from "./steps/language/language";
import { ChooseCategories } from "./steps/categories/categories";
import { Processing } from "./steps/processing";
import { PersonalizationSteps } from "./constants/steps";

const steps = {
  [PersonalizationSteps.LANG_STEP]: {
    component: ChooseLanguage,
    title: "personalization.lang.title",
    descriptions: "personalization.lang.descriptions",
    next: PersonalizationSteps.CATEGORIES_STEP,
  },
  [PersonalizationSteps.CATEGORIES_STEP]: {
    component: ChooseCategories,
    title: "personalization.categories.title",
    descriptions: "personalization.categories.descriptions",
    next: PersonalizationSteps.PROCESSING_STEP,
  },
  [PersonalizationSteps.PROCESSING_STEP]: {
    component: Processing,
    title: "personalization.processing.title",
    descriptions: "personalization.processing.descriptions",
    next: null,
  },
};

export const Personalization = () => {
  const { t } = useTranslation();
  const [currentStep, setStep] = useState<PersonalizationSteps>(
    PersonalizationSteps.LANG_STEP
  );
  const Stage: any = steps[currentStep].component;
  const moveNextStep = () => {
    setStep(steps[currentStep].next ?? PersonalizationSteps.PROCESSING_STEP);
  };

  return (
    <Page
      title={t(steps[currentStep].title)}
      descriptions={t(steps[currentStep].descriptions)}
    >
      <Stage moveNextStep={moveNextStep} />
    </Page>
  );
};
