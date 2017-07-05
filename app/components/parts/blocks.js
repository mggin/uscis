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
      width,
      color1: 'white',
      color2: 'white',
      color3: 'white',
      color4: 'white'

    }

  }

  setColor(choice) {
    if (choice === 'C1') {
      this.setState({color1: 'blue', color2: 'white', color3: 'white', color4: 'white'})
    } else if (choice === 'C2') {
      this.setState({color1: 'white', color2: 'blue', color3: 'white', color4: 'white'})
    } else if (choice === 'C3') {
      this.setState({color1: 'white', color2: 'white', color3: 'blue', color4: 'white'})
    } else if (choice === 'C4') {
      this.setState({color1: 'white', color2: 'white', color3: 'white', color4: 'blue'})
    } else {}
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
        <View style={[styles.box, {backgroundColor: this.state.color1}]}>
          <TouchableOpacity onPress={() => this.setColor('C1')}>
            <Text>{c1}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.box, {backgroundColor: this.state.color2}]}>
          <TouchableOpacity onPress={() => this.setColor('C2')}>
            <Text>{c2}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.box, {backgroundColor: this.state.color3}]}>
          <TouchableOpacity onPress={() => this.setColor('C3')}>
            <Text>{c3}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.box, {backgroundColor: this.state.color4}]}>
          <TouchableOpacity onPress={() => this.setColor('C4')}>
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
