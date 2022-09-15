import { detailCourseRes } from 'api/detail-course/detail-course';

import { init, success } from '../slice/detail-course';
import { handleError } from '../../services/handle-error';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../../__data__/store';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDetailCourse = createAsyncThunk(
  'data/getDetailCourse',
  async (_id: string) => {
    store.dispatch(init())
    try {
      // const { data } = await api.get<Data>(
      //   `${APIRoute.Courses}/${id}`
      // );
      // store.dispatch(success((data)));
      // Remove this later
      store.dispatch(success(detailCourseRes));
    } catch (error) {
      handleError(error);
    }
  }
);
