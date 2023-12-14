let firstScore = 0;
let secondScore = 0;

const noTimes = document.querySelector('#n_times')

const firstPlayerScore = document.querySelector('.firstPlayer');
firstPlayerScore.textContent = firstScore;

const secondPlayerScore = document.querySelector('.secondPlayer');
secondPlayerScore.textContent = secondScore;

//Buttons to Add up Score
function handlePlayerOne() {
    firstScore = firstScore + 1;
    firstPlayerScore.textContent = firstScore;

    //Check for winnings
    if (firstScore == parseInt(noTimes.value)) {
        playerOneBtn.removeEventListener('click', handlePlayerOne)
        playerTwoBtn.removeEventListener('click', handlePlayerTwo)
        firstPlayerScore.classList.add('winner')
        secondPlayerScore.classList.add('looser')

    }
}
function handlePlayerTwo() {
    secondScore = secondScore + 1;
    secondPlayerScore.textContent = secondScore;

    //Check for Winnings
    if (secondScore == parseInt(noTimes.value)) {
        playerTwoBtn.removeEventListener('click', handlePlayerTwo)
        playerOneBtn.removeEventListener('click', handlePlayerOne)
        secondPlayerScore.classList.add('winner')
        firstPlayerScore.classList.add('looser')
    }
}

const playerOneBtn = document.querySelector('.playerOneBtn')
playerOneBtn.addEventListener('click', handlePlayerOne)

const playerTwoBtn = document.querySelector('.playerTwoBtn')
playerTwoBtn.addEventListener('click', handlePlayerTwo)

const resetBtn = document.querySelector('.reset')

function resetGame() {
    firstScore = 0;
    firstPlayerScore.textContent = firstScore;
    firstPlayerScore.classList.remove('winner')
    firstPlayerScore.classList.remove('looser')

    secondScore = 0;
    secondPlayerScore.textContent = secondScore;
    secondPlayerScore.classList.remove('winner')
    secondPlayerScore.classList.remove('looser')

    playerOneBtn.addEventListener('click', handlePlayerOne)
    playerTwoBtn.addEventListener('click', handlePlayerTwo)
    noTimes.value = 5;

}
resetBtn.addEventListener("click", resetGame);


