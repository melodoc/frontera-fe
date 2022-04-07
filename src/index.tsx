import React from 'react';
import ReactDom from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './common/i18n';

import App from './app';

export default () => <App />;

export const mount = async (Component) => {

    ReactDom.render(
        <Component />,
        document.getElementById('app')
    );

    if (module.hot) {
        module.hot.accept('./app', () => {
            ReactDom.render(
                <I18nextProvider i18n={i18n}>
                    <App />
                </I18nextProvider>
                ,
                document.getElementById('app')
            );
        });
    }
};

export const unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('app'));
};

