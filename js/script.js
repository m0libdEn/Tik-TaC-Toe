//Get all squares of field
const square1 = document.getElementById('square-1__info')
const square2 = document.getElementById('square-2__info')
const square3 = document.getElementById('square-3_info')

const square4 = document.getElementById('square-4__info')
const square5 = document.getElementById('square-5__info')
const square6 = document.getElementById('square-6__info')

const square7 = document.getElementById('square-7__info')
const square8 = document.getElementById('square-8__info')
const square9 = document.getElementById('square-9__info')

const arrOfSquares = [square1, square2, square3, square4, square5, square6, square7, square8, square9]

const header = document.getElementById('header') //Get element for change text for winner

const playagain = document.getElementById('playagain')//Get element for ask to play again after game


const popup = document.getElementById('popup')
const next = document.getElementById('nextbutton')
const start = document.getElementById('start')
const firstInput = document.getElementById('inputFirst')
const secondInput = document.getElementById('inputSecond')
const fistPlayerOverlay = document.getElementById('popupNext')
const secondPlayerOverlay = document.getElementById('popupStart')


let PLAYERS = true //First player - x - true, Second Player - o - false
let fistPlayer =""
let secondPlayer =""
let arrOfMoves = new Array(3) 
for (let i = 0; i < arrOfMoves.length; i++) {
    arrOfMoves[i] =  new Array(3)
} //Create array of moves

//START
next.addEventListener('click', function(){
    fistPlayer = firstInput.value
    fistPlayerOverlay.style.display = 'none'
    secondPlayerOverlay.style.display = 'block'
    document.getElementById('popupInfo').innerHTML = 'Put name of second player'
})
firstInput.addEventListener('keyup', function(el) {
    if (el.code === 'Enter') {
        next.click()
    }
})

start.addEventListener('click', function(){
    secondPlayer = secondInput.value
    popup.style.display = 'none'
})
secondInput.addEventListener('keyup', function(el){
    if(el.code === 'Enter'){
        start.click()
    }
})
//GAME----------------------------------------------
function makeMove(square) {
  if (!checkMove(square)) {
    if (PLAYERS) { //if PLAYER == TRUE  -> that's x turn
        square.innerHTML = 'X' //put 'X' on field
        PLAYERS = false //change turn
    }
    else{
        square.innerHTML = 'O'
        PLAYERS = true
  }
  return square.textContent //return our move to put it in our array
}
}

function checkMove(square){return square.textContent?true:false} //checking if field have have space for move


function checkGame(){ //this function check if game finshed  - it always any variable  - true - that's mean that game finiched, false - continue
    //check horizontal 
    for (let i = 0; i < arrOfMoves.length; i++) {
           if (arrOfMoves[i][0] === arrOfMoves[i][1] && arrOfMoves[i][1] === arrOfMoves[i][2] && arrOfMoves[i][0]!==undefined && arrOfMoves[i][1]!==undefined && arrOfMoves[i][2]!==undefined) {
               if (arrOfMoves[i][0] === 'X') {
                    header.innerHTML = `Winner is ${fistPlayer}`
               }else{
                    header.innerHTML = `Winner is ${secondPlayer}` //change our header 
               }
               return true
           }
       }
    //check vertical
       for (let i = 0; i < arrOfMoves.length; i++) {
           if (arrOfMoves[0][i] === arrOfMoves[1][i] && arrOfMoves[1][i] === arrOfMoves[2][i] && arrOfMoves[0][i]!==undefined && arrOfMoves[1][i]!==undefined && arrOfMoves[2][i]!==undefined) {
            if (arrOfMoves[0][i] === 'X') {
                header.innerHTML = `Winner is ${fistPlayer}`
            }else{
                header.innerHTML = `Winner is ${secondPlayer}` //change our header 
            }
               return true
           }
       }
    //check diagonal
       if((arrOfMoves[0][0] === arrOfMoves[1][1] && arrOfMoves[1][1] === arrOfMoves[2][2] && arrOfMoves[1][1] !==undefined ) || (arrOfMoves[0][2] === arrOfMoves[1][1] && arrOfMoves[1][1] === arrOfMoves[2][0] && arrOfMoves[1][1] !==undefined)){
        if (arrOfMoves[1][1] === 'X') {
            header.innerHTML = `Winner is ${fistPlayer}`
       }else{
            header.innerHTML = `Winner is ${secondPlayer}` //change our header 
       }
           return true 
       }
   
       //check tie
       let tie = true //make variable do we have a tie (default true)
       for (let i = 0; i < arrOfMoves.length; i++) {
          for (let k = 0; k < arrOfMoves.length; k++) {
               if (arrOfMoves[i][k] == null && arrOfMoves[i][k]==undefined) { //if ANY OF FIELDS EMPLTY and NO ANY neither side won - chage to false
                   tie = false    
               }
          } 
       }
       if (tie) { //if all squares are not empty, but game not finched  - change header
           header.innerHTML='Tie, try more one time!'
           return true
       }
   
       return false
   }
   
   function checkEndOfGame(){
       if (checkGame()) {
           playagain.style.display='block' //if game ends,then the continue button pops up
       }
   }

square1.addEventListener('click',function () {
    if (!(checkEndOfGame())) {
        arrOfMoves[0][0] = makeMove(square1) //add our move of player (x or o) to our array
        checkEndOfGame() 
    }
})
square2.addEventListener('click',function () {
    if (!(checkEndOfGame())) {
        arrOfMoves[0][1] = makeMove(square2)
        checkEndOfGame() 
    }
})
square3.addEventListener('click',function () {
    if (!(checkEndOfGame())) {
        arrOfMoves[0][2] = makeMove(square3)
        checkEndOfGame() 
    }
})
square4.addEventListener('click',function () {
    if (!(checkEndOfGame())) {
        arrOfMoves[1][0] = makeMove(square4)
        checkEndOfGame() 
    }
})
square5.addEventListener('click',function () {
    if (!(checkEndOfGame())) {
        arrOfMoves[1][1] = makeMove(square5)
        checkEndOfGame() 
    }
})
square6.addEventListener('click',function () {
    if (!(checkEndOfGame())) {
        arrOfMoves[1][2] = makeMove(square6)
        checkEndOfGame() 
    }
})
square7.addEventListener('click',function () {
    if (!(checkEndOfGame())) {
        arrOfMoves[2][0] = makeMove(square7)
        checkEndOfGame() 
    }
})
square8.addEventListener('click',function () {
    if (!(checkEndOfGame())) {
        arrOfMoves[2][1] = makeMove(square8)
        checkEndOfGame() 
    }
})
square9.addEventListener('click',function () {
    if (!(checkEndOfGame())) {
        arrOfMoves[2][2] = makeMove(square9)
        checkEndOfGame() 
    }
})


playagain.addEventListener('click', function(){
    for (let i = 0; i < arrOfSquares.length; i++) {
        arrOfSquares[i].innerHTML = ""
    }
    for (let i = 0; i < arrOfMoves.length; i++) {
        for (let j = 0; j < arrOfMoves.length; j++) {
            arrOfMoves[i][j] = undefined
        }
    }
    playagain.style.display = 'none'
    header.innerHTML = 'Tic-Tac-toe!'
  //if user put the button - game is restarted
})