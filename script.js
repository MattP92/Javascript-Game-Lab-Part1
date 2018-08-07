const userInput = prompt('Would you like to play a game?');
const opponent = 'Grant the almighty chicken';
let userWins = 0; 
let opponentHealth = 10;
let userHealth = 40;
let userName; 

function attack(){
    return Math.floor((Math.random() * 2)+1);
}

if(userInput === 'yes'){
    userName = prompt('Enter your name');
function attack(){
    return Math.floor((Math.random() * 2)+1);
}

while(userHealth  > 0 && userWins < 3){
    opponentHealth -= attack();
    userHealth -= attack();
    console.log(`${opponent} has ${opponentHealth} health left`);
    console.log(`${userName} has ${userHealth} health left`);
    if(opponentHealth <= 0){
        opponentHealth = 10; 
        console.log(++userWins);
    }
}
    console.log('Thank you for playing');
}else{
    console.log('Thanks');
}