import { AsyncStorage } from 'react-native';
import * as types from './types';
import { localeKeyName } from '../config';

export function setIsAppWorking (isAppWorking) {
    return {
        type: types.SET_IS_APP_WORKING,
        isAppWorking
    };
}

export function setLocales(locales) {
    AsyncStorage.setItem(localeKeyName, locales.localeKey)
    return {
        type: types.SET_LOCALES,
        locales
    };
}