let body = document.getElementsByTagName("body")[0];
let btn = document.createElement('button');
body.appendChild(btn);

btn.style.width = '120px';
btn.style.height = '40px';
btn.textContent = 'Push the button';

let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");

function loadPosts(posts) {

        let row = document.createElement("tr");
        for (let j = 0; j < Object.keys(posts[0]).length; j++) {
            let valObj = Object.keys(posts[0]);
            let cell = document.createElement("td");
            let cellText = document.createTextNode(`${valObj[j]}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);

        for (let i = 0; i < posts.length; i++) {
            let row = document.createElement("tr");
            for (let j = 0; j < Object.keys(posts[i]).length; j++) {
                let valObj2 = Object.values(posts[i]);
                let cell = document.createElement("td");
                let cellText = document.createTextNode(`${valObj2[j]}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }
}

tbl.appendChild(tblBody);
body.appendChild(tbl);
tbl.setAttribute("border", "2");

function getPosts() {

    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => loadPosts(data));
}


btn.addEventListener('click',function (){
    tbl.style.display = 'none';
    setTimeout (() =>
        {
            getPosts().then(data => loadPosts(data));
            tbl.style.display = 'flex';
        }, 2000
    )
});
