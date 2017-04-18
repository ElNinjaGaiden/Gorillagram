import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import AppNavigator from '../containers/navigation/AppNavigator';
import { NavigationActions } from 'react-navigation';

const initialNavState = {
  index: 0,
  routes: [
    { key: 'initHome', routeName: 'Home' }
  ]
};

export const nav = createReducer(initialNavState, {
    [types.NAVIGATION_NAVIGATE](state, action) {
        const newState = AppNavigator.router.getStateForAction(action, state);
        if(action.params) {
            newState.params = action.params;
        }
        return newState;
    },
    
    [types.NAVIGATION_BACK](state, action) {
        return AppNavigator.router.getStateForAction(NavigationActions.back(), state);
    }
});