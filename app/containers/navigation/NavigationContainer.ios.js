import React from 'react';
import { connect } from 'react-redux';
import NavigationContainerBase from './NavigationContainerBase';

class NavigationContainer extends NavigationContainerBase {

    marginTop () {
        return 20;
    }
}

export default connect(NavigationContainerBase.mapToStateProps)(NavigationContainer);