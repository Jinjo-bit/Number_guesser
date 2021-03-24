var x, text;

let totalGuesses = 0;
function startFunction() {
    document.getElementById("submitBtn").disabled = true;
}

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

function startFunction() {
    document.getElementById("submitBtn").disabled = false;
}

function myFunction() {
    var x, text;
    x = document.getElementById("numb").value

    if (x < 1 || x > 20) {
        text = "Please Pick a number from 1 to 20."
        document.getElementById("response").innerHTML = text;
    } else if (x == randomNumber) {
        text = "You're winnin' son."
        document.getElementById("response").innerHTML = text;
    } else {
        text = "Nope try again."
        document.getElementById("response").innerHTML = text;
    }
    playerGuesses();
}
var numbsGuessed = [];
var playerScore = 0;

function playerGuesses() {
    var playerGuess;
    playerGuess = document.getElementById("numb").value;

    numbsGuessed.push(playerGuess);
    document.getElementById("yourGuess").innerHTML = numbsGuessed;

    if (playerGuess == randomNumber) {
        var text = "MORE POWEEER!"
        document.getElementById("scoreCount").innerHTML = text;
        playerScore = playerScore + 5;
    } else {
        playerScore = playerScore - 2;
        var text = "M-my Power! IT IS DRAININGGGG!!"
        document.getElementById("scoreCount").innerHTML = text;
    }
    document.getElementById("score").innerHTML = playerScore;
}

var highscore = localStorage.getItem("highscore");
if (highscore !== null) {
    if (playerScore > highscore) {
        localStorage.setItem("highscore", playerScore);
        document.getElementById("high").innerHTML = highscore;
    }
} else {
    localStorage.setItem("highcore", score);
    document.getElementById("high").innerHTML = highscore;
}
