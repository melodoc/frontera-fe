import React, { useState} from 'react';
import { useTranslation } from 'react-i18next';

import Page from './components/auth-page';

import Login from './steps/login';
import Register from './steps/registration';

import { AuthSteps } from './constants/steps';

const steps = {
    [AuthSteps.LOGIN_STEP]: {
        component: Login,
        title: 'auth.login.title',
        descriptions: 'auth.login.descriptions',
        next: AuthSteps.REGISTRATION_STEP,
    },
    [AuthSteps.REGISTRATION_STEP]: {
        component: Register,
        title: 'auth.registartion.title',
        descriptions: 'auth.registartion.descriptions',
        next: AuthSteps.LOGIN_STEP,
    },
}

export const Auth = () => {
    const { t } = useTranslation();
    const [currentStep, setStep] = useState(AuthSteps.LOGIN_STEP);
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
