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
import MapView from 'react-native-maps';
import CheckBox from '../../components/fields/CheckBox';

const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };

export default class ImageEditorBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            caption: '',
            saveLocation: true,
            mapCenter: null
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                mapCenter: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
            });
            //this.fitMap();
        }, (error) => {
            error && console.log(error);
        });
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
        this.props.navigation.goBack();
    }

    onUploadImage() {
        if(this.state.tags && this.state.tags.length) {
            const image = {
                data: this.props.imageData,
                imageExtension: this.props.imageExtension,
                tags: this.state.tags,
                caption: this.state.caption.trim(),
                location: this.state.saveLocation && this.state.mapCenter ? this.state.mapCenter : null
            };
            this.props.setIsAppWorking(true);
            this.props.uploadImage(image)
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

    onSaveLocationChanged(checked) {
        console.log('Cccc', checked);
        this.setState({saveLocation: checked});
    }

    fitMap() {
        this.map.fitToCoordinates([this.state.mapCenter], {
            edgePadding: DEFAULT_PADDING,
            animated: true,
        });
    }

    onMapMarkerDragEnd(e) {
        this.setState({mapCenter: e.nativeEvent.coordinate});
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
                        <CheckBox checked={this.state.saveLocation} label='Include location' onCheckedChange={this.onSaveLocationChanged.bind(this)} />
                    </View>
                    <View style={styles.formThumbnail}>
                        <Image source={{uri: imageUri}} style={styles.thumbnail} />
                    </View>
                </View>
                {
                    this.state.mapCenter &&
                    <View style={styles.mapContainer}>
                        <MapView
                            ref={ref => { this.map = ref; }}
                            style={styles.map}
                            initialRegion={{
                            latitude: this.state.mapCenter.latitude,
                            longitude: this.state.mapCenter.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                            }}>
                            <MapView.Marker coordinate={this.state.mapCenter} draggable
                                            onDragEnd={this.onMapMarkerDragEnd.bind(this)}/>
                        </MapView>
                    </View>
                }
            </View>
        )
    }

    static mapToStateProps(state) {
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
    },
    mapContainer: {
        flex: 1,
        marginTop: 20
    },
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
});