/* eslint-disable react/destructuring-assignment */
import { useState } from "react";
import PropTypes from "prop-types";

import style from "./checkbox.module.scss";

// TODO: Fix eslint issues

export const Checkbox = (props) => {
  const [checked, setCheck] = useState(props.isChecked);
  const handleChange = () => {
    setCheck(!checked);
  };
  return (
    <div>
      <input
        id={props.label}
        className={style.Checkbox}
        type="checkbox"
        name={props.label}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={props.label} className={style.CheckboxLabel}>
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
