import {listOfEnglishTest} from '../json/jsonObjects'
import React, {Component} from 'react'
import {
  AsyncStorage,
} from 'react-native'

export let listOfQuiz = []      //randomly choose quizzes
export const selectedChoices = []   //user selected choices with short form(raw data)
export const selectedChoiceToCheck = [] //user selected choice which is acutual data from box
export const numOfRandomChoice = [Math.floor((Math.random() * 4) + 0)]
export const numOfRandomQuiz = [Math.floor((Math.random() * 99) + 0)]
export let correctChoices = 0  // correct answers


/*This generate the quizzes exact amount of quiz
from listOfEnglishTest. It takes arg from user setting */
function randomQuiz(quizQuantity) {
  //console.log('randomQuiz')
  var quiz = 0
  if (quizQuantity == '10') {
    quiz = 10
  } else if (quizQuantity == '25') {
    quiz = 25
  } else if (quizQuantity == '50') {
    quiz = 50
  } else {}
  let condition = true
  while (condition) {
     num = Math.floor((Math.random() * 99) + 0)
    console.log(quizQuantity)
    if (numOfRandomQuiz.length === quiz) {
      condition = false
    } else if (!numOfRandomQuiz.includes(num)) {
        numOfRandomQuiz.push(num)
    } else {}
  }

}

/* randomChoice choose the random number 1 to 4
in order to rotate the choices's place */
export function randomChoice() {
  //console.log('randomChoice')
  let condition = true
  while (condition) {
    let num = Math.floor((Math.random() * 4) + 0)
    if (numOfRandomChoice.length === 4) {
      condition = false
    } else if (!numOfRandomChoice.includes(num)) {
        numOfRandomChoice.push(num)
    } else {}
  }
}

export function setQuiz(num) {
  // console.log('setQuiz')
  randomQuiz(num)
  for (let i = 0; i < numOfRandomQuiz.length; i++) {
    // console.log(numOfRandomQuiz[i])
    listOfQuiz.push(listOfEnglishTest[numOfRandomQuiz[i]])
    selectedChoices.push('')
  }
}

/* extract answer from listOfEnglishTest and compare with
user choices then give the accurate progress */
export function checkAnswer() {
   //console.log('checkAnswer')
   let listOfCorrectAns = []
   for (let i = 0; i < listOfEnglishTest.length; i++) {
     listOfCorrectAns.push(listOfEnglishTest[i].C1)
   }
   for (let choice of selectedChoiceToCheck) {
     if (listOfCorrectAns.includes(choice)) {
       correctChoices += 1
     }
   }
}

/* clearListOfQuiz delete everything on current information
about Quiz it contains everything regarding with quiz*/
export function clearListOfQuiz() {
  listOfQuiz.splice(0, listOfQuiz.length)
  numOfRandomQuiz.splice(0, numOfRandomQuiz.length)
  selectedChoices.splice(0, selectedChoices.length)
  selectedChoiceToCheck.splice(0, selectedChoiceToCheck.length)
  correctChoices = 0
}
