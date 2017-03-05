import React, { Component } from 'react';
import {
	View,
	Image,
	Dimensions,
	StyleSheet
} from 'react-native';
import * as config from '../config';
import LikeButton from './buttons/like/LikeButton';
import CommentButton from './buttons/comment/CommentButton';
import MoreButton from './buttons/more/MoreButton';

export default class FeedImage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			imageWidth: Dimensions.get('window').width
		};
	}

	render() {
		const image = `${this.props.image.public_id}.${this.props.image.format}`;
		const url = `https://res.cloudinary.com/${config.CDNCloudName}/image/upload/c_scale,w_${this.state.imageWidth}/${image}`;
		return (
			<View style={styles.feedEntry}>
				<View style={styles.top}>
					<Image source={require('../resources/img/gorilla-logo.jpg')}
						style={styles.logoImage}>

					</Image>
				</View>
				<Image source={{ uri: url }}
					style={[styles.image, { width: this.state.imageWidth }]}>
				</Image>
				<View style={styles.bottom}>
					<LikeButton style={{ marginLeft: 10 }}></LikeButton>
					<CommentButton style={{ marginLeft: 10 }}></CommentButton>
					<View style={styles.moreButtonWrapper}>
						<MoreButton style={styles.moreButton}></MoreButton>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	feedEntry: {
		height: 500,
		borderBottomColor: '#000',
		borderBottomWidth: 1,
	},
	top: {
		height: 50,
		padding: 10
	},
	logoImage: {
		width: 35,
		height: 35
	},
	image: {
		height: 400
	},
	bottom: {
		height: 50,
		padding: 5,
		flexDirection: 'row'
	},
	moreButtonWrapper: {
		flex: 1,
		alignItems: 'flex-end'
	}
});