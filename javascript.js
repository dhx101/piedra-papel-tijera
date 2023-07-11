/*
0 = Piedra
1 = Papel
2 = Tijera
*/
/* Making a random number generator from 0 to 2 so the machine can chose a option*/
function getComputerChoice() {
    let numero = Math.floor(Math.random()*3)
    return numero;
}
/*Created a way to get user choice and made the trasnformation to a value from 0 to 2 */

let writePlayerChoice = prompt('Choose Rock, Paper, Scissors')


function transformPlayerChoice(writePlayerChoice) {
    let promtPlayerChoice = writePlayerChoice.toUpperCase()
    if (promtPlayerChoice == 'ROCK') {
        let numPlayerChoice = 0;
        return numPlayerChoice;
    } else if (promtPlayerChoice == 'PAPER') {
        let numPlayerChoice = 1;
        return numPlayerChoice;
    } else if ( promtPlayerChoice == 'SCISSORS') {
        let numPlayerChoice = 2;
        return numPlayerChoice;
    } else {
        let numPlayerChoice = ('You didnt chose a avaliable choice')
        return numPlayerChoice;
    }
    
}


/* Want to create a funtion that will see if you win, lose or draw depending of your choice*/

function playRound() {
    let playerChoice = transformPlayerChoice(writePlayerChoice)
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
    console.log(playerChoice)
    
    if (playerChoice == 0) {
        if (computerChoice == 0 ) {
            let result = 'Draw rock rock' ;
            return result;
         } else if (computerChoice == 1) {
            let result = "You Lose! rock paper";
            return result
         } else if (computerChoice == 2) {
            let result = 'You Won! rock sci';
            return result;
         }
        } else if (playerChoice == 1) {
         if (computerChoice == 0 ) {
            let result = 'You Won! paper rock';
            return result;
         } else if (computerChoice == 1) {
            let result = "Draw paper paper";
            return result
         } else if (computerChoice == 2) {
            let result = 'You Lose! paper sci';
            return result;
         }
    } else if (playerChoice == 2) {
        if (computerChoice == 0 ) {
            let result = 'You Lose! sci rock';
            return result;
         } else if (computerChoice == 1) {
            let result = 'You Win! sci paper';
            return result
         } else if (computerChoice == 2) {
            let result = 'Draw sci sci';
            return result;
         }
    } else {
        let result = 'You didnt choose an avaliable choice'
        return result
    }
    
}


console.log(playRound())

