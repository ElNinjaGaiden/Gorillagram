import React, { Component } from 'react';
import mapDispatchToPros from '../../reducers/combined';
import HomeBase from './HomeBase';
import { connect } from 'react-redux';

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
}

export default connect(HomeBase.mapStateToProps, mapDispatchToPros)(Home);