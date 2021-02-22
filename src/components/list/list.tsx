import React from 'react';

import ListItem from '../list-item'

import style from './style.css';

export const List = (props: any) => {
    return(
    <ul className={style.filterItem}>
        {
            props.labels.map((value) => (
                <ListItem key={value.name} label={value.name} isCheked={value.checked}/>
            ))
        }
    </ul>
    )
}