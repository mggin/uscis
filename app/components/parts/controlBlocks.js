import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions
} from 'react-native'
/* ControlBlocks manage the block which holds question and answers.
It control the next and previous question. */

import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window')
let iconSize = 65
let fontSizeOfsubmitTxt = 17

if (width == 1024) {
  iconSize = 100
  fontSizeOfsubmitTxt = 27
} else if (width == 414) {
  iconSize = 70
} else if (width == 768){
  iconSize = 90
  fontSizeOfsubmitTxt = 22
} else {}

const ControlBlocks = (props) => {
  return (
    <View style={styles.row}>{ props.backBtn ? (
      <TouchableOpacity onPress={() => props.previousBlock()}
                        activeOpacity={0.7}>
          <View style={styles.nextIcon}>
                <Icon name="md-arrow-dropleft-circle" size={iconSize} color="rgb(102, 0, 51)" />
          </View>
      </TouchableOpacity> ) : null}
      { props.submitBtn ? (
        <TouchableOpacity onPress={() => props.submit()}
                          activeOpacity={0.7}>
            <View style={styles.submit}>
              <Text style={styles.submitTxt}>SUBMIT</Text>
            </View>
        </TouchableOpacity> ) : null}
        { props.submitBtn ? (
          <View style={styles.block}></View> ) : null}
      { props.nextBtn ? (
        <TouchableOpacity onPress={() => props.nextBlock()}
                          activeOpacity={0.7}>
            <View style={styles.nextIcon}>
                  <Icon name="md-arrow-dropright-circle" size={iconSize} color="rgb(102, 0, 51)" />
            </View>
        </TouchableOpacity> ) : null}
    </View>
  )
}

const styles=StyleSheet.create({
  row: {
    width: width,
    height: 100,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1'
  },
  previousIcon: {
    width: iconSize+5,
    height: iconSize+5,
    // backgroundColor: 'red'
  },
  nextIcon: {
    width: iconSize+5,
    height: iconSize+5,
    // backgroundColor: 'yellow',
  },
  submit: {
    width: iconSize+50,
    height: iconSize,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ecf0f1',
    backgroundColor: "rgb(102, 0, 51)",
    padding: 8,
  },
  submitTxt: {
    textAlign: 'center',
    fontSize: fontSizeOfsubmitTxt,
    fontFamily: 'Gill Sans',
    color: 'white',
  }
})

export default ControlBlocks
