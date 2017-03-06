import React, { Component } from 'react';
import Feed from '../../components/feed';
import {
    View,
    TouchableHighlight,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';

export default class HomeBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tag: ''
        };
    }

    render() {
        return (
            <View>
                <View style={styles.searchSection}>
                    <TextInput style={styles.searchInput}
                        returnKeyType='search'
                        placeholder='Search by tag'
                        onChangeText={this.onTagSearchChange.bind(this)}>
                    </TextInput>
                    <TouchableHighlight style={[styles.topBarButton, styles.searchButton]} onPress={this.onSearchImagesPress.bind(this)}>
                        <View style={styles.topBarButtonTextWrapper}>
                            <Text>Search</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.topBarButton} onPress={this.onAddImage.bind(this)}>
                        <View style={styles.topBarButtonTextWrapper}>
                            <Text>Add</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <Feed />
                <ActionSheet 
                    ref={(o) => this.addImageActionSheet = o}
                    options={HomeBase.AddImageOptions}
                    cancelButtonIndex={HomeBase.AddImageCancelButtonIndex}
                    onPress={this.onAddImageActionSheetPress.bind(this)}
                />
            </View>
        )
    }

    onSearchImagesPress() {
        if (this.state.tag) {
            this.props.setIsAppWorking(true);
            this.props.fetchImages(this.state.tag)
            .then(() => {
                this.props.setIsAppWorking(false);
            })
            .catch(() => {
                this.props.setIsAppWorking(false);
            });
        }
    }

    onAddImage() {
        this.addImageActionSheet.show();
    }

    onAddImageActionSheetPress(index) {
        switch(index) {
            case HomeBase.AddImageFromGalleryButtonIndex:
                this.addImageFromGallery()
                .then((imageData, imageExtension) => {
                    this.onImageDataReturned(imageData, imageExtension);
                })
                .catch(error => {
                    error && console.log(error);
                });
                break;

            case HomeBase.AddImageFromCameraButtonIndex:
                break;
        }
    }

    addImageFromGallery() {

    }

    addImageFromCamera() {

    }

    onImageDataReturned(imageData, imageExtension) {
        this.props.uploadImage(imageData, imageExtension, ['test'])
        .then(response => {
            console.log(response);
        })
        .catch(ex => {
            console.log(ex);
        });
    }

    //NOTE: current available tags on Cloudinary CDN: gorilla, pets, team, presentation, costarica, jam, boulder
    onTagSearchChange(tag) {
        this.setState({ tag });
    }

    static AddImageOptions = [
        'Gallery',
        'Camera',
        'Cancel'
    ]

    static AddImageFromGalleryButtonIndex = 0;
    static AddImageFromCameraButtonIndex = 1;
    static AddImageCancelButtonIndex = 2;

    static mapStateToProps(state) {
        return {
            searchedImages: state.searchedImages
        };
    } 
}

const styles = StyleSheet.create({
    searchSection: {
        height: 50,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        padding: 5,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 0.6,
        height: 50,
    },
    topBarButton: {
        flex: 0.2,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#fdf200'
    },
    searchButton: {
        marginRight: 5
    },
    topBarButtonTextWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});