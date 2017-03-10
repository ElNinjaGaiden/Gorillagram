import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionSheet from 'react-native-actionsheet';
import Feed from '../../components/feed/feed/Feed';
import { styleButtons } from '../../styles/common/buttons';

export default class HomeBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tag: '',
            topBarButtonsIconColor: '#000000'
        };
    }

    onSearchImagesPress() {
        if (this.state.tag) {
            this.props.setCurrentSearchTag(this.state.tag);
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
                .then(image => {
                    this.onImageDataReturned(image);
                })
                .catch(error => {
                    error && console.log(error);
                });
                break;

            case HomeBase.AddImageFromCameraButtonIndex:
                break;
        }
    }

    /**
     * Virtual
     */
    addImageFromGallery() {

    }

    /**
     * Virtual
     */
    addImageFromCamera() {

    }

    /**
     * Virtual
     */
    menuIcon() {

    }

    /**
     * Virtual
     */
    searchIcon() {

    }

    /**
     * Virtual
     */
    addImageIcon() {

    }

    onImageDataReturned(image) {
        this.props.navigation.navigate('ImageEditor', image)
    }

    //NOTE: current available tags on Cloudinary CDN: gorilla, pets, team, presentation, costarica, jam, boulder
    onTagSearchChange(tag) {
        let _tag = '';
        if(tag) {
            const valuesToSplit = tag.trim();
            if(valuesToSplit.length) {
                _tag = valuesToSplit.split(' ')[0] || '';
            }
        }
        this.setState({ tag: _tag });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchSection}>
                    <TouchableOpacity style={[styleButtons.iconButton, styleButtons.marginRightButton]}>
                        <Icon name={this.menuIcon()} size={40} color={this.state.topBarButtonsIconColor} />
                    </TouchableOpacity>
                    <TextInput style={styles.searchInput}
                        returnKeyType='search'
                        placeholder='Search by tag'
                        autoCapitalize='none'
                        autoFocus={true}
                        onChangeText={this.onTagSearchChange.bind(this)}>
                    </TextInput>
                    <TouchableOpacity style={styleButtons.iconButton} onPress={this.onSearchImagesPress.bind(this)}>
                        <Icon name={this.searchIcon()} size={40} color={this.state.topBarButtonsIconColor} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styleButtons.iconButton} onPress={this.onAddImage.bind(this)}>
                        <Icon name={this.addImageIcon()} size={40} color={this.state.topBarButtonsIconColor} />
                    </TouchableOpacity>
                </View>
                <Feed style={{flex: 1}} />
                <ActionSheet 
                    ref={(o) => this.addImageActionSheet = o}
                    options={HomeBase.AddImageOptions}
                    cancelButtonIndex={HomeBase.AddImageCancelButtonIndex}
                    onPress={this.onAddImageActionSheetPress.bind(this)}
                />
            </View>
        )
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
            searchedImages: state.searchedImages,

        };
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    searchSection: {
        height: 50,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        padding: 5,
        paddingRight: 0,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 1,
        height: 40,
    },
    topBarButtonTextWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});