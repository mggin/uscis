import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window')
let iconSize = 65

if (width == 1024) {
  iconSize = 100
} else if (width == 414) {
  iconSize = 70
} else {}

const ControlCard = (props) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => props.previousCard()}
                        style={styles.back}>
        <View style={styles.previousIcon}>
              <Icon name="md-arrow-dropleft-circle" size={iconSize} color="rgb(0, 102, 102)" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.nextCard()}
                        style={styles.next}>
        <View style={styles.nextIcon}>
          <Icon name="md-arrow-dropright-circle" size={iconSize} color="rgb(0, 102, 102)" />
        </View>
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
  previousIcon: {
    width: iconSize+5,
    height: iconSize+5,
    // backgroundColor: 'white'
  },
  nextIcon: {
    width: iconSize+5,
    height: iconSize+5,
  }
})

export default ControlCard
