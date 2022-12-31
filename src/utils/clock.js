

// timer ////////////////////////////////////////////////////////


let sec = 0
let min = 1
let timerTime = true

function minuts() {
  if (min > -1) {
    second()
  } else {
    timerTime = false
    console.log('timer off')
    return
  }
}

function second() {

  if (sec !== 0) {
    sec -= 1
    console.log(min + ':' + (sec === 60 ? '00' : dableZero(sec)))
  } else {
    sec = 60;
    console.log(min + ':' + (sec === 60 ? '00' : dableZero(sec)))
    min -= 1
  }
  timerTime ? setTimeout(minuts, 1000) : console.log('time off')
}

const timer = function () {
  console.log(min + ':' + (sec === 60 ? '00' : dableZero(sec)))
  minuts()
}

function dableZero(num) {
  let dz = num + '';
  return dz.length > 1 ? dz : '0' + dz
}

export default timer

////////////////////////////////////////////////////////////////////////////////////////////////////