/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import {Actions, Scenes} from 'react-native-router-flux'
// import studyImage from './assets/uscis-study.png'

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.studyGuide}>
            <TouchableOpacity onPress={() => Actions.study()}
                              activeOpacity={0.7}>
              <Image source={require('../assets/uscis-study.png')}
                     resizeMode="cover"
                     style={styles.menuStyle}/>
            </TouchableOpacity>
          </View>
          <View style={styles.test}>
            <TouchableOpacity onPress={() => Actions.test()}
                              activeOpacity={0.7}>
              <Image source={require('../assets/uscis-test.png')}
                     resizeMode="cover"
                     style={styles.menuStyle}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.setting}>
            <TouchableOpacity onPress={() => Actions.setting()}
                              activeOpacity={0.7}>
              <Image source={require('../assets/uscis-setting.png')}
                     resizeMode="cover"
                     style={styles.menuStyle}/>
            </TouchableOpacity>
          </View>
          <View style={styles.aboutUs}>
            <TouchableOpacity onPress={() => Actions.menu()}
                              activeOpacity={0.7}>
              <Image source={require('../assets/uscis-aboutUs.png')}
                     resizeMode="cover"
                     style={styles.menuStyle}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  studyGuide: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingBottom: 25,
  },
  test: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 25,
  },
  setting: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 10,
  },
  aboutUs: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingTop: 10,
  },
  menuStyle: {
    width: 100,
    height: 100,
  }
});
