/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {Router,
        Scene,
        Actions,
} from 'react-native-router-flux'
import Menu from './components/menu'
import Study from './components/study'
import Test from './components/test'
import Setting from './components/setting'
import About from './components/about'

export default class Route extends Component {
  render() {
    return (
      <Router key='root'
              hideNavBar={true}>
          <Scene key='menu'
                 initial={true}
                 component={Menu}/>
          <Scene key='study'
                 //initial={true}
                 component={Study}/>
          <Scene key='test'
                 //initial={true}
                 component={Test}/>
          <Scene key='setting'
                 // initial={true}
                 component={Setting}/>
          <Scene key='about'
                 // initial={true}
                 component={About}/>
      </Router>
    )
  }
}
