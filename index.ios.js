/*import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, AsyncStorage, View } from 'react-native';
import reducer from './app/reducers';
import NavigationContainer from './app/containers/navigation/NavigationContainer';
import * as config from './app/config';
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

AppRegistry.registerComponent('Gorillagram', () => App);*/


import registerConnectedScreen from './app/utils/registerConnectedScreen';

registerConnectedScreen(
  'Home',
  () => require('./app/views/Home'),
  {
    getStore: () => require('./app/store'),
  },
);