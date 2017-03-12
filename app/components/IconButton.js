import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import buttonsStyles from '../styles/common/buttons';
import { superLightGray } from '../styles/colors';

export default class IconButton extends Component {

	onPress() {
		if(typeof this.props.onPress === 'function') {
			this.props.onPress();
		}
	}

	render() {
		const icon = this.props.icon;
		const iconColor = this.props.color || superLightGray;
		return (
			<TouchableOpacity style={[this.props.style || {}, buttonsStyles.iconButton]}
				onPress={this.onPress.bind(this)}>
				<Icon name={icon} size={40} color={iconColor} />
			</TouchableOpacity>
		)
	}
}