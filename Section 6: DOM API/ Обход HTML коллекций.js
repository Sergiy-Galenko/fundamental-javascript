const list1 = document.querySelectorAll('li')
list1; // ну будет являтья масивом
list1.forEach(el => el.className = 'li') // делаем кадому елементу li класс li
list1.forEach(el => el.style = 'none')
list1.forEach(el => el.style.display = 'none') // все елементы списка исчезли  
list1.forEach(el => el.style.display = 'block') // все елеенты теперь имеют блок

const list2 = document.getElementsByTagName('li') // Получили html колекцию
for (let el of list2){
    el.style.textTransform = 'uppercase'
}