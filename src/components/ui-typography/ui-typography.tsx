import classnames from "classnames";
import { useMemo, createElement } from "react";

import { IUITypography } from "./interfaces";
import style from "./ui-typography.module.scss";

export const UITypography: React.FC<IUITypography> = ({
  variant,
  children,
  href,
  title,
  typographyStyle,
  htmlFor,
  onClick,
  onBlur,
  onFocus,
  onInput,
  onKeyPress,
}) => {
  const renderVariant = useMemo(() => {
    switch (variant) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "label":
        return variant;
      case "body1":
      case "body2":
      case "subtitle1":
      case "caption":
      default:
        return "p";
    }
  }, [variant]);

  const classes = classnames(style.typography, {
    [style.typography__weight_normal]: typographyStyle?.fontWeight === "normal",
    [style.typography__weight_bold]: typographyStyle?.fontWeight === "bold",
    [style.typography__weight_bolder]: typographyStyle?.fontWeight === "bolder",
    [style.typography__uppercase]: typographyStyle?.uppercase,
  });

  return createElement(
    renderVariant,
    {
      className: classes,
      style,
      htmlFor,
      onInput,
      onClick,
      onFocus,
      onBlur,
      onKeyPress,
      href,
      title,
      "aria-describedby": "aria-describedby",
    },
    children
  );
};
