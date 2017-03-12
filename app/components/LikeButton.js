import React, { Component } from 'react';
import IconButton from './IconButton';
import { superLightGray, redHeart } from '../styles/colors';
import { heartIcon, heartIconOutline } from '../utils/icons';

export default class LikeButton extends Component {

	constructor(props) {
		super(props);
		this.state = {
			liked: false
		};
	}

	handlePress() {
		this.setState({
			liked: !this.state.liked
		});
	}

	render() {
		const icon = this.state.liked ? heartIcon : heartIconOutline;
		const iconColor = this.state.liked ? redHeart : superLightGray;
		return (
			<IconButton onPress={this.handlePress.bind(this)} icon={icon} color={iconColor} />
		)
	}
}