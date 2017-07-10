import {listOfEnglishTest} from '../json/jsonObjects'

export const listOfQuiz = []
export const selectedChoices = []
export const numOfRandomChoice = [Math.floor((Math.random() * 4) + 0)]
export const numOfRandomQuiz = [Math.floor((Math.random() * 99) + 0)]


function randomQuiz() {
  console.log('randomQuiz')
  randomChoice()
  // var listOfRandomQuiz = [Math.floor((Math.random() * 100) + 1)]
  var condition = true
  // console.log(listOfRandomQuiz)
  while (condition) {
     num = Math.floor((Math.random() * 99) + 0)
    // console.log(num)
    if (numOfRandomQuiz.length === 25) {
      condition = false
    } else if (!numOfRandomQuiz.includes(num)) {
        numOfRandomQuiz.push(num)
    } else {}
  }
}

function randomChoice() {
  // var listOfRandomChoice = [Math.floor((Math.random() * 100) + 1)]
  var condition = true
  while (condition) {
    var num = Math.floor((Math.random() * 4) + 0)
    if (numOfRandomChoice.length === 4) {
      condition = false
    } else if (!numOfRandomChoice.includes(num)) {
        numOfRandomChoice.push(num)
    } else {}
  }
  console.log(numOfRandomChoice)
}

export function setQuiz() {
  randomQuiz()
  console.log(numOfRandomQuiz)
  for (var i = 0; i < numOfRandomQuiz.length; i++) {
    // console.log(numOfRandomQuiz[i])
    listOfQuiz.push(listOfEnglishTest[numOfRandomQuiz[i]])
    selectedChoices.push('')
  }
  //console.log(listOfEnglishTest)
  //console.log(listOfQuiz)
}
