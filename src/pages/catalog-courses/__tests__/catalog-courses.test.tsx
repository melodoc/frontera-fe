import React from 'react';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { mount } from 'enzyme';
import axios from 'axios';
import { Provider } from "react-redux";
import MockAdapter from "axios-mock-adapter";

import { multipleRequest } from "../../../test-utils";
import { store } from "../../../__data__/store";
import { CatalogCourses } from '../catalog-courses';

import catalogCoursesResponse from '../../../../stubs/api/mocks/suggestions/success.json';

describe('Тестируем CatalogCourses', () => {
    let mockApi;
    beforeEach(() => {
        mockApi = new MockAdapter(axios);
    });
    it('Тестируем рендер ', async () => {
        const component = mount(
            <Provider store={store}>
                <CatalogCourses />
            </Provider>
        );
        expect(component).toMatchSnapshot();
        const response = [
            ['GET', '/suggestions/success', {}, 200, { ...catalogCoursesResponse }]
        ];
        await multipleRequest(mockApi, response);
        component.update();
        expect(component).toMatchSnapshot();
    });
});