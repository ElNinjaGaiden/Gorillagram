import React, { Component } from 'react';
import { 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Image, 
    TextInput 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styleButtons } from '../../styles/common/buttons';

export default class ImageEditorBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            caption: ''
        };
    }

    /**
     * Virtual
     */
    cancelIcon() {

    }

    /**
     * Virtual
     */
    uploadIcon() {

    }

    onBackPress() {
        this.props.navigation.goBack('Home');
    }

    onUploadImage() {
        if(this.state.tags && this.state.tags.length) {
            this.props.setIsAppWorking(true);
            this.props.uploadImage(this.props.imageData, this.props.imageExtension, this.state.tags, this.state.caption.trim())
            .then(response => {
                this.props.setIsAppWorking(false);
                this.onBackPress();
                //If the new image contains the current search tag we need to fetch images again
                if(this.state.tags.indexOf(this.props.currentSearchTag) > -1) {
                    this.props.fetchImages(this.props.currentSearchTag);
                }
            })
            .catch(ex => {
                this.props.setIsAppWorking(false);
                console.log(ex);
            });   
        }
    }

    onTagChange(tagsValue) {
        let tags = [];
        if(tagsValue) {
            const valuesToSplit = tagsValue.trim();
            if(valuesToSplit.length) {
                tags = valuesToSplit.split(' ');
            }
        }
        this.setState({tags});
    }

    onCaptionChange(caption) {
        this.setState({caption});
    }

    render() {
        const cancelIcon = this.cancelIcon();
        const uploadIcon = this.uploadIcon();
        const iconColor = '#000000';
        const imageUri = `data:image/jpeg;base64,${this.props.imageData}`;
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <View style={[styles.topBarSection, styles.topBarSectionStart]}>
                        <TouchableOpacity onPress={this.onBackPress.bind(this)} style={styleButtons.iconButton}>
                            <Icon name={cancelIcon} size={40} color={iconColor} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.topBarSection, styles.topBarSectionEnd]}>
                        <TouchableOpacity onPress={this.onUploadImage.bind(this)} style={styleButtons.iconButton}>
                            <Icon name={uploadIcon} size={40} color={iconColor} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.formInputs}>
                        <TextInput style={styles.textInput}
                            placeholder='tags (at lest one required)'
                            autoCapitalize='none'
                            onChangeText={this.onTagChange.bind(this)}
                            underlineColorAndroid='transparent'>
                        </TextInput>
                        <TextInput style={styles.textInput}
                            placeholder='caption (optional)'
                            onChangeText={this.onCaptionChange.bind(this)}
                            onSubmitEditing={this.onUploadImage.bind(this)}
                            underlineColorAndroid='transparent'>
                        </TextInput>
                    </View>
                    <View style={styles.formThumbnail}>
                        <Image source={{uri: imageUri}} style={styles.thumbnail} />
                    </View>
                </View>
            </View>
        )
    }

    static mapToStateProps(state) {
        console.log('State', state);
        return {
            imageData: state.nav.params.imageData.data,
            imageExtension: state.nav.params.imageData.fileName ? state.nav.params.imageData.fileName.split('.')[1].toLowerCase() : 'jpg',
            currentSearchTag: state.currentSearchTag
        };
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    topBar: {
        height: 50,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        padding: 5,
        flexDirection: 'row'
    },
    topBarSection: {
        flex: 0.5
    },
    topBarSectionStart: {
        alignItems: 'flex-start'
    },
    topBarSectionEnd: {
        alignItems: 'flex-end'
    },
    formContainer: {
        flexDirection: 'row'
    },
    formInputs: {
        flex: 1,
        padding: 15,
        paddingTop: 10
    },
    textInput: {
        height: 40
    },
    formThumbnail: {
        width: 115,
        height: 115,
        padding: 15
    },
    thumbnail: {
        height: 85,
        width: 85
    }
});