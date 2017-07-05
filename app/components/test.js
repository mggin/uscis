

import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native'
import Block from './parts/blocks'
import ControlBlocks from './parts/controlBlocks'
import {listOfEnglishTest} from '../json/jsonObjects'
import {randomQuiz, listOfRandomQuiz} from '../operator/randomQuiz'

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state={
      quiz: listOfEnglishTest[listOfRandomQuiz[0]],
      index: 0,
    }

  }
  componentWillMount() {
    randomQuiz()
  }

  previousBlock() {
    this.state.index --
    this.setState({quiz: listOfEnglishTest[listOfRandomQuiz[this.state.index]]})
  }

  nextBlock() {
    this.state.index++
    this.setState({quiz: listOfEnglishTest[listOfRandomQuiz[this.state.index]]})

  }

  render() {
    randomQuiz()
    // var QuizBlock = []
    /*
    for (i = 0; i < listOfRandomQuiz.length; i++){
      var block = <Block quiz={listOfEnglishTest[listOfRandomQuiz[i]]} />
      QuizBlock.push(block)
    }
    */
    return (
      <View style={{flex: 1}}>
        <Block quiz={this.state.quiz}/>
        <ControlBlocks nextBlock={this.nextBlock.bind(this)} previousBlock={this.previousBlock.bind(this)}/>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'red',
  }
})
