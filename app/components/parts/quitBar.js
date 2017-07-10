import React, {Component} from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native'

const {width, height} = Dimensions.get('window')
console.log(width/4)
console.log(height/10)

const QuitBar = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/uscis-exit.png')}
             resizeMode="cover"
             style={styles.quitImg}/>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    width: width,
    height: 65,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgb(102, 0, 51)',
  },
quitImg: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  }
})

export default QuitBar
