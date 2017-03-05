import React, { Component } from 'react';
import HomeBase from './HomeBase';

export default class Home extends HomeBase {

}

export default connect(HomeBase.mapStateToProps)(Home);