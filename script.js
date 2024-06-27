// Debug logging function
function debug(message) {
    console.log(`Debug: ${message}`);
}

let currentChoiceIndex = 0;
let stats = {
    industry: 50,
    innovation: 50,
    environment: 50,
    population: 50,
    treasury: 50
};

function updateStats() {
    debug("Updating stats");
    for (const [key, value] of Object.entries(stats)) {
        const fillElement = document.querySelector(`.stat[data-stat="${key}"] .fill`);
        const valueElement = document.querySelector(`.stat[data-stat="${key}"] .value`);
        if (fillElement && valueElement) {
            fillElement.style.width = `${value}%`;
            valueElement.textContent = `${value}%`;
        } else {
            debug(`Stat element not found for ${key}`);
        }
    }
}

function showChoice() {
    debug("Showing choice");
    const choice = ironbridgeChoices[currentChoiceIndex];
    const yearElement = document.getElementById('year');
    const choiceTextElement = document.getElementById('choice-text');
    const consequenceTextElement = document.getElementById('consequence-text');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const continueButton = document.getElementById('continue-button');

    if (yearElement) yearElement.textContent = choice.year;
    if (choiceTextElement) choiceTextElement.textContent = choice.text;
    if (consequenceTextElement) consequenceTextElement.textContent = '';
    if (yesButton) yesButton.style.display = 'inline-block';
    if (noButton) noButton.style.display = 'inline-block';
    if (continueButton) continueButton.style.display = 'none';
}

function makeChoice(decision) {
    debug(`Making choice: ${decision}`);
    const choice = ironbridgeChoices[currentChoiceIndex];
    const outcome = choice[decision];
    
    for (const [stat, change] of Object.entries(outcome.effects)) {
        stats[stat] = Math.max(0, Math.min(100, stats[stat] + change));
    }
    
    updateStats();
    showConsequence(outcome.consequence);
}

function showConsequence(consequence) {
    debug("Showing consequence");
    const choiceTextElement = document.getElementById('choice-text');
    const consequenceTextElement = document.getElementById('consequence-text');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const continueButton = document.getElementById('continue-button');

    if (choiceTextElement) choiceTextElement.style.display = 'none';
    if (consequenceTextElement) {
        consequenceTextElement.textContent = consequence;
        consequenceTextElement.style.display = 'block';
    }
    if (yesButton) yesButton.style.display = 'none';
    if (noButton) noButton.style.display = 'none';
    if (continueButton) continueButton.style.display = 'inline-block';
}

function nextChoice() {
    debug("Moving to next choice");
    currentChoiceIndex++;
    if (currentChoiceIndex < ironbridgeChoices.length) {
        const choiceTextElement = document.getElementById('choice-text');
        const consequenceTextElement = document.getElementById('consequence-text');
        if (choiceTextElement) choiceTextElement.style.display = 'block';
        if (consequenceTextElement) consequenceTextElement.style.display = 'none';
        showChoice();
    } else {
        endGame();
    }
}

function endGame() {
    debug("Ending game");
    const cardContainer = document.getElementById('card-container');
    if (cardContainer) {
        cardContainer.innerHTML = `
            <h2>Game Over</h2>
            <p>Your journey through the Industrial Revolution in Ironbridge has come to an end.</p>
            <button onclick="location.reload()">Play Again</button>
        `;
    }
}

function showWelcomeScreen() {
    debug("Showing welcome screen");
    const welcomeScreen = document.getElementById('welcome-screen');
    const gameScreen = document.getElementById('game-screen');
    if (welcomeScreen) welcomeScreen.style.display = 'block';
    if (gameScreen) gameScreen.style.display = 'none';
}

function startGame() {
    debug("Starting game");
    const welcomeScreen = document.getElementById('welcome-screen');
    const gameScreen = document.getElementById('game-screen');
    if (welcomeScreen) welcomeScreen.style.display = 'none';
    if (gameScreen) gameScreen.style.display = 'block';
    updateStats();
    showChoice();
}

function initGame() {
    debug("Initializing game");
    showWelcomeScreen();
    const startButton = document.getElementById('start-game');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const continueButton = document.getElementById('continue-button');

    if (startButton) {
        startButton.addEventListener('click', startGame);
    } else {
        debug("Start button not found");
    }

    if (yesButton) {
        yesButton.addEventListener('click', () => makeChoice('yes'));
    } else {
        debug("Yes button not found");
    }

    if (noButton) {
        noButton.addEventListener('click', () => makeChoice('no'));
    } else {
        debug("No button not found");
    }

    if (continueButton) {
        continueButton.addEventListener('click', nextChoice);
    } else {
        debug("Continue button not found");
    }
}

// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initGame);