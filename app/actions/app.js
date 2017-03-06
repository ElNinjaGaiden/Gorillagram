import * as types from './types';

export function setIsAppWorking (isAppWorking) {
    return {
        type: types.SET_IS_APP_WORKING,
        isAppWorking
    };
}