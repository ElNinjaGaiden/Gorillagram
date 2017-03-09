import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import mapDispatchToPros from '../../reducers/combined';

class ImageEditor extends Component {

    // constructor(props) {
    //     super(props);
    //     setTimeout(() => {
    //         this.onUploadImage();
    //     }, 1000);
    // }

    onBackPress() {
        this.props.navigation.goBack('Home');
    }

    onUploadImage() {
        this.props.setIsAppWorking(true);
        this.props.uploadImage(this.props.imageData, this.props.imageExtension, ['test'])
        .then(response => {
            console.log(response);
            this.props.setIsAppWorking(false);
            this.onBackPress();
        })
        .catch(ex => {
            this.props.setIsAppWorking(false);
            console.log(ex);
        });
    }

    render() {
        return (
            <View style={styles.view}>
                <TouchableHighlight onPress={this.onBackPress.bind(this)}>
                    <Text>Back</Text>
                </TouchableHighlight>
            </View>
        )
    }

    static mapToStateProps(state) {
        return {
            imageData: state.nav.params.imageData,
            imageExtension: state.nav.params.imageExtension
        };
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
});

export default connect(ImageEditor.mapToStateProps, mapDispatchToPros)(ImageEditor);