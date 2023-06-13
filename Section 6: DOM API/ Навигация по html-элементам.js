const acher = $0;
acher.parentElement; // Обращаемся к родителю 
acher.childrenElement;
acher.children; // получаем колекцию  такеже можно обращаться по индексу acher.children[0] получить конкретный елемент
acher.firstElementChild; // Обратиться к перовму ребенку
acher.lastElementChild; // Обратиться к последнему ребенку
acher.nextElementSibling; // получаем следуйщий елемент
acher.nextElementSibling.nextElementSibling; // получаем следуйщий div

const btn = acher.nextElementSibling;
btn.previousElementSibling; // получаем приведущий елемент 