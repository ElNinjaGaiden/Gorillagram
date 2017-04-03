import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';
import { yellowColor, modalBackground } from '../styles/colors';

export default class ProgressSpinner extends Component {
    render () {
        return (
            <View style={styles.spinnerContainer}>
                <Spinner style={styles.spinner}
                        size={100} 
                        type={'Wave'} 
                        color={yellowColor}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    spinnerContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: modalBackground
    },
    spinner: {
        marginBottom: 50
    }
});