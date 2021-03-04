import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    loading: false,
    errors: null
};

const slice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        success(state, action) {
            state.token = action.payload;
            state.loading = false;
        },
        init(state) {
            state.loading = true;
        },
        error(state, action) {
            state.errors = action.payload;
            state.loading = false;
        },
        reset(state) {
            state.errors = false;
        }
    }
});

export const {
    init,
    success,
    error,
    reset
} = slice.actions;

export const reducer = slice.reducer;