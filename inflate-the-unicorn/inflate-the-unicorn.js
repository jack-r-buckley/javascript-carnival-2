  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
document.addEventListener("DOMContentLoaded", initUnicorns())

function initUnicorns() {
  let unicorn0 = document.getElementById("unicorn0")
  let unicorn1 = document.getElementById("unicorn1")
  let unicorn2 = document.getElementById("unicorn2")

  unicorn0.picTracker = 0
  unicorn1.picTracker = 0
  unicorn2.picTracker = 0
    
  console.log(unicorn0, unicorn0.picTracker)
  console.log(unicorn1, unicorn1.picTracker)
  console.log(unicorn2, unicorn2.picTracker)
}

function inflateHorn(unicorn) {
  if (unicorn.picTracker == 3) {
    alert("This unicorn is doing dandy! Inflate the others!")
  } else {
    unicorn.picTracker ++
  }
  if (unicorn.picTracker == 0)
  unicorn.src = "./images/unicorn-0.png"
  if (unicorn.picTracker == 1)
  unicorn.src = "./images/unicorn-1.png"
  if (unicorn.picTracker == 2)
  unicorn.src = "./images/unicorn-2.png"
  if (unicorn.picTracker == 3)
  unicorn.src = "./images/unicorn-3.png"
}