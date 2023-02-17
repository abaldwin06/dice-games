// Setting up main event listener
const gameSetupButton = document.getElementById("gamesetupbutton");
gameSetupButton.addEventListener('click',createGame);

// Setting up global variables
const gameSetupSection = document.getElementById("gamesetup")
const playerCountInput = document.getElementById("playercount");
const diceCountInput = document.getElementById("dicecount");

const diceSection = document.getElementById("dice")
const gameboardSection = document.getElementById("gameboard");
const scoreboardSection = document.getElementById("scoreboard");

// Class definitions


// When submission button is clicked, this Event Handler function creates a 
//   game board
function createGame() {
    // Validate inputs
    gameSetupSection.style.backgroundColor = 'blue';
    let playerCount = playerCountInput.value;
    let diceCount = diceCountInput.value;
    if (diceCount && playerCount) {
        diceSection.innerHTML = "there are " + diceCount + " dice";
        scoreboardSection.innerHTML = "there are " + playerCount + " players";
        gameSetupSection.style.display = "none";
    } else {
        window.alert("You need to select 1-6 players and 1-6 dice to play.");

    }

    
    // Hide setup section


    // Create players
    // Create dice
}