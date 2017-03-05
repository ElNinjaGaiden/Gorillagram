import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Home from './Home';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.props.resolvePlatform();
    }

    render() {
        return (
            <Home {...this.props} />
        )
    }
}

function mapDispatchToPros(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => { return {} }, mapDispatchToPros)(AppContainer);