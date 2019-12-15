import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

import { findByAttr, checkProp, storeFactory } from './test/TestUtils';


const setup = (props) => {
    const store = storeFactory(props);
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
}



describe("Words has not been guessed", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            success: false
        });
    });


    test('Render without error', () => {
        const component = findByAttr(wrapper, 'component-input');
        expect(component.length).toBe(1);
    });

    test('Render button component', () => {
        const component = findByAttr(wrapper, 'button');
        expect(component.length).toBe(1);
    })

    test('Render input box component', () => {
        const component = findByAttr(wrapper, 'input-box');
        expect(component.length).toBe(1);
    })
})


describe("Words has been guessed", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            success: true
        });
    });


    test('Render without error', () => {
        const component = findByAttr(wrapper, 'component-input');
        expect(component.length).toBe(1);
    });

    test('Render button component', () => {
        const component = findByAttr(wrapper, 'button');
        expect(component.length).toBe(0);
    })

    test('Render input box component', () => {
        const component = findByAttr(wrapper, 'input-box');
        expect(component.length).toBe(0);
    })
})