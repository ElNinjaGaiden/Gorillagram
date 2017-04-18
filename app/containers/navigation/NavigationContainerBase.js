import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import AppNavigator from './AppNavigator';
import ProgressSpinner from '../../components/ProgressSpinner';

export default class NavigationContainerBase extends Component {

    /**
     * Virtual
     */
    marginTop () {
        return 0;
    }

    render() {
        const navHelpersConfig = {
            dispatch: this.props.dispatch,
            state: this.props.nav
        };
        return (
            <View style={[styles.container, { marginTop: this.marginTop() }]}>
                {
                    this.props.language &&
                    <AppNavigator navigation={addNavigationHelpers(navHelpersConfig)} ref={(o) => this.appNavigator = o} />
                }
                {
                    this.props.isAppWorking && <ProgressSpinner />
                }
            </View>
        );
    }

    static mapToStateProps(state) {
        return {
            nav: state.nav,
            language: state.language,
            isAppWorking: state.isAppWorking
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});