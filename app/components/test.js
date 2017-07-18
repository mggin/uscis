

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
import Ads1 from './ads/ads1'
import ControlBlocks from './parts/controlBlocks'
import {listOfEnglishTest} from '../json/jsonObjects'
import PopupDialog, { DialogTitle, SlideAnimation, DialogButton} from 'react-native-popup-dialog'
import {setQuiz, listOfQuiz, numOfRandomQuiz, selectedChoices, checkAnswer, selectedChoiceToCheck} from '../operator/setQuiz'

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.nextBlock = this.nextBlock.bind(this)
    this.previousBlock = this.previousBlock.bind(this)
    this.onSelect = this.onSelect.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
    this.showPop = this.showPop.bind(this)
    this.dismissPop = this.dismissPop.bind(this)
    this.state={
      quiz: listOfEnglishTest[numOfRandomQuiz[0]],
      index: 0,
      quizQuantity: 0
    }

  }
  componentWillMount() {
    console.log('first')
    AsyncStorage.getItem('@QU1Z', (err, result) => {
      // console.log(err)
      // quizQuantity = result
      setQuiz(result)
      // this.setState({quizQuantity: result})

    })
    // console.log(quizQuantity)

  }



  previousBlock() {
    this.state.index --
    this.setState({quiz: listOfQuiz[this.state.index]})
  }

  nextBlock() {
    this.state.index++
    this.setState({quiz: listOfQuiz[this.state.index]})
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
  showPop() {
    this.popupQuit.show()
  }
  dismissPop() {
    this.popupQuit.dismiss()
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
    console.log(this.state.quiz)
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="blue"
                   barStyle="light-content" />
                   

          <Block quiz={this.state.quiz} selected={selectedChoices[this.state.index]}
                 index={this.state.index} onSelect={this.onSelect}
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
