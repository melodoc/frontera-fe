import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PersonalizationPage } from './components/personalization-page/personalization-page';
import { ChooseLanguage } from './steps/language';
import { ChooseCategories } from './steps/categories';
import { Processing } from './steps/processing';
import { PersonalizationSteps } from './constants/steps';
import { Head } from '../../components/head/head';
import { useAppSelector } from '../../__data__/store/hooks';

const steps = {
  [PersonalizationSteps.LANG_STEP]: {
    component: ChooseLanguage,
    title: 'personalization.lang.title',
    descriptions: 'personalization.lang.descriptions',
    next: PersonalizationSteps.CATEGORIES_STEP
  },
  [PersonalizationSteps.CATEGORIES_STEP]: {
    component: ChooseCategories,
    title: 'personalization.categories.title',
    descriptions: 'personalization.categories.descriptions',
    next: PersonalizationSteps.PROCESSING_STEP
  },
  [PersonalizationSteps.PROCESSING_STEP]: {
    component: Processing,
    title: 'personalization.processing.title',
    descriptions: 'personalization.processing.descriptions',
    next: null
  }
};

export const Personalization = () => {
  const { t } = useTranslation();
  const [currentStep, setStep] = useState<PersonalizationSteps>(PersonalizationSteps.LANG_STEP);
  const Stage: any = steps[currentStep].component;
  const moveNextStep = () => {
    setStep(steps[currentStep].next ?? PersonalizationSteps.PROCESSING_STEP);
  };

  const { isLoading } = useAppSelector((state) => ({
    isLoading: state.suggestions.loading
  }));

  return (
    <>
      <Head title="Suggestions" isLoading={isLoading} />
      <PersonalizationPage title={t(steps[currentStep].title)} descriptions={t(steps[currentStep].descriptions)}>
        <Stage moveNextStep={moveNextStep} />
      </PersonalizationPage>
    </>
  );
};
