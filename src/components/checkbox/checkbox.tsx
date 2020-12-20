import React from "react";

import style from "./style.css";

interface CheckboxProps {
  readonly color: string;
  readonly labels: Array<string>;
}

type CheckboxType = React.FunctionComponent<CheckboxProps>;

const Checkbox: CheckboxType = ({color, labels }: CheckboxProps) => {

  let labelsTemplate = labels.map((labelName) => {
    return (
      <li className={style.checkboxItem}>
        <input
          className={style.form__checkbox}
          id={'filter' + labelName}
          type={'checkbox'}
          name={labelName}
        />
        <label
          className={style.form__checkboxLabel}
          htmlFor={'filter' + labelName}
        >
          {labelName}
        </label>
      </li>
    );
  });

  if (color === 'purple') {
    return <ul className={style.filterItemPurple}>{labelsTemplate}</ul>;
  }
  return <ul className={style.filterItemWhite}>{labelsTemplate}</ul>;
};

export default Checkbox;
