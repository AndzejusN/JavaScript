document.getElementById('changer-pg').style.backgroundColor = 'lightgreen';

let newpara = document.createElement('p');
let newtx = document.createTextNode('This is new paragraph.');
newpara.appendChild(newtx);

let bodyp = document.getElementById('changer-pg');
bodyp.appendChild(newpara);

newpara.setAttribute('id','p-1');

function pbgcolor() {
    document.getElementById('p-1').style.backgroundColor = 'lightblue';
}
function ptxcolor() {
    document.getElementById('p-1').style.color = 'blue';
}

function pstyle() {
    document.getElementById('p-1').style.fontStyle = 'Sans serif';
    document.getElementById('p-1').style.fontSize = '30px';
}

pbgcolor();
ptxcolor();
pstyle();


// console.assert(document.body.children.length === 1);
// console.assert('p' in document.body.children);
