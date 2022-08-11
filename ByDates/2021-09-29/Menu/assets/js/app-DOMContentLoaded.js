document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.navbar__toggle-btn').addEventListener('click', () => {
		document.querySelector('.navbar__menu-items').classList.toggle('active');
	});
});

const testVariable = 5;