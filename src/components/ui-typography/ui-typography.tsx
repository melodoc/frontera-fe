import { useMemo, createElement } from "react";

import { ClassBuilder } from "../../utils/class-builder";
import { UITypographyProps } from "./interfaces";
import style from "./ui-typography.module.scss";

export const UITypography: React.FC<UITypographyProps> = ({
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

  const classBuilder: ClassBuilder = new ClassBuilder();

  const classes = useMemo(() => {
    return classBuilder
      .append(style.typography)
      .append(
        typographyStyle?.uppercase ? style.typography__uppercase : undefined
      )
      .append(
        typographyStyle?.fontWeight === "normal"
          ? style.typography__weight_normal
          : undefined
      )
      .append(
        typographyStyle?.fontWeight === "bold"
          ? style.typography__weight_bold
          : undefined
      )
      .append(
        typographyStyle?.fontWeight === "bolder"
          ? style.typography__weight_bolder
          : undefined
      )
      .append(
        typographyStyle?.color === "secondary"
          ? style.typography__color_secondary
          : style.typography__color_primary
      )
      .build();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typographyStyle?.uppercase]);

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
