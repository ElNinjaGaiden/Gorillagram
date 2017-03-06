import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const isAppWorking = createReducer(false, {
    [types.SET_IS_APP_WORKING](state, action) {
        return action.isAppWorking;
    }
});