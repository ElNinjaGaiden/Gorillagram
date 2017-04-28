import React, { Component } from 'react';
import {
	View,
	Image,
	Dimensions,
	Text,
	StyleSheet
} from 'react-native';
import * as imageUtils from '../../utils/images';
import buttonsStyles from '../../styles/common/buttons';
import LikeButton from '../LikeButton';
import IconButton from '../IconButton';
import { locationIcon, commentIcon, moreIcon } from '../../utils/icons';
import { blackColor, lightGray } from '../../styles/colors';

export default class FeedEntry extends Component {

	constructor(props) {
		super(props);
		this.state = {
			imageWidth: Math.ceil(Dimensions.get('window').width)
		};
	}

	onLocationPress() {
		if (this.props.image.context && this.props.image.context.custom &&
			this.props.image.context.custom.latitude && this.props.image.context.custom.longitude) {

			const location = {
				latitude: parseFloat(this.props.image.context.custom.latitude),
				longitude: parseFloat(this.props.image.context.custom.longitude),
			};
			this.props.navigation.navigate('MapContainer', { marker: location });
		}
	}

	/**
     * Virtual
     */
	bottomPaddingRight() {
		return 5;
	}

	render() {
		const image = this.props.image;
		const imageUrl = imageUtils.resolveImageUrl(image, this.state.imageWidth);
		const bottomPaddingRight = this.bottomPaddingRight();
		const imageHasLocation = image.context && image.context.custom &&
			image.context.custom.latitude && image.context.custom.longitude;
		return (
			<View style={styles.feedEntry}>
				<View style={styles.top}>
					<Image source={require('../../resources/img/gorilla-logo.jpg')}
						style={styles.logoImage}>
					</Image>
					{
						imageHasLocation &&
						<View style={styles.rightButtonWrapper}>
							<IconButton icon={locationIcon} onPress={this.onLocationPress.bind(this)} />
						</View>
					}
				</View>
				<Image source={{ uri: imageUrl }}
					style={[styles.image, { width: this.state.imageWidth }]}>
				</Image>
				{
					this.props.image.context && image.context.custom && image.context.custom.caption &&
					<View style={styles.captionContainer}>
						<Text style={styles.captionText} >{image.context.custom.caption}</Text>
					</View>
				}
				<View style={[styles.bottom, { paddingRight: bottomPaddingRight }]}>
					<LikeButton />
					<IconButton icon={commentIcon} style={buttonsStyles.marginLeftButton} />
					<View style={styles.rightButtonWrapper}>
						<IconButton icon={moreIcon} />
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	feedEntry: {
		borderBottomColor: blackColor,
		borderBottomWidth: 1,
	},
	top: {
		height: 60,
		padding: 10,
		flexDirection: 'row'
	},
	logoImage: {
		width: 40,
		height: 40
	},
	image: {
		height: 400
	},
	captionContainer: {
		padding: 10
	},
	captionText: {
		fontSize: 16,
		color: lightGray
	},
	bottom: {
		//Why this weird math??
		padding: 10,
		paddingBottom: 5,
		flexDirection: 'row'
	},
	rightButtonWrapper: {
		flex: 1,
		alignItems: 'flex-end'
	}
});