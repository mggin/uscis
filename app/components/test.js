

import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  AsyncStorage
} from 'react-native'
import QuitBar from './parts/quitBar'
import Block from './parts/blocks'
import Ad from './ads/ad'
import ControlBlocks from './parts/controlBlocks'
import {listOfEnglishTest} from '../json/jsonObjects'
import PopupDialog, { DialogTitle, SlideAnimation, DialogButton} from 'react-native-popup-dialog'
import {clearListOfQuiz, setQuiz, listOfQuiz, numOfRandomQuiz, selectedChoices, checkAnswer, selectedChoiceToCheck} from '../operator/setQuiz'

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.nextBlock = this.nextBlock.bind(this)
    this.previousBlock = this.previousBlock.bind(this)
    this.onSelect = this.onSelect.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
    this.resetBlock = this.resetBlock.bind(this)
    this.state={
      quiz: listOfEnglishTest[numOfRandomQuiz[0]],
      index: 0,
      quizQuantity: 0
    }

  }

  componentWillMount() {
    clearListOfQuiz()
    // setQuiz(10)
    this.getDataAndSet()
  }

  getDataAndSet() {
    AsyncStorage.getItem('@QU1Z', (err, result) => {
      // console.log(err)
      // quizQuantity = result
      setQuiz(result)
      console.log('show result ' + result)
      this.state.quizQuantity = result
      // console.log(this.state.quizQuantity + 'quiz ')
      // this.setState({quizQuantity: result})
    })
  }

  previousBlock() {
    this.state.index --
    this.setState({quiz: listOfQuiz[this.state.index]})
  }
  nextBlock() {
    this.state.index++
    this.setState({quiz: listOfQuiz[this.state.index]})
  }
  resetBlock() {
    clearListOfQuiz()
    //var out

    //var ten = 10
    //setQuiz(out)
    //console.log(this.state.quizQuantity + 'quizQuantity')
    setQuiz(this.state.quizQuantity)
    //console.log('reset')
    //console.log(listOfQuiz)
    this.setState({quiz: listOfQuiz[0], index: 0})
  }

  /* assign the choice on the list in order to highlight the answer when
  making changes */
  onSelect(index, choiceShort, choiceLong) {
    selectedChoices[index] = choiceShort
    selectedChoiceToCheck[index] = choiceLong

    // console.log(selectedChoices)
  }
  checkAnswer() {
    checkAnswer(selectedChoices)
  }

  render() {
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

          <Block quiz={this.state.quiz} selected={selectedChoices[this.state.index]}
                 index={this.state.index} onSelect={this.onSelect} reset={this.resetBlock}
                 changes={this.state.change} nextBlock={this.nextBlock} previousBlock={this.previousBlock}/>

      </View>
    )
  }
}

const styles=StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'red',
  },
  popBox: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
  }
})
