import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';

import reducer from '../reducers';

const middlewareOptions: any = {
    thunk: true,
    immutableCheck: false,
    serializableCheck: false,
};

export const store = configureStore({
    reducer,
    devTools: {
        name: 'Frontera',
    },
    middleware: [...getDefaultMiddleware(middlewareOptions)],
});
