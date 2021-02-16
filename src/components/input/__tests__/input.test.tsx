import React from "react";
import { mount } from 'enzyme';
import { describe, it, expect } from '@jest/globals';
import {Input} from "../input";
describe('Тестируем компонент input', () => {
    // it('Тестируем рендер компонента input', () => {
    //     const InputTest = mount(<Input {...props}/>);
    //     expect(InputTest).toMatchSnapshot();
    // });
    // it('Тестируем значение label', () => {
    //     const InputTest = mount(<Input {...props} />);
    //     expect(InputTest.prop('label')).toEqual('input');
    // });
    // it('Тестируем тип id', () => {
    //     const InputTest = mount(<Input {...props} />);
    //     expect(typeof InputTest.prop('id')).toBe('string');
    // });
    // it('Тестируем на null label', () => {
    //     const InputTest = mount(<Input {...props} />);
    //     expect(typeof InputTest.prop('id')).not.toBe(null);
    // });
    it.only('Тестируем событие', () => {
        const props1 = {
            id: '3',
            name: 'testInput',
            value: "test1",
            onChange: (v) => console.log(v)
        };
        const component = mount(<Input {...props1} />);
        expect(component).toMatchSnapshot();
        component.find('input').simulate('change', {
            target: { value: 'test2' }
        });
        component.update();
        expect(component).toMatchSnapshot();
        component.find('input').simulate('input', {
            target: { value: 'test3' }
        });
        component.update();
        expect(component).toMatchSnapshot();
    })
});