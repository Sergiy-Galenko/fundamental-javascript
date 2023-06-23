// AJAX
const url = 'https://jsonplaceholder.typicode.com/posts/1';

const request = new XMLHttpRequest();

request.open('GET',url)

request.responseType = 'json'; // xml,text

request.send()
request.onload = function(){
    const data = request.response;
    console.log(data)
}