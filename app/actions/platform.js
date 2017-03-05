import * as types from './types';
import { Platform } from 'react-native';

export function resolvePlatform() {
    return (dispatch, getState) => {
        const isiOS = Platform.OS === 'ios';
        const isAndroid = Platform.OS === 'android';
        //Is iOS
        dispatch({
            type: types.SET_IS_IOS,
            isiOS
        });
        //Is Android
        dispatch({
            type: types.SET_IS_ANDROID,
            isAndroid
        });
    }
}