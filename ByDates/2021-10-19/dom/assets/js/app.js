// document.body.children[1].children[2].children[0].style.backgroundColor = 'red';
// document.body.children[1].children[2].children[0].style.color = 'white';
// document.body.children[1].children[2].children[0].style.display = 'inline-block';
// document.body.children[1].children[2].children[0].style.padding = '10px';

console.log(document.body?.children[1]?.children[2]?.children[0]?.textContent);

const STYLES = 'background-color: red; color: white; display: inline-block; padding: 10px;';

// setTimeout(() => {
// 	document.body.children[1].children[2].children[0].style = STYLES;
// }, 1000 * 5);

function doInterval(element) {
	return setInterval(() => {
		if (element.style.backgroundColor == 'red') {
			element.style = '';
		} else {
			element.style = STYLES;
		}
	}, 1000);
}

let intervalId = null;

const ELEMENT = document.body.children[1].children[2].children[0];

const buttonStart = document.getElementById('start');
const buttonStop = document.getElementById('stop');
const ulElements = document.getElementsByTagName('ul');
 
buttonStart.addEventListener('click', function() {
	if (intervalId == null) {
		intervalId = doInterval(ELEMENT);
	}

	// ulElements[0].className = 'list-height';
	// ulElements[0].className = ulElements[0].className + ' list-height';
	ulElements[0].classList.add('list-height');

	buttonStart.disabled = true;
	buttonStop.disabled = false;
});

buttonStop.addEventListener('click', function() {
	clearInterval(intervalId);

	intervalId = null;

	// ulElements[0].className = '';
	// ulElements[0].className = ulElements[0].className.replace('list-height', '').trim();
	ulElements[0].classList.remove('list-height');

	buttonStart.disabled = false;
	buttonStop.disabled = true;
});