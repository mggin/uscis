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
const ControlBlocks = (props) => {
  return (
    <View style={styles.row}>{ props.backBtn ? (
      <TouchableOpacity onPress={() => props.previousBlock()}
                        activeOpacity={0.7}>
          <View style={styles.nextIcon}>
                <Icon name="md-arrow-dropleft-circle" size={55} color="rgb(102, 0, 51)" />
          </View>
      </TouchableOpacity> ) : null}
      { props.submitBtn ? (
        <TouchableOpacity onPress={() => props.submit()}
                          activeOpacity={0.7}
                          style={styles.submit}>
            <Text>SUBMIT</Text>
        </TouchableOpacity> ) : null}
      { props.nextBtn ? (
        <TouchableOpacity onPress={() => props.nextBlock()}
                          activeOpacity={0.7}>
            <View style={styles.nextIcon}>
                  <Icon name="md-arrow-dropright-circle" size={55} color="rgb(102, 0, 51)" />
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
    width: 60,
    height: 60,
    // backgroundColor: 'white'
  },
  nextIcon: {
    width: 60,
    height: 60,
  },
  submit: {
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
  },
  submittxt: {
    textAlign: 'center'
  }
})

export default ControlBlocks
