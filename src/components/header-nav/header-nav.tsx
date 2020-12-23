import React from 'react';
import { Link as ConnectedLink } from 'react-router-dom';
import { Link } from './../link/link';
import { URLs } from './../../__data__/urls';

export const HeaderNav = () => (
    <React.Fragment>
        <Link
            type='link'
            to={URLs.login.url}
            as={ConnectedLink}>
            Home
                </Link>
        <Link
            type='link'
            to={URLs.login.url}
            as={ConnectedLink}>
            Trending
                </Link>
        <Link
            type='link'
            to={URLs.login.url}
            as={ConnectedLink}>
            Suggestions
                </Link>
    </React.Fragment>
)