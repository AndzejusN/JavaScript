const mainContent = document.getElementById('main-content');

console.log('getElementById', mainContent);

const elementsByName_username = document.getElementsByName('username');

console.log('getElementByName', elementsByName_username);

const elementsByName_comment = document.getElementsByName('comment');

const testTextarea = document.getElementById('test-textarea');

console.log('getElementByName', elementsByName_comment);
console.log('getElementById', testTextarea);

testTextarea.style.border = '5px dashed red';
// setTimeout(() => elementsByName_comment[0].style.border = '5px dashed blue', 1000);
setTimeout(() => {
	if (elementsByName_comment[0]) {
		elementsByName_comment[0].style.border = '5px dashed blue'
	}
}, 1000);

console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByClassName('fakeimg'));

for (let img of document.getElementsByClassName('fakeimg')) {
	if (img.parentNode.parentNode.className == 'leftcolumn') {
		img.style.backgroundColor = 'green';
	} else {
		img.style.backgroundColor = 'red';
	}
}

// setTimeout(() => {
// 	[...document.getElementsByClassName('fakeimg')].forEach(e => e.style.backgroundColor = 'orange');
// }, 1000 * 2)

setTimeout(() => {
	let leftleftcolumnElements = document.getElementsByClassName('leftcolumn');

	for (let img of leftleftcolumnElements[0].getElementsByClassName('fakeimg')) {
		img.style.backgroundColor = 'purple';
	}
}, 1000 * 2);