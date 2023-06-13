$0.className; // Мы получим строку из усема его классами
const el = $0; //теперь переменная будет хранить значенния классов
el.classList; // Возвращает масив из классов html тега  DOMTorenList
el.classList.add("active"); // можем добавлять новый класс в масив та на html елемент
el.classList.remove("active"); // Удаляет указаный класс
el.classList.contains("active"); // возвращает нам true/false если есть такой класс или нет
el.classList.toggle("active"); // Проверет есть ли 'active' классом если есть то он его снимает а если нет то его добавляет(возвращает => true/false)
