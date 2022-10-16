const square1 = document.getElementById('square-1__info')
const square2 = document.getElementById('square-2__info')
const square3 = document.getElementById('square-3_info')

const square4 = document.getElementById('square-4__info')
const square5 = document.getElementById('square-5__info')
const square6 = document.getElementById('square-6__info')

const square7 = document.getElementById('square-7__info')
const square8 = document.getElementById('square-8__info')
const square9 = document.getElementById('square-9__info')

const header = document.getElementById('header')
let PLAYERS = true

let arrOfMoves = new Array(3)
for (let i = 0; i < arrOfMoves.length; i++) {
    arrOfMoves[i] =  new Array(3)
}

function checkWin(){
    for (let i = 0; i < arrOfMoves.length; i++) {
        if (arrOfMoves[i][0] === arrOfMoves[i][1] && arrOfMoves[i][1] === arrOfMoves[i][2] && arrOfMoves[i][0]!==undefined) {
            header.innerHTML = 'Win'
        }
    }

    for (let i = 0; i < arrOfMoves.length; i++) {
        if (arrOfMoves[0][i] === arrOfMoves[1][i] && arrOfMoves[1][i] === arrOfMoves[2][i] && arrOfMoves[0][i]!==undefined) {
            header.innerHTML = 'Win'
        }
    }

    if((arrOfMoves[0][0] === arrOfMoves[1][1] && arrOfMoves[1][1] === arrOfMoves[2][2] ) || (arrOfMoves[0][2] === arrOfMoves[1][1] && arrOfMoves[1][1] === arrOfMoves[2][0]) && arrOfMoves[1][1] !==undefined){
        header.innerHTML = 'Win'
    }
}

function checkMove(square){return square.textContent?true:false}

function makeMove(square) {
  if (!checkMove(square)) {
    if (PLAYERS) {
        square.innerHTML = 'X'
        PLAYERS = false
    }
    else{
        square.innerHTML = 'O'
        PLAYERS = true
  }
  return square.textContent
}
}

square1.addEventListener('click',function () {
    arrOfMoves[0][0] = makeMove(square1)
    checkWin()
})
square2.addEventListener('click',function () {
    arrOfMoves[0][1] = makeMove(square2)
    checkWin()
})
square3.addEventListener('click',function () {
    arrOfMoves[0][2] = makeMove(square3)
    console.log(arrOfMoves);
    checkWin()
})
square4.addEventListener('click',function () {
    arrOfMoves[1][0] = makeMove(square4)
    console.log(arrOfMoves);
    checkWin()
})
square5.addEventListener('click',function () {
    arrOfMoves[1][1] = makeMove(square5)
    console.log(arrOfMoves);
    checkWin()
})
square6.addEventListener('click',function () {
    arrOfMoves[1][2] = makeMove(square6)
    console.log(arrOfMoves);
    checkWin()
})
square7.addEventListener('click',function () {
    arrOfMoves[2][0] = makeMove(square7)
    console.log(arrOfMoves);
    checkWin()
})
square8.addEventListener('click',function () {
    arrOfMoves[2][1] = makeMove(square8)
    console.log(arrOfMoves);
    checkWin()
})
square9.addEventListener('click',function () {
    arrOfMoves[2][2] = makeMove(square9)
    console.log(arrOfMoves);
    checkWin()
})