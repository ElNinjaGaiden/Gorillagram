import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import ActionSheet from 'react-native-actionsheet';
import mapDispatchToPros from '../reducers/combined';
import IconButton from '../components/IconButton';
import Feed from '../components/feed';
import Settings from '../components/Settings';
import { searchIcon, addIcon } from '../utils/icons';
import { viewStyles, toolbarStyles, buttonsStyles } from '../styles';
import { blackColor } from '../styles/colors';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tag: ''
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

    onAddImage() {
        this.addImageActionSheet.show();
    }

    onAddImageActionSheetPress(index) {
        if(index !== Home.AddImageCancelButtonIndex) {
            const methodName = (index === Home.AddImageFromGalleryButtonIndex) ? 'launchImageLibrary' : 'launchCamera';
            ImagePicker[methodName]({}, response => {
                if(response.error) {
                    console.log(response.error);
                    return;
                }
                !response.didCancel && response.data && this.onImageDataResolved(response);
            });
        }
    }

    onImageDataResolved(imageData) {
        this.props.navigation.navigate('ImageEditor', { imageData });
    }

    render() {
        return (
            <View style={viewStyles.viewContainer}>
                <View style={toolbarStyles.toolbar}>
                    <Settings />
                    <TextInput style={styles.searchInput}
                        returnKeyType='search'
                        placeholder={this.props.language.home.searchByTag}
                        autoCapitalize='none'
                        onChangeText={this.onTagSearchChange.bind(this)}
                        onSubmitEditing={this.onSearchImagesPress.bind(this)}
                        underlineColorAndroid='transparent'>
                    </TextInput>
                    <IconButton icon={searchIcon} color={blackColor} onPress={this.onSearchImagesPress.bind(this)}/>
                    <IconButton icon={addIcon} color={blackColor} onPress={this.onAddImage.bind(this)}/>
                </View>
                <Feed style={{flex: 1}} navigation={this.props.navigation} />
                <ActionSheet 
                    ref={(o) => this.addImageActionSheet = o}
                    options={this.props.language.home.addImageOptions}
                    cancelButtonIndex={Home.AddImageCancelButtonIndex}
                    onPress={this.onAddImageActionSheetPress.bind(this)}
                />
            </View>
        )
    }

    static AddImageFromGalleryButtonIndex = 0;
    static AddImageFromCameraButtonIndex = 1;
    static AddImageCancelButtonIndex = 2;

    static mapStateToProps(state) {
        return {
            searchedImages: state.searchedImages,
            language: state.language
        };
    } 
}

const styles = StyleSheet.create({
    searchInput: {
        flex: 1,
        height: 40,
        marginLeft: 5
    }
});

export default connect(Home.mapStateToProps, mapDispatchToPros)(Home);