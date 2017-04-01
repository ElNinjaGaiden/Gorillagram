import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';
import Home from '../../views/Home';

export default class NavigationContainerBase extends Component {

    /**
     * Virtual
     */
    marginTop () {
        return 0;
    }

    render() {
        const marginTop = this.marginTop();
        return (
            <View style={[styles.container, { marginTop: marginTop }]}>
                {
                    this.props.locales && <Home {...this.props} />
                }
            </View>
        );
    }

    static mapToStateProps(state) {
        return {
            locales: state.locales
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