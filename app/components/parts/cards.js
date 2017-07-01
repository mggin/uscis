import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'

const {width, height} = Dimensions.get('window')
const Card = (props) => {
  return (
    <TouchableOpacity onPress={() => props.flip()}
                      activeOpacity={0.3}
                      style={styles.container}>
      <Text style={styles.englishTxt}>
        {props.english}
      </Text>
      <Text style={styles.zomiTxt}>
        {props.zomi}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  englishTxt: {
    textAlign: 'center',
    color: '#2c3e50',
    fontFamily: 'Gill Sans',
    fontSize: 19,
    marginBottom: 5,

  },
  zomiTxt: {
    textAlign: 'center',
    color: '#34495e',
    opacity: 9,
  }

})

export default Card
