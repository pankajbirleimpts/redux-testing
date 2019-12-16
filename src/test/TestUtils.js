import React from "react";
import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducer";
import ReduxThunk from "redux-thunk";

export const storeFactory = initialState => {
  return createStore(RootReducer, initialState, applyMiddleware(ReduxThunk));
};

export const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProp = (component, confirmingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    confirmingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
