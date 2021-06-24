import {applyMiddleware, combineReducers, createStore} from 'redux';
import reduxThunk from 'redux-thunk'
import { LoadingReducer } from './reducers/LoadingReducer';
import { NguoiDungReducer } from './reducers/NguoiDungReducer';
import { PhimReducer } from './reducers/phimReducer';

const rootReducer = combineReducers({
    //chứa các state ứng dụng
    PhimReducer: PhimReducer,
    NguoiDungReducer,
    LoadingReducer,
})

export const store = createStore(rootReducer, applyMiddleware(reduxThunk) );