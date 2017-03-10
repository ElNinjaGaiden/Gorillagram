import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styleButtons } from '../../../styles/common/buttons';

export default class MoreButtonBase extends Component {

	/**
     * Virtual
     */
	icon() {
		return null;
	}

	render() {
		const icon = this.icon();
		const iconColor = '#D3D3D3';
		return (
			// { width: 40, height: 40 }
			<TouchableOpacity style={[this.props.style || {}, styleButtons.iconButton]}>
				<Icon name={icon} size={40} color={iconColor} />
			</TouchableOpacity>
		)
	}
}