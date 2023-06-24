fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (response.ok){
            return response.json()
        }
        throw new Error('Failed to fetch ');
    })
    .then(console.log)
    .catch(console.error)


async function getUsers(){
   try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data); 
    throw new Error('Failed');
   }catch(error){
    console.log(error.massage);
   }
   

   return data;
}
getUsers().then(console.log);
console.log(1);

//const getUsers =  async() => {}