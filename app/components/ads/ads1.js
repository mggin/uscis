import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native'

const {width, height} = Dimensions.get('window')
const Ads1 = () => {
  return (
    <View style={styles.ad}>

    </View>
  )
}

const styles=StyleSheet.create({
  ad: {
    width: width,
    height: 100,
    backgroundColor: 'red',
  }
})

export default Ads1
