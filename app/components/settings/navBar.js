import React, {Component} from 'react'
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

import {Actions, Scenes, ActionConst} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window')

let heightOfContainer = 65
let iconSize = 33
let fontSizeOftxt = 16

if (width == 1024) {
  heightOfContainer = 100
  iconSize = 50
  fontSizeOftxt = 26
} else if (width == 768) {
  heightOfContainer = 85
  iconSize = 44
  fontSizeOftxt = 23
} else {}

const NavBar = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}
                        onPress={() => Actions.menu({type: ActionConst.BACK})}>
        <Icon name="ios-arrow-back" size={iconSize} color="#ecf0f1" />
        <Text style={styles.txt}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    height: heightOfContainer,
    flexDirection: 'row',
    backgroundColor: 'rgb(0, 102, 102)',
    alignItems: 'flex-end',
  },
  icon: {
    marginLeft: 10,
    flexDirection: 'row',
    // backgroundColor: 'red'
  },
  txt: {
    alignSelf: 'center',
    color: 'white',
    fontSize: fontSizeOftxt,
    paddingBottom: 2,
    paddingLeft: 2,
    // backgroundColor: 'red'
  }
})

export default NavBar
