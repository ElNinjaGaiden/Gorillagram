import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import * as config from './config';
import * as appActions from './actions/app';
import { languageKeyName } from './config';

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

//Create the store (as a singleton, this module will always return this same instance of the store)
const store = configureStore({});

//Load the user prefered language from local storage (or use default language if there is no language pre-selection)
//Once the language is loaded the store itself dispatch the action to update the language congifuration
AsyncStorage.getItem(languageKeyName).then(languageKey => {
	const _languageKey = languageKey || config.defaultLanguageKey;
	const language = languagesConfig.find(l => l.languageKey === _languageKey);
	store.dispatch(appActions.setLanguage(language));
});

export default store;