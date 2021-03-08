  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
  let gameBoard = document.getElementById("gameBoard")
  let gameBoardIndex = []
  let newCell = Math.floor(Math.random() * 25 )
  let clickedCell = 0
  // document.addEventListener('click', changeMole())
  // changeMole()

  for (let i = 0; i < gameBoard.rows.length; i++) {
    for (let j = 0; j < gameBoard.rows[i].cells.length; j++) {
      gameBoardIndex.push(gameBoard.rows[i].cells[j])
      gameBoard.rows[i].cells[j].setAttribute('onclick', 'readGameBoard(this)')
      gameBoard.rows[i].cells[j].hasMole = false
    }
  }

  for (let i = 0; i < gameBoardIndex.length; i++) {
    gameBoardIndex[i].indexPosition = i
  }

  gameBoardIndex[newCell].hasMole = true
  gameBoardIndex[newCell].innerHTML = '<img src="mole.PNG" width="100%" height="100%" />'
  
  function readGameBoard(clickedCell) {
if (clickedCell.indexPosition == newCell) {
      var bonkNoise = new Audio('whack-audio.wav');
      bonkNoise.play();
      gameBoardIndex[newCell].innerHTML = ''
      gameBoardIndex.hasMole = false
      newCell = Math.floor(Math.random() * 25)
      gameBoardIndex[newCell].innerHTML = '<img src="mole.PNG" width="100%" height="100%" />'
      gameBoardIndex.hasMole = true
  }
}


