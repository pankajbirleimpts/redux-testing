import React from 'react';
import { shallow } from 'enzyme';
import Congrate from './Congrate';
import { findByAttr, checkProp } from './test/TestUtils';

const setup = (props = {}, state) => {
    return shallow(<Congrate {...props} />);
}

test('Render with out error', () => {
    const wrapper = setup({ success: false });
    const component = findByAttr(wrapper, 'component-congrate');
    expect(component.length).toBe(1);
})

test('Render no test when success will be false', () => {
    const wrapper = setup({ success: false });
    const component = findByAttr(wrapper, 'component-congrate');
    expect(component.text()).toBe('');
});



test('Render with  test when success will be true', () => {
    const wrapper = setup({ success: true });
    const component = findByAttr(wrapper, 'congrate-message');
    expect(component.text().length).not.toBe('');
})



test('Check the props type', () => {
    const expectProps = { success: false };
    checkProp(Congrate, expectProps);
})