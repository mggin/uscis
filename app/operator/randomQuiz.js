
export const listOfRandomQuiz = [Math.floor((Math.random() * 1) + 0)]

export function randomQuiz() {
  // var listOfRandomQuiz = [Math.floor((Math.random() * 100) + 1)]
  var condition = true
  while (condition) {
    var num = Math.floor((Math.random() * 3) + 0)
    for (i = 0; i < listOfRandomQuiz.length; i++ ) {
      if (!listOfRandomQuiz.includes(num)) {
        listOfRandomQuiz.push(num)
      }
    }
    // This if statement ends the while-loop
    if (listOfRandomQuiz.length === 3) {
      condition = false
    }
  }
  // console.log(listOfRandomQuiz)
}
