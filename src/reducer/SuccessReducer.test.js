import SuccessReducer from './SuccessReducer';
import { actionTypes } from '../actions/index';

test("return default initial state", () => {
    const newState = SuccessReducer(undefined, null);
    expect(newState).toBe(false);
})

test("return state true upon receiving an action", () => {
    const newState = SuccessReducer(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
})
