import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapDispatchToPros from '../../reducers/combined';
import ImageEditorBase from './ImageEditorBase';

class ImageEditor extends ImageEditorBase {

    cancelIcon() {
        return 'md-close';
    }

    uploadIcon() {
        return 'md-checkmark';
    }
}

export default connect(ImageEditorBase.mapToStateProps, mapDispatchToPros)(ImageEditor);