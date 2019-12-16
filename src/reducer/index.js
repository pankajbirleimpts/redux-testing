
import {combineReducers } from 'redux';
import SuccessReducer from './SuccessReducer';
import GuessWordReducer from './GuessWordReducer';
import SecretWordReducer from './SecretWordReducer';

export default combineReducers({
    success: SuccessReducer,
    guessedWords: GuessWordReducer,
    secretWord: SecretWordReducer
});