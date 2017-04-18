import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const isAppWorking = createReducer(false, {
    [types.SET_IS_APP_WORKING](state, action) {
        return action.isAppWorking;
    }
});

export const language = createReducer(null, {
    [types.SET_LANGUAGE](state, action) {
        return action.language;
    }
});