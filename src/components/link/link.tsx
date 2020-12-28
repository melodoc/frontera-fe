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
            className={style.link}
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
            className={style.linkReset}
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

const VideoList = [{
    id: 14963052,
    title: "Локальные сервера",
    
}]