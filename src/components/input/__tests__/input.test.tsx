import React from "react";
import { mount } from 'enzyme';
import { describe, it, expect } from '@jest/globals';
import {Input} from "../input";

describe('Тестируем компонент input', () => {
    const props = {
        label: 'label',
        type: 'text'
    };
    it('Тестируем рендер компонента input', () => {
        const InputTest = mount(<Input {...props}/>);
        expect(InputTest).toMatchSnapshot();
    });

    it('Тестируем на null label', () => {
        const InputTest = mount(<Input {...props} />);
        expect(typeof InputTest.prop('id')).not.toBe(null);
    });

    it('Тестируем событие', () => {

        const testState = { value: 'test1'};
        const component = mount(<Input name="value" value={testState.value}  onChange={(e:any) => {
            testState[e.target.name] = e.target.value;
        }} />);
        expect(component).toMatchSnapshot();

        component.find('input').simulate('change', {
            target: { name: 'value', value: 'test2' }
        });
        component.setProps({ value: testState.value });

        expect(component).toMatchSnapshot();
        expect(testState.value).toEqual('test2');

    })
});