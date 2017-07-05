import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'

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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
