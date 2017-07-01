import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native'
import Block from './parts/blocks'
import {listOfEnglishTest} from '../json/jsonObjects'
import {randomQuiz, listOfRandomQuiz} from '../operator/randomQuiz'

export default class Test extends Component {
  constructor(props) {
    super(props)

  }
  componentWillMount() {
    randomQuiz()
  }

  render() {
    randomQuiz()
    var QuizBlock = []
    for (i = 0; i < listOfRandomQuiz.length; i++){
      var block = <Block quiz={listOfEnglishTest[listOfRandomQuiz[i]]} />
      QuizBlock.push(block)
    }
    return (
      <ScrollView style={{flex: 1}}>
          {QuizBlock}
      </ScrollView>
    )
  }
}

const styles=StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'red',
  }
})
