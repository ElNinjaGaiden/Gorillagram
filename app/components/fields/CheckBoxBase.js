import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styleButtons } from '../../styles/common/buttons';

export default class CheckBoxBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked || true
        }
    }
    
    /**
     * Virtual
     */
    icon() {

    }

    toggleChecked() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        const iconColor = this.state.checked ? '#fdf200' : '#D3D3D3';;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toggleChecked.bind(this)} style={styleButtons.iconButton}>
                    <Icon name={this.icon()} size={40} color={iconColor} />
                </TouchableOpacity>
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