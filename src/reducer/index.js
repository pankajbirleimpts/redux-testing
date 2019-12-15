
import {combineReducers } from 'redux';
import SuccessReducer from './SuccessReducer';

export default combineReducers({
    success: SuccessReducer
});