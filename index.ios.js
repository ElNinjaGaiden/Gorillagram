import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import NavigationContainer from './app/containers/navigation/NavigationContainer';
import store from './app/store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<NavigationContainer />
			</Provider>
		);
	}
}

AppRegistry.registerComponent('Gorillagram', () => App);
