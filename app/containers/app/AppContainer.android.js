import React, { Component } from 'react';
import AppContainerBase from './AppContainerBase';
import { connect } from 'react-redux';

class AppContainer extends AppContainerBase {

}

export default connect(AppContainerBase.mapStateToProps)(AppContainer); //, AppContainerBase.mapDispatchToPros