console.log("this works");

const card = document.querySelector('div.content').firstElementChild;
const inserted = document.createElement('div');
inserted.classList.toggle('myClass');
inserted.textContent = "here goes some text that was added with javascript";
card.appendChild(inserted);
let myContent = document.querySelector('div.myClass');
myContent.style.cssText = 'margin: 10px; background-color:blue;text-align:center;padding: 4px;font-size: 10px;';

const newP = document.createElement('p');
newP.textContent = "hi i'm a red paragraph";
newP.classList.toggle("newP");
const content = document.querySelector('.content');
content.appendChild(newP);
const newPelem = document.querySelector('div.newP');
newP.style.cssText = 'margin: 10px;color:red;padding:4px;';

const newHeader = document.createElement('h3');
newHeader.textContent = "This is a header";
newHeader.classList.toggle("header3");
const sidebar = document.querySelector('.sidebar');
sidebar.firstElementChild.appendChild(newHeader);

const newDiv = document.createElement('div');
const newh1 = document.createElement('h1');
const newp1 = document.createElement('p');
newh1.textContent = "the header number one";
newp1.textContent = "another paragraph inside of a div";
newDiv.appendChild(newh1);
newDiv.appendChild(newp1);
content.appendChild(newDiv);

const btn = document.querySelector('#btn');
let toggled;
btn.addEventListener('click', (e) => {
	const parent = btn.parentElement;
	if (toggled) {
		toggled = false;
		parent.style.cssText = "";
		console.log(e);
	} else {
		toggled = true;
		parent.style.cssText = 'text-align:center;background-color:orange;'
	}
});

btn.addEventListener('click', function(e) {
	e.target.style.b
	console.log(e);
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', changeStyle);
let btn2toggle;

function changeStyle(event) {
	if (btn2toggle) {
		btn2toggle = false;
		btn2.parentElement.style.cssText = "";
		event.target.style.background = "";
	} else {
		btn2toggle = true;
		btn2.parentElement.style.cssText = "font-size: 18px;";
		event.target.style.background = 'blue';
	}
}

let hello = ["hello", "there"];
// this is a callback function
hello.forEach(yay => console.log(yay));

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

function playerDecision(options, countTries = 0) {
	let playerPick = prompt("enter one of Rock, Paper or Scissors: ");
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
			}
	} else if (playerPick == "Rock") {
		if (computerPick === "Scissors") {
			return true;
		}
	} else if (playerPick == "Paper") {
		if (computerPick === "Rock") {
			return true;
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
	let rounds = 3;
	if (rounds%2 === 0) {
		console.log("rounds must be unequal");
		return null;
	}
	for(let i=0; i < rounds; i++) {
		let computerPick = computerDecision(options);
		let playerPick = playerDecision(options, 0);
		let outcome = decide(playerPick, computerPick);
		pickedMessage = `Your pick: ${playerPick}\nComputer pick: ${computerPick}`;
		if (outcome == null) {
			console.log("You tied, try again");
			i--;
			continue;
		}
		else if (outcome) {
			playerScore++;
		} 
		roundOutcomeMessage = `score: ${playerScore}`;
		console.log(`${pickedMessage}\n${roundOutcomeMessage}`);
	}
	let result = "lost";
	if (playerScore >= rounds/2) {
		result = "won";
	} 
	let outcomeMessage = `You ${result} with a score of ${playerScore} out of ${rounds}`;
	console.log(outcomeMessage);
}

game();
