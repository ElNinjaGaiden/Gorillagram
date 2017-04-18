import { AsyncStorage } from 'react-native';
import * as types from './types';
import { languageKeyName } from '../config';

export function setIsAppWorking (isAppWorking) {
    return {
        type: types.SET_IS_APP_WORKING,
        isAppWorking
    };
}

export function setLanguage(language) {
    AsyncStorage.setItem(languageKeyName, language.languageKey)
    return {
        type: types.SET_LANGUAGE,
        language
    };
}