let headerMain = document.createElement('header');
document.body.appendChild(headerMain);

let divMainNav = document.createElement('div') ;
divMainNav.setAttribute('class','nav-toggle');
divMainNav.setAttribute('id','navToggle');
headerMain.appendChild(divMainNav);

let imgOne = document.createElement('img');
imgOne.setAttribute('id','hamburger');
imgOne.setAttribute('class','navIcon');
imgOne.setAttribute('src','img/new.svg');
imgOne.setAttribute('alt', 'Meniu');
divMainNav.appendChild(imgOne);

let imgTwo = document.createElement('img');
imgTwo.setAttribute('class','navIcon hidden');
imgTwo.setAttribute('src','img/close.svg');
imgTwo.setAttribute('alt','Close Meniu');
divMainNav.appendChild(imgTwo);

let mainMain = document.createElement('main');
document.body.appendChild(mainMain);

let sectionOne = document.createElement('section');
mainMain.appendChild(sectionOne);

sectionOne.style.backgroundImage = "url('img/3.jpg')";
let images = ["url('img/1.jpg')","url('img/2.jpg')","url('img/3.jpg')"];

let j = 1;
setInterval(function(){
    if(j<3){
        sectionOne.style.backgroundImage = `url('img/${j}.jpg')`;
        j++;
    } else {
        sectionOne.style.backgroundImage = `url('img/${j}.jpg')`
       j = 1;
    }
}, 1000*2
);

let sectionTwo = document.createElement('section');
sectionTwo.setAttribute('id','section');
mainMain.appendChild(sectionTwo);


let a;
let time;
setInterval(() => {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('section').innerHTML = time;
}, 1000);



let sectionThree = document.createElement('section');
mainMain.appendChild(sectionThree);

let formOne = document.createElement('form');
sectionThree.appendChild(formOne);

let labelOne = document.createElement('label');
formOne.appendChild(labelOne);
labelOne.innerText = 'First Name:'

let inputOne = document.createElement('input');
formOne.appendChild(inputOne)

let labelTwo = document.createElement('label');
formOne.appendChild(labelTwo);
labelTwo.innerText = 'Second Name:'

let inputTwo = document.createElement('input');
formOne.appendChild(inputTwo);

let buttonOne = document.createElement('button');
buttonOne.setAttribute('type','button');
buttonOne.innerText = 'Push the button';
formOne.appendChild(buttonOne);

buttonOne.addEventListener('click', (event) => {
    event.preventDefault();
    checkData();
});

function checkData(){
    if (inputOne.value.toString() != false && inputTwo.value.toString() != false){
       let hTwo = document.createElement('h2');
        sectionThree.appendChild(hTwo);
        hTwo.innerText = 'Forma užpildyta sėkmingai';
    } else {
        let hTwo = document.createElement('h2');
        sectionThree.appendChild(hTwo);
        hTwo.innerText = 'Forma užpildyta nesėkmingai';
    }
}


let footerOnly = document.createElement('footer');
document.body.appendChild(footerOnly);

let navMain = document.createElement('nav');
headerMain.appendChild(navMain);

let ulOnly = document.createElement('ul');
ulOnly.style.listStyle = 'none';
navMain.appendChild(ulOnly);

let listLink = ['index.html','about.html','services.html','contact.html'];

let i=0;
while (i<4){
    liAll = document.createElement('li');
    ulOnly.appendChild(liAll);
    aAll = document.createElement('a');
    aAll.innerText = `${listLink[i]}`;
    aAll.setAttribute('href',listLink[i]);
    liAll.appendChild(aAll);
    i++;
}


const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const hamburger = document.querySelector('#hamburger');

navToggle.addEventListener("click", () => {
    nav.classList.toggle('open');
    navIcon.forEach(icon => {
        icon.classList.toggle('hidden');
    })
})

window.addEventListener("resize", () =>{
    if (document.body.clientWidth > 786) {
        return;
    }
    nav.classList.remove('open');
    navIcon.forEach(icon => {
        icon.classList.add('hidden');

    })
    hamburger.classList.remove('hidden');
})



