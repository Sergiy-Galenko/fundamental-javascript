fetch('https://jsonplaceholder.typicode.com/posts/1',{
    //method: 'POST'
    method: 'PUT',
    body:JSON.stringify({id: 2, title: 'My title'}),
    headers:{
        'Content-type': 'aplication/json'
    }
})
    .then(response => {
        if (response.ok){
            return response.json()
        }
        throw new Error('Failed to fetch ');
    })
    .then(console.log)
    .catch(console.error)

// CRUDE => create, read, update, delete
// HTTP => POST, GET, PUT | PATCH, DELETE