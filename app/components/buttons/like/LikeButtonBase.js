import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styleButtons } from '../../../styles/common/buttons';

export default class LikeButtonBase extends Component {

	constructor(props) {
		super(props);
		this.state = {
			liked: false
		};
	}

	/**
     * Virtual
     */
	icon() {
		return null;
	}

	render() {
		const icon = this.icon();
		const iconColor = this.state.liked ? '#DC143C' : '#D3D3D3';
		return (
			<TouchableOpacity onPress={this.handlePress.bind(this)} style={[this.props.style || {}, styleButtons.iconButton]}>
				<Icon name={icon} size={40} color={iconColor} />
			</TouchableOpacity>
		)
	}

	handlePress() {
		this.setState({
			liked: !this.state.liked
		});
	}
}