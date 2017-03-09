import React, { Component } from 'react';
import mapDispatchToPros from '../../reducers/combined';
import HomeBase from './HomeBase';
import { connect } from 'react-redux';
import { ImagePickerIOS, NativeModules } from 'react-native';
import * as qs from 'qs';

class Home extends HomeBase {

    menuIcon() {
        return 'ios-menu';
    }

    searchIcon() {
        return 'ios-search';
    }

    addImageIcon() {
        return 'ios-add';
    }

    addImageFromGallery() {
        var promise = new Promise((resolve, reject) => {
            ImagePickerIOS.openSelectDialog({}, imageUri => {
                const imageExtension = qs.parse(imageUri).ext.toLowerCase();
                NativeModules.ReadImageData.readImage(imageUri, (imageData) => {
                    const image = {
                        localUri: imageUri,
                        imageData,
                        imageExtension,
                    };
                    resolve(image);
                });
            }, error => {
                reject(error);
            });
        });

        return promise;
    }
}

export default connect(HomeBase.mapStateToProps, mapDispatchToPros)(Home);