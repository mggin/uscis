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

const ControlCard = (props) => {
  const {width, height} = Dimensions.get('window')
  let direction = 'row'
  let iconSize = 65

  if (width == 1024 || height == 1024) {
    iconSize = 100
  } else if (width == 414 || height == 414) {
    iconSize = 70
  } else if (width == 768 || height == 768){
    iconSize = 90
  } else { }
  if (width > height) {
    console.log('landsacpe')
    direction = 'column'
  } else {
    direction = 'row'
  }
  return (
    <View style={[styles.row, {flexDirection: direction}]}>
      <TouchableOpacity onPress={() => props.previousCard()}
                        style={styles.back}>
        <View style={{width: iconSize + 5, height: iconSize + 5}}>
              <Icon name="md-arrow-dropleft-circle" size={iconSize} color="rgb(0, 102, 102)" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.nextCard()}
                        style={styles.next}>
        <View style={{width: iconSize + 5, height: iconSize + 5}}>
          <Icon name="md-arrow-dropright-circle" size={iconSize} color="rgb(0, 102, 102)" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})

export default ControlCard
