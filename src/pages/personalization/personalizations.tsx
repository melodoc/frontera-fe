import React, { useState} from 'react';
import { useTranslation } from 'react-i18next';

import Page from './components/prelogin-page';

import ChooseLanguage from './steps/language';
import ChooseCategories from './steps/categories';
import Processing from './steps/processing';
import { PersonalizationsSteps } from './constants/steps';

const steps = {
    [PersonalizationsSteps.LANG_STEP]: {
        component: ChooseLanguage,
        title: 'personalizations.lang.title',
        descriptions: 'personalizations.lang.descriptions',
        next: PersonalizationsSteps.CATEGORIES_STEP,
    },
    [PersonalizationsSteps.CATEGORIES_STEP]: {
        component: ChooseCategories,
        title: 'personalizations.categories.title',
        descriptions: 'personalizations.categories.descriptions',
        next: PersonalizationsSteps.PROCESSING_STEP,
    },
    [PersonalizationsSteps.PROCESSING_STEP]: {
        component: Processing,
        title: 'personalizations.processing.title',
        descriptions: 'personalizations.processing.descriptions',
        next: null,
    },
}

export const Personalizations = () => {
    const { t } = useTranslation();
    const [currentStep, setStep] = useState(PersonalizationsSteps.LANG_STEP);
    const Stage: any = steps[currentStep].component;
    const moveNextStep = () => {
        setStep(steps[currentStep].next)
    }

    return (
        <Page title={t(steps[currentStep].title)} descriptions={t(steps[currentStep].descriptions)}>
            <Stage moveNextStep={moveNextStep} />
        </Page>
    )
}
