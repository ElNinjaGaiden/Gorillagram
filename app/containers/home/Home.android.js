import React, { Component } from 'react';
import HomeBase from './HomeBase';
import { connect } from 'react-redux';

class Home extends HomeBase {

}

export default connect(HomeBase.mapStateToProps)(Home);