import React from 'react';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { mount } from 'enzyme';
import axios from 'axios';
import { Provider } from "react-redux";
import MockAdapter from "axios-mock-adapter";

import { multipleRequest } from "../../../test-utils";
import { store } from "../../../__data__/store";
import { DetailCourse } from "../detail-course";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const detailCourseResponse = require('../../../../stubs/api/mocks/detail-course/success');

describe('Тестируем DetailCourse', () => {
    let mockApi;
    beforeEach(() => {
        mockApi = new MockAdapter(axios);
    });
    it('Тестируем рендер ', async () => {
        const courseId = 1;
        const component = mount(
            <Provider store={store}>
                <DetailCourse courseId={courseId} />
            </Provider>
        );
        expect(component).toMatchSnapshot();
        const response = [
            ['GET', `/detail-course/${courseId}`, {}, 200, { ...detailCourseResponse }]
        ];
        await multipleRequest(mockApi, response);
        component.update();
        expect(component).toMatchSnapshot();
    });
});