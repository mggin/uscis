
export const listOfRandomChoice = [Math.floor((Math.random() * 4) + 0)]

export function randomChoice() {
  // var listOfRandomChoice = [Math.floor((Math.random() * 100) + 1)]
  var condition = true
  while (condition) {
    var num = Math.floor((Math.random() * 4) + 0)
    if (listOfRandomChoice.length === 4) {
      condition = false
    } else if (!listOfRandomChoice.includes(num)) {
        listOfRandomChoice.push(num)
    } else {}
  }
  console.log(listOfRandomChoice)
}
