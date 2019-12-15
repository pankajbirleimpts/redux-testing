import { actionTypes } from '../actions';

export default function (state = false, action) {
    switch (action && action.type) {
        case actionTypes.CORRECT_GUESS:
            return true;
        default:
            return state;
    }
}   