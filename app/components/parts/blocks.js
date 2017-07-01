import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native'

import {randomChoice, listOfRandomChoice} from '../../operator/randomChoice'
export default class Block extends Component{
  constructor(props) {
    super(props)
    var {height, width} = Dimensions.get('window')
    this.state={
      height,
      width
    }

  }

  render() {
    randomChoice()
    console.log(listOfRandomChoice)
    var listOfChoice = [this.props.quiz.C1, this.props.quiz.C2, this.props.quiz.C3, this.props.quiz.C4]
    var quiz = this.props.quiz.Q
    var c1 = listOfChoice[listOfRandomChoice[0]]
    var c2 = listOfChoice[listOfRandomChoice[1]]
    var c3 = listOfChoice[listOfRandomChoice[2]]
    var c4 = listOfChoice[listOfRandomChoice[3]]

    return (
      <View style={styles.container}>
        <View style={styles.ques}>
          <Text style={styles.quesTxt}>{quiz}</Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => console.log('')}>
            <Text>{c1}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => console.log('')}>
            <Text>{c2}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => console.log('')}>
            <Text>{c3}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => console.log('')}>
            <Text>{c4}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
 container: {
   flexGrow: 1,
   borderRadius: 5,
   margin: 1,
   backgroundColor: '#ecf0f1'
 },
 ques: {
   padding: 10,
 },
 quesTxt: {
   textAlign: 'left',
   fontSize: 19,
   fontFamily: 'Gill Sans'
 },
 box: {
   padding: 15,
   marginLeft: 10,
   marginRight: 10,
   marginBottom: 5,
   marginTop: 5,
   borderRadius: 5,
   borderColor: '#3498db',
   borderWidth: StyleSheet.hairlineWidth,
 }

})
