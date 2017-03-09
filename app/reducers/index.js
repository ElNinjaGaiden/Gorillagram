import { combineReducers } from 'redux';
import * as appReducer from './app';
import * as imagesReducer from './images';
import * as nav from './nav';

export default combineReducers(Object.assign({},
    appReducer,
    nav,
    imagesReducer
));