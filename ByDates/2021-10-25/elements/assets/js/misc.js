let hh = document.createElement('h1');

// hh.setAttribute('class', 'test-attr');
hh.classList.add('test');

// hh.setAttribute('style', 'color: red-attr');
hh.style.color = 'red';

hh.setAttribute('data-world-id', 1);

// hh.addEventListener('mouseover', function () {
// 	alert('over the world');
// });

console.log(hh);

let tt = document.createTextNode('Hello World!');

console.log(tt);

hh.appendChild(tt);

// setTimeout(() => {
// 	hh.appendChild(tt);

// 	console.log(hh);
// }, 1000 * 2);

document.body.appendChild(hh);

let buttonMouseoverOn = document.createElement('button');

buttonMouseoverOn.setAttribute('id', 'buttonMouseoverOn');

// buttonMouseoverOn.appendChild(document.createTextNode('Mouseover On'));
buttonMouseoverOn.innerHTML = '<span style="color:red">Mouseover On</span>';

document.body.appendChild(buttonMouseoverOn);

let buttonMouseoverOff = document.createElement('button');

buttonMouseoverOff.setAttribute('id', 'buttonMouseoverOff');

buttonMouseoverOff.innerText = '<span style="color:red">Mouseover Off</span>';

document.body.appendChild(buttonMouseoverOff);

// setTimeout(() => {
// 	let b = document.querySelector('#buttonMouseoverOff');

// 	console.log(b, b.parentNode);

// 	b.parentNode.removeChild(b);

// 	document.querySelector('#buttonMouseoverOn').remove();
// }, 2 * 1000);
// document.querySelector('#buttonMouseoverOff').remove();

// setTimeout(() => {
// 	// document.body.innerHTML += `<form action="/action_page.php">
// 	document.body.innerHTML = `<form action="/action_page.php">
// 	  <label for="fname">First name:</label><br>
// 	  <input type="text" id="fname" name="fname" value="John"><br>
// 	  <label for="lname">Last name:</label><br>
// 	  <input type="text" id="lname" name="lname" value="Doe"><br><br>
// 	  <input type="submit" value="Submit">
// 	</form>`;
// }, 1000 * 2);
// 

