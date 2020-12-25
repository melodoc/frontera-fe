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
            className={style.Link}
            to={to}
        >
            {children}
        </LinkComponent>
    )
}

export const LinkButton: LinkType = ({
    type,
    to,
    children,
    className,
    as: LinkComponent
}) => {
    return (
        <LinkComponent
            className={style.button}
            to={to}
        >
            {children}
        </LinkComponent>
    )
}

export const LinkReset: LinkType = ({
    type,
    to,
    children,
    className,
    as: LinkComponent
}) => {
    return (
        <LinkComponent
            className={style.LinkReset}
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


//LinkButton = 
    //<div>111</div>

//<Link.Button/>