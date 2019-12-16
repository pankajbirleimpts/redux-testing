import { createStore, applyMiddleware} from 'redux';
import RootReducer from './reducer';
import ReduxThunk from 'redux-thunk';


export default createStore(RootReducer, applyMiddleware(ReduxThunk));