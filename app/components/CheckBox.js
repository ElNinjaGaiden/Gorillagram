import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import IconButton from './IconButton';
import { checkmarkIcon } from '../utils/icons';
import { yellowColor, superLightGray } from '../styles/colors';

export default class CheckBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked || true
        }
    }

    toggleChecked() {
        const newState = !this.state.checked
        this.setState({
            checked: newState
        });
        if(typeof this.props.onCheckedChange === 'function') {
            this.props.onCheckedChange(newState);
        }
    }

    render() {
        const iconColor = this.state.checked ? yellowColor : superLightGray;
        return (
            <View style={styles.container}>
                <IconButton onPress={this.toggleChecked.bind(this)} icon={checkmarkIcon} color={iconColor} />
                {
                    this.props.label &&
                    <View style={styles.labelWrapper}>
                        <Text>{this.props.label}</Text>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 40
    },
    labelWrapper: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
});