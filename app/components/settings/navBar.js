import React, {Component} from 'react'
import {
  View,
  Dimensions,
  StyleSheet,
} from 'react-native'

const {width, height} = Dimensions.get('window')
const NavBar = (props) => {
  return (
    <View style={styles.container}>
    </View>
  )
}


const styles=StyleSheet.create({
  container: {
    width: width,
    height: 65,
    backgroundColor: 'red'
  }
})

export default NavBar
