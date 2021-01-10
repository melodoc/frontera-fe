import React from "react";

import style from "./style.css";
import getValues from "../../handlers/getValues";

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
  {
    key: "lang",
    value: {
      anthem: "Which languages do you like to watch courses in?",
      heading: "Letting us know helps set up your audio.",
    },
  },
  {
    key: "themes",
    value: {
      anthem: "Choose themes you likes",
      heading: "It will help us find courses you will love",
    },
  },
];

interface TitleWithSubtitleProps {
  readonly type: string;
}

type TitleWithSubtitleType = React.FunctionComponent<TitleWithSubtitleProps>;

const TitleWithSubtitle: TitleWithSubtitleType = ({type}: TitleWithSubtitleProps) => {
  const titleValue = getValues(titleAttributes, type);

    return (
      <React.Fragment>
        <h1 className={style.anthemItem}>{titleValue.anthem}</h1>
        <p className={style.loginHeading}>{titleValue.heading}</p>
      </React.Fragment>
    );
};

export default TitleWithSubtitle;
