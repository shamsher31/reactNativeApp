import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import TabsMenu from './Pages/TabsMenu';

export default class reactNativeApp extends Component {
  render() {
    return (<TabsMenu/>);
  }
}

AppRegistry.registerComponent('reactNativeApp', () => reactNativeApp);
