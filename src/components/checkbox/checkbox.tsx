/* eslint-disable react/destructuring-assignment */
import { useState } from "react";
import PropTypes from "prop-types";

import style from "./checkbox.module.scss";

export const Checkbox = (props) => {
  const [checked, setCheck] = useState(props.isChecked);
  const handleChange = () => {
    setCheck(!checked);
  };
  return (
    <div>
      <input
        id={props.label}
        className={style.checkbox}
        type="checkbox"
        name={props.label}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={props.label} className={style.checkboxLabel}>
        {props.label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  isChecked: false,
};
