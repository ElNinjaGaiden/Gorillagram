import React, { Component } from 'react';
import HomeBase from './HomeBase';
import { connect } from 'react-redux';

class Home extends HomeBase {

    marginTop () {
        return 20;
    }
}

export default connect(HomeBase.mapStateToProps)(Home);