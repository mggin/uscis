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
                      activeOpacity={0.7}
                      style={styles.container}>
          <View style={styles.topBar}>
            <Text style={styles.quesSty}>{props.question}</Text>
          </View>
          <View style={styles.bottomBar}>
            <Text style={styles.ansSty}>{props.answer}</Text>
          </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
  },
  topBar: {
    flexGrow: 1,
    backgroundColor: 'rgb(0, 102, 102)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quesSty: {
    textAlign: 'center',
    color: '#ecf0f1',
    fontFamily: 'Times New Roman',
    fontSize: 19,
    padding: 7,
    // marginBottom: 5,

  },
  ansSty: {
    textAlign: 'center',
    color: '#34495e',
    fontFamily: 'Times New Roman',
    opacity: 9,
    fontSize: 18,
  }

})

export default Card
