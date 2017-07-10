

import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native'
import QuitBar from './parts/quitBar'
import Block from './parts/blocks'
import Ads1 from './ads/ads1'
import ControlBlocks from './parts/controlBlocks'
import {listOfEnglishTest} from '../json/jsonObjects'
import {setQuiz, listOfQuiz, numOfRandomQuiz, selectedChoices} from '../operator/setQuiz'

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state={
      quiz: listOfEnglishTest[numOfRandomQuiz[0]],
      index: 0,
      change: '',
    }

  }
  componentWillMount() {
    setQuiz()
  }

  previousBlock() {
    this.state.index --
    this.setState({quiz: listOfQuiz[this.state.index], change: 'ON'})
  }

  nextBlock() {
    this.state.index++
    this.setState({quiz: listOfQuiz[this.state.index], change: 'OFF'})
  }
  onSelect(index, ans) {
    selectedChoices[index] = ans
    console.log(selectedChoices)
  }

  render() {
    // console.log(listOfQuiz[8]['C1'])
    // console.log(JSON.stringify(listOfQuiz))
    /*
    for (i = 0; i < listOfRandomQuiz.length; i++){
      var block = <Block quiz={listOfEnglishTest[listOfRandomQuiz[i]]} />
      QuizBlock.push(block)
    }
    */
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="blue"
                   barStyle="light-content" />
        <QuitBar />
        <Block quiz={this.state.quiz} selected={selectedChoices[this.state.index]}
               index={this.state.index} onSelect={this.onSelect.bind(this)}
               changes={this.state.change} nextBlock={this.nextBlock.bind(this)} previousBlock={this.previousBlock.bind(this)}/>
      
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
