console.log("this works");

function wrapIt() {
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
}

let hello = ["hello", "there"];
// this is a callback function
hello.forEach(yay => console.log(yay));

