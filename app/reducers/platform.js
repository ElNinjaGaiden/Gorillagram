import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const isiOS = createReducer(false, {
    [types.SET_IS_IOS](state, action) {
        return action.isiOS;
    }
});

export const isAndroid = createReducer(false, {
    [types.SET_IS_ANDROID](state, action) {
        return action.isAndroid;
    }
});