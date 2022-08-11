let names = ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 'Ava', 'Elijah', 'Charlotte'];

console.log(names);

const usersTitleElement = document.createElement('h1');

usersTitleElement.innerText = 'Users:';

document.body.prepend(usersTitleElement);

function getLabel(title, forWhat) {
	let label = document.createElement('label');

	label.classList.add('ml-3');

	label.innerText = title;

	label.setAttribute('for', forWhat);

	return label;
}

function getInputRadio(name, value, id = null) {
	let input = document.createElement('input');

	// input.setAttribute('type', 'radio');
	// input.setAttribute('name', 'names');

	input.type = 'radio';
	input.name = name;
	input.value = value;

	if (id) {
		input.id = id;
	}

	return input;
}

function appendNamesToList(listElement, names) {
	for (let name of names) {
		// ulElement.innerHTML =  ulElement.innerHTML + `<li>${name}</li>`;
		// ulElement.innerHTML += `<li>${name}</li>`;
		
		let li = document.createElement('li');

		let input = document.createTextNode

		let text = document.createTextNode(name);

		let r = (Math.random() + 1).toString(36).substring(7);

		li.appendChild(getInputRadio('names', name, r));
		li.appendChild(getLabel(name, r));

		ulElement.appendChild(li);
	}

	return ulElement;
}

const ulElement = document.createElement('ul');

ulElement.style['list-style-type'] = 'none';
ulElement.style['padding-inline-start'] = 0;

appendNamesToList(ulElement, names);

usersTitleElement.after(ulElement);

function getButtonWithClick(title, callbackFunction) {
	let button = document.createElement('button');

	button.innerText = title;

	button.addEventListener('click', callbackFunction);

	return button;
}

ulElement.after(getButtonWithClick('Say the name', function() {
	console.log(1);
	let input = document.querySelector('input[name="names"]:checked');

	if (input) {
		alert(input.value);
	}
}));

document.querySelector('button').after(getButtonWithClick('Shuffle names (recreate)', function() {
	console.log(2);
	names = names.sort(() => .5 - Math.random());

	ulElement.innerHTML = '';

	appendNamesToList(ulElement, names);
}));

document.querySelector('button:last-of-type').after(getButtonWithClick('Shuffle names (original)', function() {
	console.log(3);
	for (let i = ulElement.children.length; i >= 0; i--) {
		let r = Math.random() * i | 0;

		// console.log(i, r, ulElement.children[r]);

	    ulElement.appendChild(ulElement.children[r]);
	}
}));