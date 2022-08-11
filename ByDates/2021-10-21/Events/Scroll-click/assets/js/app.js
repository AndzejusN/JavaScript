function handleScroll(event) {
	console.log('scroll', event);
}

// let handleScroll = function (event) {
// 	console.log('scroll', event);
// }

// let handleScroll = (event) => {
// 	console.log('scroll', event);
// }

document.addEventListener('DOMContentLoaded', () => {
    // document.body.addEventListener('click', () => alert('Ačiū, kad paspaudėte mygtuką!'));

    let IS_SCROLLABLE = false;

    let x = 0;

    document.getElementById('add').addEventListener('click', ()  => {
    	console.log('Ačiū, kad paspaudėte mygtuką!');

    	x++;

    	if (IS_SCROLLABLE == false) {
    		IS_SCROLLABLE = true;
    		
    		(function (x) {
				document.querySelector('#main').addEventListener('scroll', handleScroll);
			} (x)); 	
	    }
    });

    document.querySelector('#remove').addEventListener('click', ()  => {
    	console.log('Viso gero');

    	document.querySelector('#main').removeEventListener('scroll', handleScroll);
    });
});