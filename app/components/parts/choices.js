import React, {Component}  from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

export const Choices = (props) => {
  return (
    <TouchableOpacity onPress={() => console.log('')}
                      activeOpacity={8}
                      style={[styles.box, {width: this.state.width, height: this.state.height/13}]}>
      <Text>choice4{this.props.choice4}</Text>
    </TouchableOpacity>
  )
}
