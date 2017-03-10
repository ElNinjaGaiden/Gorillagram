import React, { Component } from 'react';
import {
	View,
	Image,
	Dimensions,
	Text,
	StyleSheet
} from 'react-native';
import * as imageUtils from '../../..//utils/images';
import { styleButtons } from '../../../styles/common/buttons';
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
				{
					this.props.image.context && this.props.image.context.custom && this.props.image.context.custom.caption &&
					<View style={styles.captionContainer}>
						<Text style={styles.captionText} >{this.props.image.context.custom.caption}</Text>
					</View>
				}
				<View style={[styles.bottom, {paddingRight: bottomPaddingRight}]}>
					<LikeButton />
					<CommentButton style={styleButtons.marginLeftButton}/>
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
	captionContainer: {
		padding: 10
	},
	captionText: {
		fontSize: 16,
		color: '#696969'
	},
	bottom: {
		//Why this weird math??
		padding: 10,
		paddingBottom: 5,
		flexDirection: 'row'
	},
	moreButtonWrapper: {
		flex: 1,
		alignItems: 'flex-end'
	}
});