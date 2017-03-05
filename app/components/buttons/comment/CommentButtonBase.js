import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CommentButtonBase extends Component {

    //Override on child/platform specific classes classes
    icon() {
        return null;
    }

    render() {
        const iconName = this.icon();
        const iconColor = '#D3D3D3';
        return (
            <TouchableOpacity style={[this.props.style || {}, { width: 40, height: 40 }]}>
                <Icon name={iconName} size={40} color={iconColor} />
            </TouchableOpacity>
        )
    }
}