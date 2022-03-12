let gridWrapper = document.querySelector('.gridWrapper');
let gridSize = gridWrapper.offsetWidth;
let fields = 50;
let fieldAmount = fields * fields;
let savedGrid;

function renderCanvas(fields = 50) {
	gridSize = gridWrapper.offsetWidth
	console.log(gridSize);
	fieldSize = Math.round(gridSize / fields);
	console.log(`fieldSize: ${fieldSize}`);
	createBoxes(fieldAmount);
}

function createBoxes(numOfFieds) {
	for (let i = 0; i < numOfFieds; i++) {
		let div = document.createElement('div');
		div.classList.add('field');
		div.style.height = `${fieldSize}px`;
		div.style.width = `${fieldSize}px`;
		if (this.savedGrid && this.savedGrid[i].classList.contains('visitedColor')) {
			console.log(this.savedGrid[i].classList);
			div.classList.add('visitedColor');
		}
		gridWrapper.appendChild(div);
	}
}

function fieldAddListener(type, addClass, removeClass, func) {
	fieldNodeList = document.querySelectorAll('.field');
	console.log(`${type}, ${addClass}, ${removeClass}`);
	for (let i = 0; i < fieldNodeList.length; i++) {
		fieldNodeList[i].addEventListener(type, () => {
			if (addClass) fieldNodeList[i].classList.add(addClass);
			if (removeClass) fieldNodeList[i].classList.remove(removeClass);
			if (func) func(fieldNodeList[i]);
			this.savedGrid = fieldNodeList;
		});
	}
}

window.addEventListener('resize', function(event) {
	gridWrapper.remove();
	gridWrapper = document.createElement('div');
	gridWrapper.classList.add('gridWrapper');
	document.querySelector('.content').appendChild(gridWrapper);
	renderCanvas();
}, true);

let clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', () => {
	gridWrapper.childNodes.forEach((elem) => {
		elem.classList.remove('visitedColor');
		elem.style.backgroundColor = '#325656';
	});
});

function draw(elem) {
	elem.classList.add('visitedColor');
}

let drawButton = document.querySelector('.drawButton');
drawButton.addEventListener('click', () => fieldAddListener('mouseenter', 'visitedColor', ''));

let eraser = document.querySelector('.eraserButton');
eraser.addEventListener('click', () => fieldAddListener('mouseenter', '', 'visitedColor'));

let funky = document.querySelector('.funkyButton');
funky.addEventListener('click', funkyFunc);
function funkyFunc() { fieldAddListener('mouseenter', '', '', funkyPen) };
function funkyPen(elem) {
	let hexCodeDirty = Math.random().toString(16);
	let hexCode = `#${hexCodeDirty.slice(2, 8)}`;
	console.log(`hex ${hexCode}`)
	elem.style.backgroundColor = hexCode;
}

let formDiv = document.querySelector('.formDiv');
let message = document.createElement('span');
message.textContent = "Enter a value between 10 and 100"
message.classList.add('.subtext');

function checkFieldSizeForm() {
	let canvasSize = document.forms['sizeForm']['canvasSize'].value
	if (canvasSize == "" || canvasSize < 10 || canvasSize > 100) {
		if (!(message in formDiv.childNodes)) formDiv.appendChild(message)
	} else if ([...formDiv.childNodes].includes(message)) formDiv.removeChild(message);
}

let submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', checkFieldSizeForm);

renderCanvas();
