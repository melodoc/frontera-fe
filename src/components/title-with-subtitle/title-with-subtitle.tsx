import React from "react";

import style from "./style.css";
import getValues from "../../handlers/getValues";

const titleAttributes = [
  {
    key: "login",
    value: {
      pageTitle: "Login FrontEra",
      anthem: "Explore course materials in a single place",
      heading: "Welcome back! Please login to your account.",
    },
  },
  {
    key: "registartion",
    value: {
      pageTitle: "Create FrontEra account",
      anthem: "Explore course materials in a single place",
      heading: "Hello! Let's create your account.",
    },
  },
  {
    key: "restore",
    value: {
      pageTitle: "Restore FrontEra account",
      anthem: "Dang.",
      heading: "Forgot your password, eh?",
    },
  },
  {
    key: "reset",
    value: {
      pageTitle: "Reset FrontEra password",
      anthem: "Alright",
      heading: "Let's set up your new password...",
    },
  },
  {
    key: "lang",
    value: {
      pageTitle: "Choosing languages",
      anthem: "Which languages do you like to watch courses in?",
      heading: "Letting us know helps set up your audio.",
    },
  },
  {
    key: "themes",
    value: {
      pageTitle: "Choosing themes",
      anthem: "Choose themes you likes",
      heading: "It will help us find courses you will love",
    },
  },
];

interface TitleWithSubtitleProps {
  readonly type: string;
  readonly color: string;
}

type TitleWithSubtitleType = React.FunctionComponent<TitleWithSubtitleProps>;

const TitleWithSubtitle: TitleWithSubtitleType = ({
  color,
  type,
}: TitleWithSubtitleProps) => {
  const titleValue = getValues(titleAttributes, type);
  if (color === "purple") {
    return (
      <div>
        <h1 className={style.visuallyHidden}>{titleValue.pageTitle}</h1>
        <div className={style.anthem}>
          <p className={style.anthem__itemPurple}>{titleValue.anthem}</p>
        </div>
        <p className={style.login__headingPurple}>{titleValue.heading}</p>
      </div>
    );
  }
  return (
    <div>
      <h1 className={style.visuallyHidden}>{titleValue.pageTitle}</h1>
      <div className={style.anthem}>
        <p className={style.anthem__item}>{titleValue.anthem}</p>
      </div>
      <p className={style.login__heading}>{titleValue.heading}</p>
    </div>
  );
};

export default TitleWithSubtitle;
