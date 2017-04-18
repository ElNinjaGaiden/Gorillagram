import React, { Component } from 'react';
import { 
    StyleSheet, 
    ScrollView, 
    View, 
    Text 
} from 'react-native';
import { connect } from 'react-redux';
import FeedEntry from './FeedEntry';
import Icon from 'react-native-vector-icons/Ionicons';
import { imagesIcon } from '../../utils/icons';
import { yellowColor } from '../../styles/colors';

class Feed extends Component {

    images() {
        return Object.keys(this.props.searchedImages).map(key => this.props.searchedImages[key]);
    }

    render() {
        const images = this.images();
        return (
            images.length ?
                <ScrollView>
                    {
                        images.map(image => {
                            return <FeedEntry key={image.public_id} image={image} navigation={this.props.navigation} />;
                        })
                    }
                </ScrollView>
                :
                <View style={styles.textContainer}>
                    <Icon name={imagesIcon} size={100} color={yellowColor} />
                    <Text style={styles.centerText}>{this.props.language.feed.noImagesToDisplay}</Text>
                </View>
        );
    }

    static mapStateToProps(state) {
        return {
            searchedImages: state.searchedImages,
            language: state.language
        };
    }
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerText: {
        fontSize: 20
    }
});

export default connect(Feed.mapStateToProps)(Feed);