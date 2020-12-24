import React from 'react';
import { Link as ConnectedLink } from 'react-router-dom';
import { Link } from './../link/link';
import { URLs } from './../../__data__/urls';

//interface HeaderNavProps {
    //readonly labels: Array<string>;
//}

//export const HeaderNav = ({ labels }: HeaderNavProps) => {
    //const labelsTemplate = labels.map((labelName) => (
        //<Link
            //type='link'
            //to={labelName}
            //as={ConnectedLink}>
           // Home
        //</Link>
    //));

    //return (
        //<React.Fragment>
            //{labelsTemplate}
        //</React.Fragment>
    //);
//};

export const HeaderNav = () => (
    <>
    <Link
        type='link'
        to={URLs.home.url}
        as={ConnectedLink}>
        Home
    </Link>
    <Link
        type='link'
        to={URLs.home.url}
        as={ConnectedLink}>
        Trending
    </Link>
    <Link
        type='link'
        to={URLs.suggestions.url}
        as={ConnectedLink}>
        Suggestion
    </Link>
    </>
)