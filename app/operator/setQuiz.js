import {listOfEnglishTest} from '../json/jsonObjects'
import React, {Component} from 'react'
import {
  AsyncStorage,
} from 'react-native'

export let listOfQuiz = []
export const selectedChoices = []
export const selectedChoiceToCheck = []
export const numOfRandomChoice = [Math.floor((Math.random() * 4) + 0)]
export const numOfRandomQuiz = [Math.floor((Math.random() * 99) + 0)]
export let correctChoices = 0


function randomQuiz(quizQuantity) {
  // console.log('randomQuiz')

  // console.log('he')
  // console.log(quizQuantity)
  // let setQuizQuantity = 0
  // console.log(quizQuantity + 'from storage')
  var quiz = 0
  if (quizQuantity == '10') {
    quiz = 10
  } else if (quizQuantity == '25') {
    quiz = 25
  } else if (quizQuantity == '50') {
    quiz = 50
  } else {}
  let condition = true
  // console.log(listOfRandomQuiz)
  while (condition) {
     num = Math.floor((Math.random() * 99) + 0)
    // console.log(num)
    console.log(quizQuantity)
    if (numOfRandomQuiz.length === quiz) {
      condition = false
    } else if (!numOfRandomQuiz.includes(num)) {
        numOfRandomQuiz.push(num)
    } else {}
  }

}

export function randomChoice() {
  // var listOfRandomChoice = [Math.floor((Math.random() * 100) + 1)]
  let condition = true
  while (condition) {
    let num = Math.floor((Math.random() * 4) + 0)
    if (numOfRandomChoice.length === 4) {
      condition = false
    } else if (!numOfRandomChoice.includes(num)) {
        numOfRandomChoice.push(num)
    } else {}
  }
  //console.log(numOfRandomChoice)
}

export function setQuiz(num) {
  //console.log('second')
  randomQuiz(num)
  // checkAnswer()
  // console.log(numOfRandomQuiz)
  for (let i = 0; i < numOfRandomQuiz.length; i++) {
    // console.log(numOfRandomQuiz[i])
    listOfQuiz.push(listOfEnglishTest[numOfRandomQuiz[i]])
    selectedChoices.push('')
  }
  //console.log(listOfEnglishTest)
  //console.log(listOfQuiz)
}

export function checkAnswer() {
   let listOfCorrectAns = []
   // let cc = 0
   for (let i = 0; i < listOfEnglishTest.length; i++) {
     listOfCorrectAns.push(listOfEnglishTest[i].C1)
   }
   for (let choice of selectedChoiceToCheck) {
     // console.log(choice)
     if (listOfCorrectAns.includes(choice)) {
       correctChoices += 1
     }
   }

   // return correctChoices
   // console.log('correc')
   //console.log(selectedChoiceToCheck)
   //console.log(listOfCorrectAns)
   // console.log('You have answered ' + correctChoices + ' right answer')
}

export function clearListOfQuiz() {
  /*
  for (let i = 0; i < listOfQuiz.length; i++) {
    console.log(i)
    listOfQuiz.splice(i, 1)
  }
  */
  listOfQuiz.splice(0, listOfQuiz.length)
  numOfRandomQuiz.splice(0, numOfRandomQuiz.length)
  selectedChoices.splice(0, selectedChoices.length)
  selectedChoiceToCheck.splice(0, selectedChoiceToCheck.length)
  correctChoices = 0
  // listOfQuiz.splice(8, 1)
  // console.log(listOfQuiz)
  // listOfQuiz.push('hello')
  // console.log(listOfQuiz)
}
