let turnHolder = 1
let arr = [1,2,3,4,5,6,7,8,9]
let winner = document.getElementById('winner1')


function play (input){
    let boardSpace = document.getElementById(input)
    let playerTurn = document.getElementById('player')
    turnHolder++
    if (turnHolder % 2 === 0){
        playerTurn.innerText = 'O'
        boardSpace.innerText = 'X'
        arr[input] = 'X'
    } else {
        playerTurn.innerText = 'X'
        boardSpace.innerText = 'O'
        arr[input] = 'O'
    }
    if (arr[0] === 'X' && arr[0] === arr[1] && arr[0] === arr[2]){
        return winner.innerHTML = 'Player X Wins!'
    } else if (arr[0] === 'X' && arr[0] === arr[3] && arr[0] === arr[6]){
        return winner.innerHTML = 'Player X Wins!'
    } else if (arr[0] === 'X' && arr[0] === arr[4] && arr[0] === arr[8]){
        return winner.innerHTML = 'Player X Wins!'
    } else if (arr[3] === 'X' && arr[3] === arr[4] && arr[3] === arr[5]){
        return winner.innerHTML = 'Player X Wins!'
    } else if (arr[2] === 'X' && arr[2] === arr[5] && arr[2] === arr[8]){
        return winner.innerHTML = 'Player X Wins!'
    } else if (arr[1] === 'X' && arr[1] === arr[4] && arr[1] === arr[7]){
        return winner.innerHTML = 'Player X Wins!'
    } else if (arr[6] === 'X' && arr[6] === arr[7] && arr[7] === arr[8]){
        return winner.innerHTML = 'Player X Wins!'
    } else if (arr[2] === 'X' && arr[2] === arr[4] && arr[2] === arr[6]){
        return winner.innerHTML = 'Player X Wins!'
    } else if (arr[0] === 'O' && arr[0] === arr[1] && arr[0] === arr[2]){
        return winner.innerHTML = 'Player O Wins!'
    } else if (arr[0] === 'O' && arr[0] === arr[3] && arr[0] === arr[6]){
        return winner.innerHTML = 'Player O Wins!'
    } else if (arr[0] === 'O' && arr[0] === arr[4] && arr[0] === arr[8]){
        return winner.innerHTML = 'Player O Wins!'
    } else if (arr[3] === 'O' && arr[3] === arr[4] && arr[3] === arr[5]){
        return winner.innerHTML = 'Player O Wins!'
    } else if (arr[2] === 'O' && arr[2] === arr[5] && arr[2] === arr[8]){
        return winner.innerHTML = 'Player O Wins!'
    } else if (arr[1] === 'O' && arr[1] === arr[4] && arr[1] === arr[7]){
        return winner.innerHTML = 'Player O Wins!'
    } else if (arr[6] === 'O' && arr[6] === arr[7] && arr[7] === arr[8]){
        return winner.innerHTML = 'Player O Wins!'
    } else if (arr[2] === 'O' && arr[2] === arr[4] && arr[2] === arr[6]){
        return winner.innerHTML = 'Player O Wins!'
    } 
    let catsCount = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'X' || arr[i] === 'O'){
            catsCount++
            if(catsCount === 9){
                return winner.innerHTML = "Cat's Game!"
            }
        }
    }
}