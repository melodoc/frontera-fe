import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

interface CheckboxProps {
  readonly labels: Array<{ name: string}>;
}

export class Checkbox extends React.Component<CheckboxProps>{
    renderList = (labels) => {
        return(
            <li className={style.checkboxItem}>
                <input
                id={labels.name}
                className={style.checkbox}
                type={'checkbox'}
                name={labels.name}
                />
                <label
                className={style.checkboxLabel}
                >
                    {labels.name}
                </label>
            </li>
        );
    };
    render() {
        return(
            <ul className={style.filterItem}>
                {this.props.labels.map((name) => {
                    return(
                        this.renderList(name)
                    )
                })}
            </ul>
        )
    }
}