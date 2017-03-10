import React, { Component } from 'react';
import mapDispatchToPros from '../../reducers/combined';
import HomeBase from './HomeBase';
import { connect } from 'react-redux';

class Home extends HomeBase {

    menuIcon() {
        return 'md-menu';
    }

    searchIcon() {
        return 'md-search';
    }

    addImageIcon() {
        return 'md-add';
    }

}

export default connect(HomeBase.mapStateToProps, mapDispatchToPros)(Home);