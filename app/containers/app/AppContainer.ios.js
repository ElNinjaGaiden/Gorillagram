import React, { Component } from 'react';
import AppContainerBase from './AppContainerBase';
import { connect } from 'react-redux';

class AppContainer extends AppContainerBase {

    marginTop () {
        return 20;
    }
}

export default connect(AppContainerBase.mapStateToProps)(AppContainer); //, AppContainerBase.mapDispatchToPros