import React from 'react';

import Header from '../../components/header/index';
import Preview from '../../components/preview/index';
import Trending from '../../components/trending/index';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Preview />
                <Trending />
            </React.Fragment>
        );
    }
}

export default HomePage