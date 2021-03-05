  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
// document.addEventListener("DOMContentLoaded", initClown())

// function initClown() {
  let clownHeadImage = document.getElementById("clownHead")
  let clownBodyImage = document.getElementById("clownBody")
  let clownShoesImage = document.getElementById("clownShoes")
  let clownHeadIndex = 0
  let clownBodyIndex = 0
  let clownShoesIndex = 0
  let partIndex = 0
  let activePart = clownHeadImage
  let activeIndex = 0
  let targetIndex = clownHeadIndex
  window.addEventListener("keydown", handleKeyPress, false)
  
// }


function handleKeyPress (key)
  {
    if (key.keyCode == "38" ) {
        changePartUp()
    }

    if (key.keyCode == "40" ) {
        changePartDown()
    }

    if (key.keyCode == "37" ) {
      changeClothesBack()
    }

    if (key.keyCode == "39" ) {
      changeClothesForward()
    }
  }



function changePartUp()
  {
    partIndex--
    if (partIndex < 0) {
    partIndex = 2
    }
    console.log(partIndex)
  }

function changePartDown()
  {
    partIndex++
    if (partIndex > 2) {
      partIndex = 0
    }
    console.log(partIndex)
  }


  function changeClothesBack () 
    {
      let partString = ""

      if (partIndex == 0) {
        partString = "../dress-the-clown/images/head"
        activePart = clownHeadImage
        clownHeadIndex--
        if (clownHeadIndex < 0) {
          clownHeadIndex = 5
        }
        console.log(clownHeadIndex)
        activeIndex = clownHeadIndex
        console.log(activeIndex)
      }

      if (partIndex == 1) {
        partString = "../dress-the-clown/images/body"
        activePart = clownBodyImage
        clownBodyIndex--
        if (clownBodyIndex < 0) {
          clownBodyIndex = 5
        }
        activeIndex = clownBodyIndex
      }
  
          
      if (partIndex == 2) {
        partString = "../dress-the-clown/images/shoes"
        activePart = clownShoesImage
        clownShoesIndex--
        if (clownShoesIndex < 0) {
          clownShoesIndex = 5
        }
        activeIndex = clownShoesIndex
      }

      let imageNameString = ""
      imageNameString =  partString + activeIndex + ".png"
      activePart.src = imageNameString

      console.log(activeIndex)
    }

    function changeClothesForward () 
    {
      let partString = ""

      if (partIndex == 0) {
        partString = "../dress-the-clown/images/head"
        activePart = clownHeadImage
        clownHeadIndex++
        if (clownHeadIndex > 5) {
          clownHeadIndex = 0
        }
        console.log(clownHeadIndex)
        activeIndex = clownHeadIndex
        console.log(activeIndex)
      }

      if (partIndex == 1) {
        partString = "../dress-the-clown/images/body"
        activePart = clownBodyImage
        clownBodyIndex++
        if (clownBodyIndex > 5) {
          clownBodyIndex = 0
        }
        activeIndex = clownBodyIndex
      }
  
          
      if (partIndex == 2) {
        partString = "../dress-the-clown/images/shoes"
        activePart = clownShoesImage
        clownShoesIndex++
        if (clownShoesIndex > 5) {
          clownShoesIndex = 0
        }
        activeIndex = clownShoesIndex
      }

      let imageNameString = ""
      imageNameString =  partString + activeIndex + ".png"
      activePart.src = imageNameString

      console.log(activeIndex)
    }