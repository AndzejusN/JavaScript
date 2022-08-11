let images = document.querySelectorAll('.gallery > .gallery-item');

let index = 0;

let time = 5000;
let step = 1000;

setInterval(() => {
	let activeImages = document.querySelectorAll('.gallery > .gallery-item.active');

	for (let img of activeImages) {
		for (let t = step; time > t; t += step) {
			setTimeout(() => {
				img.style.opacity = time / t * 0.2;

				if (time - step == t) {
					img.classList.remove('active');

					img.style.opacity = 1;
				}
			}, t);
		}
	}

	setTimeout(() => {
		images[index].classList.add('active');
	}, 4500);

	index++;

	if (index == images.length) {
		index = 0;
	}
}, time);