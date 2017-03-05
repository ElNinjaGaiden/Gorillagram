import React, { Component } from 'react';
import { 
    StyleSheet, 
    ScrollView, 
    View, 
    Text 
} from 'react-native';
import FeedImage from './image/FeedImage';
import { connect } from 'react-redux';

class Feed extends Component {

    images() {
        return Object.keys(this.props.searchedImages).map(key => this.props.searchedImages[key]);
    }

    render() {
        const images = this.images();
        return (
            images.length ?
                <ScrollView style={styles.scrollContainer}>
                    {
                        images.map(image => {
                            return <FeedImage key={image.public_id} image={image} />;
                        })
                    }
                </ScrollView>
                :
                <View style={styles.textContainer}>
                    <Text style={styles.centerText}>No images to display</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        marginBottom: 50
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

function mapStateToProps(state) {
    return {
        searchedImages: state.searchedImages
    };
}

export default connect(mapStateToProps)(Feed);