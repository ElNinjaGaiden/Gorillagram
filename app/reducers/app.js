import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import localesConfig from '../config/locales';

export const isAppWorking = createReducer(false, {
    [types.SET_IS_APP_WORKING](state, action) {
        return action.isAppWorking;
    }
});

export const locales = createReducer(localesConfig[0], {
    [types.SET_LOCALES](state, action) {
        return action.locales;
    }
});