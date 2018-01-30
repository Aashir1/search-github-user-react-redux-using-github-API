import {createStore, combineReducers, applyMiddleware } from 'redux';
import StoreUser from './reducer/gitUserReducer';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
let reducers = combineReducers({
    
    StoreUser
});
const loggerMiddleware = createLogger();

let store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store;