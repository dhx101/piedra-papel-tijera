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

const botones = document.querySelectorAll('button');

botones.forEach(boton => boton.addEventListener('click', function (e) {
    let value = (this.value);
    return value;
}));



/* Want to create a funtion that will see if you win, lose or draw depending of your choice*/

function playRound() {
    let playerChoice = transformPlayerChoice(writePlayerChoice)
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
    console.log(playerChoice)
    
    if (playerChoice == 0) {
        if (computerChoice == 0 ) {
            console.log('Draw Rock draws with Rock');
         } else if (computerChoice == 1) {
            console.log('You Lose! Rock Loses against Paper');

         } else if (computerChoice == 2) {
            console.log('You Won! Rock beats Scissors');
;
         }
        } else if (playerChoice == 1) {
         if (computerChoice == 0 ) {
            console.log('You Won! Paper beast Rock');
         } else if (computerChoice == 1) {
            console.log('Draw Paper draws with Paper');
         } else if (computerChoice == 2) {
            console.log('You Lose! Paper Loses against Scissors');
         }
    } else if (playerChoice == 2) {
        if (computerChoice == 0 ) {
            console.log('You Lose! Scissors Loses against Rock');
         } else if (computerChoice == 1) {
            console.log('You Win! Scissors Beats Paper');
         } else if (computerChoice == 2) {
            console.log('Draw Scissors Draws with Scissors');
         }
    } else {
        console.log('You didnt write an avaliable option');
    }
    
}


document.write(game())

