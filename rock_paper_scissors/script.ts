console.log("this works");

/**
 * 1. Step: Understanding the problem
 * Play a single round of Rock paper scissors against the computer.
 * 2. Step: Plan
 * Console program
 * Input: String, one of Rock, Paper, scissors
 * Output: String you chose {}, computer chose {} Player won, Player lost
 * Subproblems:
 * userinput
 * 	prompt("input rock, paper or scissors: ");
 * 	check Input
 * 		save in variable
 * 	throw error
 * computer decision
 * 	randomly choose one of rock paper or scissors
 * 	save in variable
 * comparing decisions
 * 	scissors > paper
 * 	paper > rock
 * 	rock > paper
 * output result
 */

let playerPick;
let playerScore = 0;
let rounds = 3;
let choiceButton = document.querySelectorAll(".choiceButton");

function computerDecision(options) {
	let computerPick = options[Math.floor(Math.random() * options.length) % options.length];
	return computerPick;
}

function capitalizeFirstLetter(text) {
	let firstLetter = text[0].toUpperCase();
	return firstLetter + text.slice(1);
}

function subStringToLowerCase(text) {
	return text[0] + text.slice(1).toLowerCase();
}

function enablePlay() {
	choiceButton.forEach(button => {
		button.addEventListener('click', onClick)
		toggleGrow;
	});
}

function onClick(e) {
	if (e.target.innerText.includes("Paper")) playerPick = "paper";
	if (e.target.innerText.includes("Scissors")) playerPick = "scissors";
	if (e.target.innerText.includes("Rock")) playerPick = "rock";
	playerPick = capitalizeFirstLetter(playerPick);
	playerPick = subStringToLowerCase(playerPick);
	let options = ["Rock", "Paper", "Scissors"];
	let computerPick = computerDecision(options);
	let outcome = decide(playerPick, computerPick);
	let playerPickedMessage = `Your pick: ${playerPick}`
	let computerPickedMessage = `Computer pick: ${computerPick}`;
	let playerPickedMessageElem = document.createElement('div');
	let computerPickedMessageElem = document.createElement('div');
	playerPickedMessageElem.textContent = playerPickedMessage;
	computerPickedMessageElem.textContent = computerPickedMessage;
	document.querySelector('.content').appendChild(playerPickedMessageElem);
	document.querySelector('.content').appendChild(computerPickedMessageElem);
	if (outcome == false) {
		playerScore--;
	} else if (outcome == null) {
		console.log("You tied, try again");
	}
	else if (outcome) {
		playerScore++;
	}
	let roundOutcomeMessage = `score: ${playerScore}`;
	console.log(`${playerPickedMessage}\n${computerPickedMessage}\n${roundOutcomeMessage}`);
	if (rounds % 2 === 0) {
		console.error("number of rounds must be unequal");
		return null;
	}
	checkWin(e);
}

function checkWin(e) {
	let result = "lost";
	if (Math.abs(playerScore) >= rounds / 2) {
		(playerScore > 0) ? result = "won" : result = "lost";
		choiceButton.forEach(button => {
			button.removeEventListener('click', onClick);
		});
		let outcomeMessage = `You ${result} with a score of ${playerScore} out of ${rounds}`;
		let winMessageElem = document.createElement('div');
		let gameStatsElem = document.createElement('div');
		winMessageElem.textContent = `You ${result}`;
		gameStatsElem.textContent = `with a score of ${playerScore} out of ${rounds}`;
		(result == "won") ? winMessageElem.classList.add('win') : winMessageElem.classList.add('lose');
		document.querySelector('.content').appendChild(winMessageElem);
		document.querySelector('.content').appendChild(gameStatsElem);
		/* stop growing elements on hover */
		toggleGrow(e);
		let replayButtonElem = document.createElement('div');
		replayButtonElem.textContent = "菱"
		replayButtonElem.addEventListener('click', enablePlay);
		document.querySelector('.content').appendChild(replayButtonElem);
		console.log(outcomeMessage);
		return outcomeMessage;
	}
}
function getAllSiblings(elem, filter) {
	var sibs = [];
	elem = elem.parentNode.firstChild;
	do {
		if (elem.nodeType === 3) continue; // text node
		if (!filter || filter(elem)) sibs.push(elem);
	} while (elem = elem.nextSibling)
	return sibs;
}

// Example filter only counts divs and spans but could be made more complex
function myFilter(elem) {
	switch (elem.nodeName.toUpperCase()) {
		case 'DIV':
			return true;
		case 'SPAN':
			return true;
		case 'BUTTON':
			return true;
		default:
			return false;
	}
}

function toggleGrow(e) {
	let sibling = e.target;
	let siblings = getAllSiblings(e.target, myFilter);
	siblings.forEach(elem => elem.classList.toggle('grow'));
}

function playerDecision(options, countTries = 0) {

	playerPick = capitalizeFirstLetter(playerPick);
	playerPick = subStringToLowerCase(playerPick);
	if (options.includes(playerPick)) {
		return playerPick;
	} else if (countTries < 3) {
		console.log("your input matches none of the options Rock, Paper or Scissors.\nTry again.");
		countTries++;
		playerDecision(options, countTries);
	} else {
		console.log("You took too many tries.\nGame over");
		return null;
	}
}

function decide(playerPick, computerPick) {
	if (playerPick == null) {
		return null;
	}
	if (playerPick === computerPick) {
		return null;
	} else if (playerPick == "Scissors") {
		if (computerPick == "Paper") {
			return true;
		} else {
			return false;
		}
	} else if (playerPick == "Rock") {
		if (computerPick === "Scissors") {
			return true;
		} else {
			return false;
		}
	} else if (playerPick == "Paper") {
		if (computerPick === "Rock") {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function game() {
	let options = ["Rock", "Paper", "Scissors"];
	let pickedMessage = "";
	let roundOutcomeMessage = "";
	let playerScore = 0;
}

enablePlay();

