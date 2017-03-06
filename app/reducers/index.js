import { combineReducers } from 'redux';
import * as appReducer from './app';
import * as imagesReducer from './images';
import * as plaformReducer from './platform';

export default combineReducers(Object.assign(
    appReducer,
    imagesReducer,
    plaformReducer
));