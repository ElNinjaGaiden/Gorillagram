import React from 'react';
import { connect } from 'react-redux';
import NavigationContainerBase from './NavigationContainerBase';

class NavigationContainer extends NavigationContainerBase {

    marginTop () {
        return 20;
    }
}

//TODO: check is we can return the class after the connet and not the instance
const navigationContainer = connect(NavigationContainerBase.mapToStateProps)(NavigationContainer);
export default navigationContainer;