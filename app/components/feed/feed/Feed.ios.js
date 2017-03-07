import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedBase from './FeedBase';

class Feed extends FeedBase {

    noImagesIcon() {
        return 'ios-images';
    }
}

export default connect(FeedBase.mapStateToProps)(Feed);