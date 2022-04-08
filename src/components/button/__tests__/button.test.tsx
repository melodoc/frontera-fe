import React from 'react';
import { mount } from 'enzyme';
import { describe, it, expect } from '@jest/globals';

import Button from '..';

describe('Тестируем компонент button', () => {
    it('Тестируем рендер компонента button с текстом', () => {
        const ButtonTest = mount(<Button> Test 2 </Button>);
        expect(ButtonTest).toMatchSnapshot();
    });
});
