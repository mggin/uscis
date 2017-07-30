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
  Text,
  Dimensions,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions, Scenes} from 'react-native-router-flux'
import {listOfQuiz, clearListOfQuiz} from '../operator/setQuiz'
// import studyImage from './assets/uscis-study.png'


const {width, height} = Dimensions.get('window')
let paddingRight = 20
let paddingBottom = 20
let imageSize = 100
let titleWidth = 300
let titleHeight = 130

if (width == 1024) {
  paddingRight = 70 // + 50
  paddingBottom = 70 // + 50
  imageSize = 200 // + 100
  titleWidth = 600 // + 300
  titleHeight =  200 // + 70
} else if (width == 768) {

} else {}
export default class Menu extends Component {

  componentWillMount() {
     // clearListOfQuiz()
  }

  render() {
    //console.log(listOfQuiz)
    //console.log('print listOfQuiz on menu')
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content'/>
        <LinearGradient style={{flex: 1}} colors={['#6f86d6', '#48c6ef']}>


        <View style={{flex: 0.25}}>
          <Image source={require('../assets/title1.png')}
                 resizeMode='cover'
                 style={styles.title}/>
        </View>
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
            <TouchableOpacity onPress={() => Actions.about()}
                              activeOpacity={0.7}>
              <Image source={require('../assets/uscis-aboutUs.png')}
                     resizeMode="cover"
                     style={styles.menuStyle}/>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    width: undefined,
    height: undefined,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  studyGuide: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
  },
  test: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    // paddingLeft: 20,
    paddingBottom: paddingBottom,
  },
  setting: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingRight: paddingRight,
    // paddingTop: 10,
  },
  aboutUs: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // paddingLeft: 20,
    // paddingTop: 10,
  },
  menuStyle: {
    width: imageSize,
    height: imageSize,
  },
  title: {
    //flex: 1,
    width: titleWidth,
    height: titleHeight,
    marginTop: 70,
    alignSelf: 'center',
  }
});
