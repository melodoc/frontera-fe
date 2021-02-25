import React, { useState} from 'react';
import { useTranslation } from 'react-i18next';

import Page from './components/auth-page';

import Login from './steps/login';
import RecoverPassword from './steps/recover-password';
import Register from './steps/registration';
import ResetPassword from './steps/reset-password';

import { AuthSteps } from './constants/steps';

const steps = {
    [AuthSteps.LOGIN_STEP]: {
        component: Login,
        title: 'auth.login.title',
        descriptions: 'auth.login.descriptions',
        next: null,
    },
    [AuthSteps.RECOVER_PASSWORD_STEP]: {
        component: RecoverPassword,
        title: 'auth.recover.password.title',
        descriptions: 'auth.recover.password.descriptions',
        next: AuthSteps.RESET_PASSWORD_STEP,
    },
    [AuthSteps.RESET_PASSWORD_STEP]: {
        component: ResetPassword,
        title: 'auth.reset.password.title',
        descriptions: 'auth.reset.password.descriptions',
        next: AuthSteps.LOGIN_STEP,
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
