//$0
const ancher = $0; // получили ссылку на обьект 
console.log(ancher);
ancher.innerText // Позволет прочитать что лежит в обьекте  
ancher.innerText = 'Rest API' // можем таким образом изменить названия 

const p = $0;
console.log(p);
p.innerText;// Выводит сам текст который лежит в параграфе 
p.innerHTML;// Выводит сам текст который лежит в параграфе  + теги самого текста 
p.innerHTML = 'Hello <b>World</b>'; // можем запрограммировать как выглядит текст 


const a = $0;
a.getAttribute('href'); // Получаем значениия данного атрибута 
a.getAttribute('target'); // Отримуємо null  у випадку якщо тут не має такого тега 
a.setAttribute('target','_blanck') // можем переназначити атрибути
a.herf; // можем вивести на екран значення силки 
a.herf = '/404'; // первезначаємо значення силку 
a.className; // отримуємо значення класу в якому знаходеться тег 'a'
label.htmlFor;
a.style; // налаштування стилю посилання 
a.style.color = 'red'; // наша ссылка покрасилась в красный цвет 
a.style.display = 'none'; // делаем нашу ссылку не видемой 
a.style.display = 'block'; // делаем нашу ссылку отельныйм блоком   
a.style.display = 'inline';
a.dataset; // отримуємо повну інфу про дата атребут 
a.dataset.id; // Получим id даной дати
a.dataset.id = 6; // Препишисуем значення данного атрибута ) 


