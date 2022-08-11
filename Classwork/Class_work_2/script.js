// let userInfoOutput = document.getElementById("main");

user = 'Vardenis Pavardenis';
let words = user.split(' ');
let name = words[0];
let surname = words[1];
document.getElementById("main").innerHTML = `<p>Vartotojo vardas:</p><h2>` + name +`</h2><p>Vartotojo pavarde:</p><h2>`+ surname +`</h2>`;