import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

interface CheckboxProps {
  readonly labels: Array<string>;
}

export const Checkbox: React.FC<CheckboxProps> = ({ labels }) => {

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

Checkbox.propTypes = {
  labels: PropTypes.array.isRequired,
}

Checkbox.defaultProps = {
  labels: ['No options'],
}