import React from 'react';
import { mount } from 'enzyme';
import { describe, it, expect } from '@jest/globals';
import  Button from '../';


function sum(a, b) {
    return a+b;
}
const array = [1,2,3,4,5];

describe('Тестируем компонент button', () => {
    it('Тестируем рендер компонента button с текстом', ()=> {
        const ButtonTest = mount(<Button> Test 2 </Button>)
        expect(ButtonTest).toMatchSnapshot();
    })
    it.each(array)('Тестируем sum', (item)=> {
        expect(sum(item,2)).toBe(3);
    })
})  
