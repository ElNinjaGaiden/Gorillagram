import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import AppNavigator from './AppNavigator';
import Spinner from 'react-native-spinkit';

export default class NavigationContainerBase extends Component {

    /**
     * Virtual
     */
    marginTop () {
        return 0;
    }

    render() {
        const marginTop = this.marginTop();
        const navHelpersConfig = {
            dispatch: this.props.dispatch,
            state: this.props.nav
        };
        return (
            <View style={[styles.container, { marginTop: marginTop }]}>
                <AppNavigator navigation={addNavigationHelpers(navHelpersConfig)}
                    ref={(o) => this.appNavigator = o} />
                {
                    this.props.isAppWorking && 
                    <View style={styles.spinnerContainer}>
                        <Spinner style={styles.spinner}
                                size={100} 
                                type={'Wave'} 
                                color={'#fdf200'}/>
                    </View>   
                }
            </View>
        );
    }

    static mapToStateProps(state) {
        return {
            nav: state.nav,
            isAppWorking: state.isAppWorking
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    spinnerContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52,52,52,0.6)'
    },
    spinner: {
        marginBottom: 50
    }
});