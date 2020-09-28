var userNumber = 100;
var counter = 0;
var randomNumber = Math.floor(Math.random() * userNumber) +1;

while (x != randomNumber ) {
    var x = prompt(`Enter a number between 1 and ${userNumber}`);
    counter += 1;
    
    if (x < randomNumber) {
        console.log("Too low, guess again");
        break;
    }
    else if (x > randomNumber) {
        console.log("Too high, guess again");
        
    }
    else (x === randomNumber); {
        console.log(`correct! It took you ${counter} attempts to guess the correct number.`);
        
    }
}