async function getPostsBerlin(){
    const response = await fetch('https://jsonplaceholder.typicode.com/berlin/posts');
    const data = await response.json ();
    return data; // [post1]
}

async function getPostsNewyork(){
    const response = await fetch('https://jsonplaceholder.typicode.com/newyork/posts');
    const data = await response.json ();
    return data; // [post1]
}

async function getPostsDefault(){
    const response = await fetch('https://jsonplaceholder.typicode.com/default/posts');
    const data = await response.json ();
    return data; // [post1]
}

Promise.race([getPostsBerlin(),getPostsNewyork(),getPostsDefault()]).then()


// async function getUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json ();
//     return data; // [user1]
// }

// async function getComments(){
//     const response = await fetch ('https://jsonplaceholder.typicode.com/comments!')
//     const data = await response.json ();
//     return data;// [comments1]
// }

// Promise.all([getPosts(),getUsers(),getComments()]).then(
//     values => {
//         console.log(value) // [[post1],[user1],[comments1]]
//         const [post,user,comments] = values;
//         console.log(post,user,comments);
//     }
// ).catch(console.error)
