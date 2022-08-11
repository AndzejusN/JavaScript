// https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// console.log(((a,b) => a + b)(5,6));

// (function (x, y) {
// 	console.log(x, y);

// 	return x + y;
// })(5, 10);

// let test = (function (x, y) {
// 	console.log('test', x, y);

// 	return x + y;
// })(5, 10);

// console.log(typeof test);

// let test2 = function (x, y) {
// 	console.log('test2', x, y);

// 	return x + y;
// };

// console.log(typeof test2);

// // test2(5, 10);

// let dt = (new Date);

// console.log(dt.toString(), (new Date).toString());

// setTimeout(() => {console.log("this is the 1 message")}, 5000);
// setTimeout(() => {console.log("this is the 2 message"); test2(5, 10);}, 1000);
// setTimeout(() => {console.log("this is the 3 message")}, 3000);

// // =================================== //
// // Not working, just example
// // 
// // 
// // (function ($) {
// //   $( "#button-container button" ).on( "click", function( event ) {
// //   hiddenBox.show();
// // });
// // })(jQuery);

// // (function ($) {
// // 	$('div.foo, div.bar, div.bar a');

// // })(MooTools);
// // =================================== //
// 

function helpSetTimeout(i) {
	setTimeout(_ => console.log(`helpSetTimeout: We’re at ${i}, after ${1000 * i}`), 1000 * i);
}


for (var i = 0; i < 7; i++) {
	console.log('during', i);

	setTimeout(_ => console.log(`Direct: We’re at ${i}, after ${1000 * i}`), 1000 * i);

	(function (i) {
		setTimeout(_ => console.log(`IIFE: We’re at ${i}, after ${1000 * i}`), 1000 * i);
	})(i);

	helpSetTimeout(i);
}

console.log('after', i);

// ES6
for (let i = 0; i < 3; i++) {
	setTimeout(_ => console.log(`We’re at ${i}`), 100);
}




