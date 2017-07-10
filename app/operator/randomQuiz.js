
export const listOfRandomQuiz = [Math.floor((Math.random() * 99) + 0)]

export function randomQuiz() {
  console.log('randomQuiz')
  // var listOfRandomQuiz = [Math.floor((Math.random() * 100) + 1)]
  var condition = true
  console.log(listOfRandomQuiz)
  while (condition) {
     num = Math.floor((Math.random() * 99) + 0)
    console.log(num)
    if (listOfRandomQuiz.length === 25) {
      condition = false
    } else if (!listOfRandomQuiz.includes(num)) {
        listOfRandomQuiz.push(num)
    } else {}
  }
}
