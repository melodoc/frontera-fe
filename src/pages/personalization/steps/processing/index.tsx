import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom'

import {URLs} from '../../../../__data__/urls';
import Loader from '../../../../components/loader';

const Processing = () => {
    const history = useHistory();

    useEffect(()=> {
        setTimeout(()=> {
            history.push(URLs.home.url);
        }, 2000)
    }, [])


    return (
        <React.Fragment>
            <section>
                <Loader/>
            </section>
        </React.Fragment>
    );
}


export default Processing;
