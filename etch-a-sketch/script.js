let gridWrapper = document.querySelector('.gridWrapper');
let gridSize = gridWrapper.offsetWidth;
let fields = 50;
let fieldAmount = fields * fields;

function renderCanvas(fields=50) {
	gridSize = gridWrapper.offsetWidth
	console.log(gridSize);
	rest = (gridSize / fields) % fields; 
	fieldSize = (Math.round(gridSize-rest)) / fields; 
	console.log(`fieldSize: ${fieldSize}`);
	for (let i = 0; i < fieldAmount; i++) {
		let div = document.createElement('div');
		div.classList.add('field', 'grow');
		div.addEventListener('mouseover', () => {
			div.classList.add('visitedColor');
		})
		div.style.height = `${fieldSize}px`;
		div.style.width = `${fieldSize}px`;
		gridWrapper.appendChild(div);
	}
}
window.addEventListener('resize', function(event) {
	gridWrapper.remove();
	gridWrapper = document.createElement('div');
	gridWrapper.classList.add('gridWrapper');
	document.querySelector('.content').appendChild(gridWrapper);
	renderCanvas(fields);
}, true);

let clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', () => {
	gridWrapper.childNodes.forEach((elem) => elem.classList.remove('visitedColor'));
});

renderCanvas();
