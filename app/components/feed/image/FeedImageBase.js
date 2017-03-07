import React, { Component } from 'react';
import {
	View,
	Image,
	Dimensions,
	StyleSheet
} from 'react-native';
import * as imageUtils from '../../..//utils/images';
import LikeButton from '../../buttons/like/LikeButton';
import CommentButton from '../../buttons/comment/CommentButton';
import MoreButton from '../../buttons/more/MoreButton';

export default class FeedImageBase extends Component {

	constructor(props) {
		super(props);
		this.state = {
			imageWidth: Dimensions.get('window').width
		};
	}

	/**
     * Virtual
     */
	bottomPaddingRight () {
		return 5;
	}

	render() {
		const imageUrl = imageUtils.resolveImageUrl(this.props.image, this.state.imageWidth);
		const bottomPaddingRight = this.bottomPaddingRight();
		return (
			<View style={styles.feedEntry}>
				<View style={styles.top}>
					<Image source={require('../../../resources/img/gorilla-logo.jpg')}
						style={styles.logoImage}>
					</Image>
				</View>
				<Image source={{ uri: imageUrl }}
					style={[styles.image, { width: this.state.imageWidth }]}>
				</Image>
				<View style={[styles.bottom, {paddingRight: bottomPaddingRight}]}>
					<LikeButton style={styles.likeButton}></LikeButton>
					<CommentButton style={styles.commentButton}></CommentButton>
					<View style={styles.moreButtonWrapper}>
						<MoreButton />
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
	likeButton: {
		marginLeft: 10
	},
	commentButton: {
		marginLeft: 10
	},
	moreButtonWrapper: {
		flex: 1,
		alignItems: 'flex-end'
	}
});