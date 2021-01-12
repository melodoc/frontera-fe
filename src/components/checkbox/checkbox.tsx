import React from "react";

import style from "./style.css";

interface CheckboxProps {
  readonly labels: Array<string>;
}

type CheckboxType = React.FunctionComponent<CheckboxProps>;

const Checkbox: CheckboxType = ({ labels }: CheckboxProps) => {

  let labelsTemplate = labels.map((labelName) => {
    return (
      <li className={style.checkboxItem}>
        <input
          className={style.checkbox}
          id={'filter' + labelName}
          type={'checkbox'}
          name={labelName}
        />
        <label
          className={style.checkboxLabel}
          htmlFor={'filter' + labelName}
        >
          {labelName}
        </label>
      </li>
    );
  });

  return <ul className={style.filterItem}>{labelsTemplate}</ul>;
};

export default Checkbox;
