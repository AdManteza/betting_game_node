var prompt = require('prompt-sync')();
var colors = require('colors');

function gameStart(){

  var playerBankroll = 100;
  
  getInput();

  function getInput(){
    var playerBet = prompt("How much are you gonna bet? $".blue.bold);
    var playerGuess = prompt("Give me your guess ".green);

    evaluate(parseInt(playerBet), parseInt(playerGuess));
  };
 
  function evaluate(playerBet, playerGuess) {
    
    var randomNumber = Math.floor((Math.random() * 10) + 1);

    if (playerGuess == randomNumber) {
      playerBankroll += playerBet;
      displayResult("Correct", randomNumber, playerGuess);
    } else {
      if ((playerGuess === randomNumber - 1) || (playerGuess === randomNumber + 1)) {
        displayResult("Close", randomNumber, playerGuess);
      } else {
        playerBankroll -= playerBet;
        displayResult("Wrong", randomNumber, playerGuess);
      }
    }

    if (playerBankroll <= 0) {
      playerBankroll = 0;
      console.log(`Game Over! You have $${playerBankroll} remaining`.bold.red);
      restart();
    } else {
      getInput();
    }
  };

  function displayResult(result, randomNumber, playerGuess) {
    console.log("----------------------------------------------------------------")
    console.log(`${result}!! You have: $${playerBankroll} remaining`.bold.green);
    console.log(`You guessed: ${playerGuess}`.bold.blue);
    console.log(`Correct number is: ${randomNumber}`.bold.magenta);
  };

  function restart(){
    var reply = prompt("Try Again? y/n ".bold.cyan)
    var reply = reply.toLowerCase();

    if (reply === 'y') {
      gameStart();
    } else if (reply === 'n') {
      console.log("Bye".bold.italic.yellow);
    } else {
      console.log("Invalid reply");
      restart();
    }
  }
};

gameStart();






















