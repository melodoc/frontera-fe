import { createSlice } from '@reduxjs/toolkit';

type SuggestionsState = {
    themes: string[],
    loading: boolean,
    errors: string[]
}
const initialState: SuggestionsState = {
    themes: null,
    loading: false,
    errors: null
};

const slice = createSlice({
    name: 'suggestions',
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