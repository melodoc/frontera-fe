import React from "react";
import PropTypes from "prop-types";

import style from "./button.module.scss";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button {...rest} className={style.button}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
