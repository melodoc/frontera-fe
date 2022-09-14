import React from "react";
import classnames from "classnames";

import { ThemeType, SizeType } from "./types";
import style from "./ui-button.module.scss";

interface UIButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  size: SizeType;
  theme?: ThemeType;
}

export const UIButton: React.FC<UIButtonProps> = ({
  children,
  onClick,
  theme,
  size,
}) => {
  const classes = classnames(style.button, {
    [style.button__secondary]: theme === "secondary",
    [style.button__size_large]: size === "large",
    [style.button__size_small]: size === "small",
  });

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
