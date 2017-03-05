import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MoreButtonBase extends Component {

	//Override on child/platform specific classes classes
	icon() {
		return null;
	}

	render() {
		const icon = this.icon();
		const iconColor = '#D3D3D3';
		return (
			<TouchableOpacity style={[this.props.style || {}, { width: 40, height: 40 }]}>
				<Icon name={icon} size={40} color={iconColor} />
			</TouchableOpacity>
		)
	}
}