import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import Home from '../home/Home';
import Spinner from 'react-native-spinkit';
import { View, StyleSheet } from 'react-native';

export default class AppContainerBase extends Component {

    constructor(props) {
        super(props);
        this.props.resolvePlatform();
    }

    marginTop () {
        return 0;
    }

    render() {
        const marginTop = this.marginTop();
        return (
            <View style={[styles.container, { marginTop: marginTop }]}>
                <Home {...this.props} />
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
        )
    }

    static mapDispatchToPros(dispatch) {
        return bindActionCreators(ActionCreators, dispatch);
    }

    static mapStateToProps (state) {
        return {
            isAppWorking: state.isAppWorking
        };
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