import React from 'react';

import style from './style.css';

type LinkProps = {
    to: string;
    className?: string;
    type?: 'link' | 'button';
    as?: any;
};

export type LinkType = React.FC<LinkProps>

export const Link: LinkType = ({
    type,
    to,
    children,
    className,
    as: LinkComponent
}) => {
    return (
        <LinkComponent
            className={style.nav__accountLink}
            to={to}
        >
            {children}
        </LinkComponent>
    )
}

Link.defaultProps = {
    type: 'link',
    as: 'a'
}


//Link.Button = <div>111</div>

//<Link.Button/>