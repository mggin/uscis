import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const ControlCard = (props) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => props.previousCard()}
                        style={styles.back}>
        <View style={styles.previousIcon}>
              <Icon name="md-arrow-dropleft-circle" size={55} color="rgb(0, 102, 102)" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.nextCard()}
                        style={styles.next}>
        <View style={styles.nextIcon}>
          <Icon name="md-arrow-dropright-circle" size={55} color="rgb(0, 102, 102)" />
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
    width: 60,
    height: 60,
    // backgroundColor: 'white'
  },
  nextIcon: {
    width: 60,
    height: 60,
  }
})

export default ControlCard
