import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { AppRegistry, AsyncStorage, View } from 'react-native';
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

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			store: null
		};

		AsyncStorage.getItem('localeKey').then(localeKey => {
			const _localeKey = localeKey || 'en-US';
			const locales = localesConfig.find(l => l.localeKey === localeKey);
			const store = configureStore({locales});
			this.setState({store});
		});
	}

	render() {
		return (
			this.state.store ?
			<Provider store={this.state.store}>
				<NavigationContainer />
			</Provider>
			:
			<View />
		);
	}
}

AppRegistry.registerComponent('Gorillagram', () => App);
