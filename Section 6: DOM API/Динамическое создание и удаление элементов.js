const list = document.getElementById('todos');
document.querySelector('button').addEventListener('click', handleClick)

function handleClick(){
    const newTodo = this.previousElementSibling.value.trim(); 
    //console.log(newTodo);
    if(newTodo){
        // add todo
        createTodo(newTodo)
        this.previousElementSibling.value = '';
    }else{
        alert('input field is empty');
    }
}

function createTodo(text){
    const li = document.createElement('li');
    li.innerText = text;
    li.className = 'todo-item';
    li.addEventListener('click',removeTodo);

    list.append(li)
}

function removeTodo(){
    this.removeEventListener('click',removeTodo);
    this.remove();
}