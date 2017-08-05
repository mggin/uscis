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
  ScrollView,
} from 'react-native';
import Ad from './ads/ad'
import LinearGradient from 'react-native-linear-gradient';
import {Actions, Scenes} from 'react-native-router-flux'
import {listOfQuiz, clearListOfQuiz} from '../operator/setQuiz'
import Orientation from 'react-native-orientation';
// import studyImage from './assets/uscis-study.png'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    const {width, height} = Dimensions.get('window')
    this.state = {
      paddingRight: 35,
      paddingBottom: 35,
      imageSize: 100,
      titleWidth: 300,
      titleHeight: 130,
      blockFlex: 0.5,
      flexOfImg: 0.7,
      layoutWidth: width,
      layoutHeight: height,
      valueOfQuiz: '10',
      valueOfLocation: 36,
    }

  }
  componentWillMount() {
    try {
      AsyncStorage.setItem('@QU1Z', this.state.valueOfQuiz);
      AsyncStorage.setItem('@LOCATION', this.state.valueOfLocation.toString());
    } catch (error) {
   // Error saving data
    }
     this.layoutChanged()
  }
  componentDidMount() {
    console.log('did')
  }
  handle1024(width) {
    if (width == this.state.layoutHeight) {

    } else {}
    this.state.paddingRight = 70 // +50
    this.state.paddingBottom = 70 // +50
    this.state.imageSize = 200 // +100
    this.state.titleWidth = 600 // +300
    this.state.titleHeight =  200 // +70

  }
  handle768() {
    this.state.paddingRight = 50 // +30
    this.state.paddingBottom = 50 // +30
    this.state.imageSize = 150 // +50
    this.state.titleWidth = 450 // +150
    this.state.titleHeight =  165 // +35
  }
  layoutChanged() {
    const {width, height} = Dimensions.get('window')
    if (width == 1024 || height == 1024) {
      this.handle1024(width)
    } else if (width == 768 || height == 768) {
      this.handle768(width)
    } else {}
    if (width > height) {
      this.state.blockFlex = 0
      this.state.flexOfImg = 0.5
    } else {
      this.state.blockFlex = 0.5
      this.state.flexOfImg = 0.7
    }
    this.setState({
      layoutWidth: width,
      layoutHeight: height,
    })
  }

  render() {
    //console.log(listOfQuiz)
    console.log('render')
    return (
      <View style={{flex: 1}}
            onLayout={() => this.layoutChanged()}>
        <StatusBar barStyle='light-content'/>
        <ScrollView style={{width: this.state.layoutWidth, height: this.state.layoutHeight }}>
        <LinearGradient style={{width: this.state.layoutWidth, height: this.state.layoutHeight}} colors={['#6f86d6', '#48c6ef']}>


        <View style={{flex: this.state.flexOfImg, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Image source={require('../assets/title1.png')}
                 resizeMode='cover'
                 style={[styles.title, {width: this.state.titleWidth,
                                        height: this.state.titleHeight,
                                        }]}/>
        </View>
        <View style={{flex: 1}}>
        <View style={styles.row}>

          <View style={[styles.studyGuide, {paddingRight: this.state.paddingRight,
                                            paddingBottom: this.state.paddingBottom}]}>
            <TouchableOpacity onPress={() => Actions.study()}
                              activeOpacity={0.7}>
              <Image source={require('../assets/uscis-study.png')}
                     resizeMode="cover"
                     style={{width: this.state.imageSize, height: this.state.imageSize}}/>
            </TouchableOpacity>
          </View>
          <View style={[styles.test, {paddingBottom: this.state.paddingBottom}]}>
            <TouchableOpacity onPress={() => Actions.test()}
                              activeOpacity={0.7}>
              <Image source={require('../assets/uscis-test.png')}
                     resizeMode="cover"
                     style={{width: this.state.imageSize, height: this.state.imageSize}}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.setting, {paddingRight: this.state.paddingRight}]}>
            <TouchableOpacity onPress={() => Actions.setting()}
                              activeOpacity={0.7}>
              <Image source={require('../assets/uscis-setting.png')}
                     resizeMode="cover"
                     style={{width: this.state.imageSize, height: this.state.imageSize}}/>
            </TouchableOpacity>
          </View>
          <View style={styles.aboutUs}>
            <TouchableOpacity onPress={() => Actions.about()}
                              activeOpacity={0.7}>
              <Image source={require('../assets/uscis-aboutUs.png')}
                     resizeMode="cover"
                     style={{width: this.state.imageSize, height: this.state.imageSize}}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: this.state.blockFlex}}>
      </View>
      </LinearGradient>
    </ScrollView>
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
    //backgroundColor: 'red',
  },
  studyGuide: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    //paddingRight: paddingRight,
    //paddingBottom: paddingBottom,
  },
  test: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    // paddingLeft: 20,
    //paddingBottom: paddingBottom,
  },
  setting: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    //paddingRight: paddingRight,
    //paddingTop: 10,
  },
  aboutUs: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // paddingLeft: 20,
    // paddingTop: 10,
  },
  /*
  menuStyle: {
    width: imageSize,
    height: imageSize,
  },
  */
  title: {
    //flex: 1,
    //width: titleWidth,
    //height: titleHeight,
    //marginTop: 70,
  }
});
