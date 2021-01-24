import { createSlice } from '@reduxjs/toolkit';

type TrendingState = {
    themes: string[],
    loading: boolean,
    errors: string[]
}
const initialState: TrendingState = {
    themes: null,
    loading: false,
    errors: null
};

const slice = createSlice({
    name: 'trending',
    initialState,
    reducers: {
        success(state, action) {
            state.themes = action.payload;
            state.loading = false;
        },
        init(state) {
            state.loading = true;
        },
        error(state, action) {
            state.errors = action.payload;
            state.loading = false;
        }
    }
});

export const {
    success,
    init,
    error
} = slice.actions;

export const reducer = slice.reducer;