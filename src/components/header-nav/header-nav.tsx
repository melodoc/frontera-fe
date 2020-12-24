import React from 'react';
import { Link as ConnectedLink } from 'react-router-dom';
import { Link } from './../link/link';
import { URLs } from './../../__data__/urls';

interface HeaderNavProps {
    readonly labels: Array<string>;
}

export const HeaderNav = ({ labels }: HeaderNavProps) => {
    const labelsTemplate = labels.map((labelName) => (
        <Link
            type='link'
            to={URLs.login.url}
            as={ConnectedLink}>
            {labelName}
        </Link>
    ));

    return (
        <React.Fragment>
            {labelsTemplate}
        </React.Fragment>
    );
};
