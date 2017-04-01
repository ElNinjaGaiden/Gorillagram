import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from '../app/reducers';
import * as config from '../app/config';
import * as appActions from './actions/app';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware,
		)
	);
	return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

AsyncStorage.getItem('localeKey').then(localeKey => {
    const _localeKey = localeKey || config.defaultLocaleKey;
    const locales = localesConfig.find(l => l.localeKey === localeKey);
    store.dispatch(appActions.setLocales(locales));
});

export default store;