import React, {Component} from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native'

const {width, height} = Dimensions.get('window')

let heightOfContainer = 65
let sizeOfquitImg = 30

if (width == 1024) {
  heightOfContainer = 100
  sizeOfquitImg = 50
}
import {checkAnswer} from '../../operator/setQuiz'

/* This appear on the top of test UI, which let you quit from the test */
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
    height: heightOfContainer,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgb(102, 0, 51)',
  },
quitImg: {
    width: sizeOfquitImg,
    height: sizeOfquitImg,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  }
})

export default QuitBar
