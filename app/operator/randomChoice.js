
export const listOfRandomChoice = [Math.floor((Math.random() * 1) + 0)]

export function randomChoice() {
  // var listOfRandomChoice = [Math.floor((Math.random() * 100) + 1)]
  var condition = true
  while (condition) {
    var num = Math.floor((Math.random() * 3) + 1)
    for (i = 0; i < listOfRandomChoice.length; i++ ) {
      if (!listOfRandomChoice.includes(num)) {
        listOfRandomChoice.push(num)
      }
    }
    // This if statement ends the while-loop
    if (listOfRandomChoice.length === 4) {
      condition = false
    }
  }
  // console.log(listOfRandomChoice)
}
