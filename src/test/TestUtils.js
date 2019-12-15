import React from 'react';
import checkPropTypes from 'check-prop-types';
import { createStore } from "redux";
import RootReducer from "../reducer";

export const storeFactory = (initialState) => {
    return createStore(RootReducer, initialState);
}

export const findByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProp = (component, confirmingProps) => {
    const propError = checkPropTypes(component.propTypes, confirmingProps, 'prop', component.name)
    expect(propError).toBeUndefined();
}