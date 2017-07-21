import React, {Component} from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native'


import {checkAnswer} from '../../operator/setQuiz'

/* This appear on the top of test UI, which let you quit from the test */
const {width, height} = Dimensions.get('window')
const QuitBar = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.show()}
                        activeOpacity={0.6}>
        <Image source={require('../../assets/uscis-exit.png')}
             resizeMode="cover"
             style={styles.quitImg}
             />
      </TouchableOpacity>
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
