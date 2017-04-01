import React from 'react';
import { Provider } from 'react-redux';
import Navigator from 'native-navigation';

// This ensures that we can use `() => require('./foo')` as a `getScreen` or `getStore` option,
// even if `foo.js` is an ES6 module.  It's not really important to this example.
function unwrapDefaultExport(module) {
  if (module != null && module.__esModule === true) {
    return module.default;
  }
  return module;
}

// provided a `getScreen` function and a `getStore` function, we want to return a new function
// that returns a new react component that renders the old one, but with the redux store provided
// through context.
function wrapScreenGetter(route, getScreen, { getStore }) {

  class ConnectedScreen extends React.Component {
    render() {
      const Screen = unwrapDefaultExport(getScreen());
      const store = unwrapDefaultExport(getStore());
      return (
        <Provider store={store}>
          <Screen {...this.props} />
        </Provider>
      );
    }
  }

  // customize the display name for better React dev tools interop.
  ConnectedScreen.displayName = `ConnectedScreen(${route})`;

  return () => {
    // invoking this here ensures that our original `getScreen` function gets called, which we want
    // to happen to make sure that `Navigator.preload` still does meaningful work.
    getScreen();
    return ConnectedScreen;
  };
}

export default function registerConnectedScreen(route, getScreen, options = {}) {
  const getWrapper = wrapScreenGetter(route, getScreen, options);
  return Navigator.registerScreen(route, getWrapper, options);
}