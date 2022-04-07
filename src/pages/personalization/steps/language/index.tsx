import React from 'react';
import {useTranslation} from 'react-i18next';

import Button from '../../../../components/button'

import List from '../../../../components/list';

import style from './style.css';

const ChooseLanguage = ({ moveNextStep }) => {
    const {t} = useTranslation();
    const handleSubmit = (event) => {
        event.preventDefault();
        moveNextStep();
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div className={style.formWrapper}>
                    <List labels={[{name: 'English'}, {name: 'Espanol'}, {name: 'Russian'}]}/>
                </div>
                <div className={style.buttons}>
                    <Button>
                        {t('personalizations.lang.button')}
                    </Button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default ChooseLanguage;