import { createSlice } from '@reduxjs/toolkit';

type Video = {
    label: string;
    imageSrc: string;
    id: number;
    videoSrc: string;
};

type Info = {
    authors: string[];
    language: string;
    lastUpdate: string;
    duration: string;
};

type Data = {
    title: string;
    id: number;
    description: string;
    info: Info;
    videoList: Array<Video>;
};

type DetailCourseState = {
    data: Data;
    loading: boolean;
    errors: string[];
};
const initialState: DetailCourseState = {
    data: {
        title: '',
        id: 0,
        description: '',
        info: {
            authors: [''],
            language: '',
            lastUpdate: '',
            duration: '',
        },
        videoList: [],
    },
    loading: false,
    errors: [''],
};

const slice = createSlice({
    name: 'detailCourse',
    initialState,
    reducers: {
        success(state, action) {
            state.data = action.payload;
            state.loading = false;
        },
        init(state) {
            state.loading = true;
        },
        error(state, action) {
            state.errors = action.payload;
            state.loading = false;
        },
    },
});

export const { success, init, error } = slice.actions;

export const { reducer } = slice;
