import React from 'react';
import { BackAndroid } from 'react-native';
import { connect } from 'react-redux';
import NavigationContainerBase from './NavigationContainerBase';

class NavigationContainer extends NavigationContainerBase {

    constructor(props) {
        super(props);

        //Add support to hardware back button
        BackAndroid.addEventListener('hardwareBackPress', () => {
            const currentNavState = this.appNavigator.props.navigation.state;
            if(currentNavState.index) {
                this.appNavigator.props.navigation.goBack();
                return true;
            }
            return false;
        });
    }
}

export default connect(NavigationContainerBase.mapToStateProps)(NavigationContainer);