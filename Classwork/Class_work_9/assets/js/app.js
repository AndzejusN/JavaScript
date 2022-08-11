//Dar naudojami framework'ai: JQuery, Axios.


// Antras budas fetch

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click', function(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => console.log(data));
    });
});


// Pirmas budas XMLHttp

// function loadPosts() {
//     let request = new XMLHttpRequest();
//
//     request.addEventListener('load', function () {
//         console.log(this);
//         console.log(this.responseText);
//         let data = JSON.parse(this.responseText);
//         console.log(data);
//     })
//
//     request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//     request.send();
// }
// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelector('button').addEventListener('click', loadPosts);
// })