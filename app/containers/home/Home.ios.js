import React, { Component } from 'react';
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
                const extension = qs.parse(imageUri).ext.toLowerCase();
                NativeModules.ReadImageData.readImage(imageUri, (imageData) => {
                    resolve(imageData, extension);
                });
            }, error => {
                reject(error);
            });
        });

        return promise;
    }
}

export default connect(HomeBase.mapStateToProps)(Home);