import { getLetterMatchCount } from "../helper";
import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD"
};

export function guessWord(guessedWord) {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    console.log("secretWord ", secretWord);
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {
        guessedWord,
        letterMatchCount
      }
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS
      });
    }
  };
}

export function getSecretWord() {
  return dispatch => {
    return axios.get("https://api.myjson.com/bins/68ob0").then(response => {
      dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: response.data
      });
    });
  };
}
