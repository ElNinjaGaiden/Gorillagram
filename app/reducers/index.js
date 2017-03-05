import { combineReducers } from 'redux';
import * as imagesReducer from './images';
import * as plaformReducer from './platform';

export default combineReducers(Object.assign(
    imagesReducer,
    plaformReducer
));