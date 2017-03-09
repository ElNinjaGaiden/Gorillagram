import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapDispatchToPros from '../../reducers/combined';
import ImageEditorBase from './ImageEditorBase';

class ImageEditor extends ImageEditorBase {

    cancelIcon() {
        return 'ios-close';
    }

    uploadIcon() {
        return 'ios-checkmark';
    }
}

export default connect(ImageEditorBase.mapToStateProps, mapDispatchToPros)(ImageEditor);