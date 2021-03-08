  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
let gameBoard = document.getElementById("gameBoard")
console.log(gameBoard)

let gameBoardIndex = []

for (let i = 0; i < gameBoard.rows.length; i++) {
  for (let j = 0; j < gameBoard.rows[i].cells.length; j++) {
    gameBoardIndex.push(gameBoard.rows[i].cells[j])
  }
}
  
console.log(gameBoardIndex)