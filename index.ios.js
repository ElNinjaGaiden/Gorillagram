import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { AppRegistry } from 'react-native';
import reducer from './app/reducers';
import NavigationContainer from './app/containers/navigation/NavigationContainer';

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

const App = () => (
	<Provider store={store}>
		<NavigationContainer />
	</Provider>
)

AppRegistry.registerComponent('Gorillagram', () => App);
