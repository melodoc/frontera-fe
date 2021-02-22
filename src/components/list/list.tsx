import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../list-item'

import style from './style.css';
import value from '*.svg';

//interface ListProps {
    //readonly labels: Array<{ name: string}>;
//}

export const List = (props: any) => {
    return(
    <ul className={style.filterItem}>
        {
            props.labels.map((value) => (
                <ListItem labels={value.name}/>
            ))
        }
    </ul>
    )
}
    