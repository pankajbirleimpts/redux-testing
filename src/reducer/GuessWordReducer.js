import { actionTypes } from "../actions";

export default function(state = [], action) {
  switch (action && action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
}
