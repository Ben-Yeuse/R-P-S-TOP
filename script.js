function playerPlay () {
    let play = "";

    while (play !== "rock" && play !== "paper" && play !== "scissors") {
        play = prompt ("Please, choose between 'rock', 'paper' and 'scissors' :").toLowerCase();
    }

    return play;
}

function computerPlay () {
    const randomValue = Math.ceil(Math.random() * 3);
    
    if (randomValue === 1) return "rock";

    else if (randomValue === 2) return "paper";

    else return "scissors";
}

function roundResult (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return `It's an equality! ${playerSelection} and ${computerSelection}`;

    else {
        switch (playerSelection + computerSelection) {
            case "rockpaper" :
                return "You Lose! paper beats rock";
            case "paperrock" :
                return "You Win! paper beats rock";
            case "rockscissors" :
                return "You Win! rock beats scissors";
            case "scissorsrock" :
                return "You Lose! rock beats scissors";
            case "paperscissors" :
                return "You Lose! scissors beats paper";
            case "scissorspaper" :
                return "You Win! scissors beats paper";
        }
    }
}

function roundPoint (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return [0, 0];

    else {
        switch (playerSelection + computerSelection) {
            case "rockpaper" :
            case "scissorsrock" :
            case "paperscissors" :
                return [0, 1];
            case "paperrock" :
            case "rockscissors" :
            case "scissorspaper" :
                return [1, 0];
        }
    }
}

function sumPoints (totalPoints, newPoints) {
    let playerPoints = totalPoints[0] + newPoints[0];
    let computerPoints = totalPoints[1] + newPoints[1];

    return [playerPoints, computerPoints];
}

function game () {
    let playerSelection;
    let computerSelection;
    let result;
    let point;
    let totalPoints = [0, 0];

    let n = 0;

    while (n < 5) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        result = roundResult (playerSelection, computerSelection);
        point = roundPoint (playerSelection, computerSelection);
        totalPoints = sumPoints (totalPoints, point);
        console.log(`${result} - score => You : ${totalPoints[0]} / computer : ${totalPoints[1]}`);
        n += 1;
    }

    const winner = (totalPoints[0] == totalPoints[1]) ? "It's an equality!" : (totalPoints[0] >= totalPoints[1]) ? "You are the winner!" : "Computer is the winner!"

    console.log(`This game is finish. ${winner}`);
}

game();