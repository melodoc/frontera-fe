import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';
import getValues from '../../handlers/getValues';

const titleAttributes = [
    {
        key: "login",
        value: {
            anthem: "Explore course materials in a single place",
            heading: "Welcome back! Please login to your account.",
        },
    },
    {
        key: "registartion",
        value: {
            anthem: "Explore course materials in a single place",
            heading: "Hello! Let's create your account.",
        },
    },
    {
        key: "restore",
        value: {
            anthem: "Dang.",
            heading: "Forgot your password, eh?",
        },
    },
    {
        key: "reset",
        value: {
            anthem: "Alright",
            heading: "Let's set up your new password...",
        },
    },
];

interface TitleWithSubtitleProps {
    readonly type: string;
}

export const TitleWithSubtitle: React.FC<TitleWithSubtitleProps> = ({ type }) => {
    const titleValue = getValues(titleAttributes, type);

    return (
        <React.Fragment>
            <h1 className={style.anthemItem}>{titleValue.anthem}</h1>
            <p className={style.loginHeading}>{titleValue.heading}</p>
        </React.Fragment>
    );
};

TitleWithSubtitle.propTypes = {
    type: PropTypes.string.isRequired,
}

TitleWithSubtitle.defaultProps = {
    type: 'No data',
}