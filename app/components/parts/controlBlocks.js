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
const {width, height} = Dimensions.get('window')
const ControlBlocks = (props) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => props.previousBlock()}
                        style={styles.back}>
        <Image source={require('../../assets/uscis-back.png')}
               resizeMode="cover"
               style={styles.backImg}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.nextBlock()}
                        style={styles.next}>
        <Image source={require('../../assets/uscis-next.png')}
               resizeMode="cover"
               style={styles.nextImg}/>
      </TouchableOpacity>
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
  backImg: {
    width: 40,
    height: 40,
    // backgroundColor: 'white'
  },
  nextImg: {
    width: 40,
    height: 40,
  }
})

export default ControlBlocks
