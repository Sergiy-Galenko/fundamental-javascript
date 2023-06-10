// DOM element html page https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model
document.querySelector('h1') //<h1>​Руководство по DOM​</h1>​

const title = document.querySelector('h1');
const selector  = document.querySelector('#ocrext-canOrig'); // <canvas id="ocrext-canOrig" class="ocrext-element" width="480" height="320" style="display: none;"></canvas>
const clas = document.querySelector('.section-content'); //<div class="section-content"><p><strong>Объектная Модель Документа (<em>DOM</em>)</strong> является программным интерфейсом для HTML, XML и SVG документов. Это обеспечивает структурированное представление документа (дерева), и определяет способ, по которому структура может быть доступна для программы, для изменения структуры документа, его стиля и содержания. DOM обеспечивает представление документа в виде структурированной группы узлов и объектов, которые имеют свойства и методы. По сути, она связывает веб -страницы со скриптами или языками программирования.</p> <p>DOM чаще всего используется в JavaScript, но не является его частью, поэтому иногда с DOM работают в других языках.</p> <p><a href="/ru/docs/Web/API/Document_Object_Model/Introduction">Введение</a> в DOM доступно.</p></div>
const all = document.querySelectorAll('.index li') // NodeList []
const getElementId = document.getElementById('nav-access'); // Возвращает елемент з этим id 
const getElementByClass = document.getElementsByClassName('main-content'); // возвращает колекцию елементов с этим классом 
const getElementByTeg = document.getElementsByTagName('p'); // возвращает масив из всема тегами в данном случае p