import React, { Component } from 'react';
import { 
    StyleSheet, 
    ScrollView, 
    View, 
    Text 
} from 'react-native';
import FeedImage from '../image/FeedImage';
import Icon from 'react-native-vector-icons/Ionicons';

export default class FeedBase extends Component {

    images() {
        return Object.keys(this.props.searchedImages).map(key => this.props.searchedImages[key]);
    }

    /**
     * Virtual
     */
    noImagesIcon() {

    }

    render() {
        const images = this.images();
        return (
            images.length ?
                <ScrollView>
                    {
                        images.map(image => {
                            return <FeedImage key={image.public_id} image={image} />;
                        })
                    }
                </ScrollView>
                :
                <View style={styles.textContainer}>
                    <Icon name={this.noImagesIcon()} size={100} color={'#fdf200'} />
                    <Text style={styles.centerText}>No images to display</Text>
                </View>
        );
    }

    static mapStateToProps(state) {
        return {
            searchedImages: state.searchedImages
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