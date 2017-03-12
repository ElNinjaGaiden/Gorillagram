import { AsyncStorage } from 'react-native';
import * as types from './types';

export function setIsAppWorking (isAppWorking) {
    return {
        type: types.SET_IS_APP_WORKING,
        isAppWorking
    };
}

export function setLocales(locales) {
    AsyncStorage.setItem('localeKey', locales.localeKey)
    return {
        type: types.SET_LOCALES,
        locales
    };
}