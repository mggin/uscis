import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native'

import ControlBlocks from './controlBlocks'

import {numOfRandomChoice, selectedChoices} from '../../operator/setQuiz'
export default class Block extends Component{
  constructor(props) {
    super(props)
    var {height, width} = Dimensions.get('window')
    this.state={
      height,
      width,
      index: 0,
      color1: 'white',
      color2: 'white',
      color3: 'white',
      color4: 'white'

    }

  }
  componentDidMount() {
    this.setAnswer(selectedChoices[this.props.index])
  }
  nextBlock() {
    this.props.nextBlock()
    ++this.state.index
    this.setAnswer(selectedChoices[this.state.index])
  }

  previousBlock() {
    this.props.previousBlock()
    --this.state.index
    this.setAnswer(selectedChoices[this.state.index])
  }

  setAnswer(choice) {
    if (choice === 'C1') {
      this.setState({color1: '#3498db', color2: 'white', color3: 'white', color4: 'white'})
      this.props.onSelect(this.state.index, choice)
    } else if (choice === 'C2') {
      this.setState({color1: 'white', color2: '#3498db', color3: 'white', color4: 'white'})
      this.props.onSelect(this.state.index, choice)
    } else if (choice === 'C3') {
      this.setState({color1: 'white', color2: 'white', color3: '#3498db', color4: 'white'})
      this.props.onSelect(this.state.index, choice)
    } else if (choice === 'C4') {
      this.setState({color1: 'white', color2: 'white', color3: 'white', color4: '#3498db'})
      this.props.onSelect(this.state.index, choice)
    } else {
      this.setState({color1: 'white', color2: 'white', color3: 'white', color4: 'white'})
    }
  }

  render() {
    var index = this.props.index + 1
    var quiz = this.props.quiz.Q
    var choices = [this.props.quiz.C1, this.props.quiz.C2, this.props.quiz.C3, this.props.quiz.C4]
    var randomChoices = []
    for (var i = 0; i < choices.length; i++) {
      randomChoices.push(choices[numOfRandomChoice[i]])
    }

    return (
      <View style={styles.container}>
        <View style={styles.blockContainer}>
          <View style={{margin: 5, padding: 5}}>
            <Text style={styles.indexTxt}>QUESTION {index}</Text>
          </View>
          <View style={styles.ques}>
            <Text style={styles.quesTxt}>{quiz}</Text>
          </View>
          <View style={[styles.box, {backgroundColor: this.state.color1}]}>
            <TouchableOpacity onPress={() => this.setAnswer('C1')}>
              <Text style={styles.choiceTxt}>{randomChoices[0]}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.box, {backgroundColor: this.state.color2}]}>
            <TouchableOpacity onPress={() => this.setAnswer('C2')}>
              <Text style={styles.choiceTxt}>{randomChoices[1]}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.box, {backgroundColor: this.state.color3}]}>
            <TouchableOpacity onPress={() => this.setAnswer('C3')}>
              <Text style={styles.choiceTxt}>{randomChoices[2]}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.box, {backgroundColor: this.state.color4}]}>
            <TouchableOpacity onPress={() => this.setAnswer('C4')}>
              <Text style={styles.choiceTxt}>{randomChoices[3]}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ControlBlocks nextBlock={this.nextBlock.bind(this)} previousBlock={this.previousBlock.bind(this)}/>
      </View>
    )
  }
}

const styles=StyleSheet.create({
 container: {
   flex: 1,
   borderRadius: 5,
   backgroundColor: '#ecf0f1'
 },
 ques: {
   marginLeft: 10,
   marginRight: 10,
   marginBottom: 10,
   borderRadius: 5,
   // borderWidth: StyleSheet.hairlineWidth,
   // backgroundColor: '#3498db'
 },
 quesTxt: {
   textAlign: 'left',
   fontSize: 19,
   color: '#2c3e50',
   fontFamily: 'Times New Roman'
 },
 box: {
   padding: 15,
   marginLeft: 10,
   marginRight: 10,
   marginBottom: 5,
   marginTop: 5,
   borderRadius: 5,
   borderWidth: StyleSheet.hairlineWidth,
 },
 choiceTxt: {
   textAlign: 'left',
   fontSize: 17,
   color: '#2c3e50',
   fontFamily: 'Times New Roman'
 },
 indexTxt: {
   textAlign: 'left',
   fontSize: 14,
   opacity: 0.9,
   color: '#2c3e50',
   fontFamily: 'Times New Roman'
 },
 blockContainer: {
   flex: 1,
 }



})
