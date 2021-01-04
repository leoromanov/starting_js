'use strict'

/* 
DOM (Document Object Model, Объектная модель документа) — межплатформенный, 
независимый от языка интерфейс для работы с HTML-документом. 
Содержит набор свойств и методов позволяющих искать, создавать и удалять элементы, 
реагировать на действия пользователя и другое.

BOM (Browser Object Model, Объектная модель браузера) — межплатформенный, 
независимый от языка интерфейс для работы с окном браузера. 
Содержит набор свойств и методов позволяющих получить доступ непосредственно 
к текущей вкладке и ряду функций браузера. Включает объект работы с историей, 
местоположением и другое.

Объектная модель документа
DOM является отражением HTML-документа. Это древовидная структура, в которой каждый узел 
это JavaScript-объект со свойсвами и методами, представляющий часть HTML-документа. 
Объекты могут управляться программно, и любые изменения отражаются в документе.

DOM выполняет две роли: является объектным представлением HTML-документа, 
и действует как интерфейс, соединяющий страницу с языком программирования, 
например JavaScript.

Каждый элемент в документе, весь документ в целом, заголовок, ссылка, абзац — 
это части DOM этого документа, поэтому все они могут изменяться с помощью JavaScript.

HTML-документ и DOM
Согласно DOM-модели каждый тег образует отдельный элемент-узел, каждый фрагмент текста 
— текстовый элемент, таким образом HTML-документ это иерархическое дерево. 
Это означает, что у каждого элемента (кроме корневого) есть только один родитель, 
т.е. элемент, внутри которого он располагается. 
Это дерево образуется за счет вложенной структуры тегов и текстовых элементов.

Чтобы отобразить HTML-документ, браузер сначала преобразовавает его в формат 
который он понимает — DOM. У движка браузера есть специальный фрагмент кода 
— HTML-парсер, который используется для преобразования HTML в DOM.

В HTML, вложенность определяет отношения родитель-ребенок между элементами. 
В DOM, объекты связаны в древовидной структуре данных, фиксируя эти отношения.

Браузер строит DOM постепенно, как только приходят первые фрагменты кода, 
он начинает парсить HTML, добавляя узлы в древовидную структуру.

После того как DOM-дерево построено, можно найти в нем элемент с помощью JavaScript 
и выполнять с ним какие-то действия, так как каждый узел имеет интерфейс 
с множеством свойств и методов.

DOM-дерево
Составим дерево HTML-документа используя генератор DOM-дерева.
<!DOCTYPE html>
<html>
  <head>
    <title>DOM</title>
  </head>
  <body>
    <div>
      <h2>Title</h2>
      <p>Some text</p>
      <ul>
        <li><a href="#">link 1</a></li>
        <li><a href="#">link 2</a></li>
        <li><a href="#">link 3</a></li>
      </ul>
    </div>
  </body>
</html>
В этом дереве выделены два типа узлов:

Узлы-элементы (element node) — образуются тегами, естественным образом одни узлы вложены 
в другие. Структура дерева образована исключительно за счет них.
Текстовые узлы (text node) — образуются текстом внутри элементов. 
Текстовый узел содержит только строку текста и не может иметь потомков, 
то есть он всегда на самом нижнем уровне иерархии. 
Пробелы и переносы строк это тоже текстовые узлы.

Из этого правила есть исключения: пробелы до head игнорируются, 
а любое содержимое после body не создаёт узла, браузер переносит его в конец body.



Навигация по DOM
DOM предоставляет широкий спектр возможностей при работе с HTML-элементом и его содержимым, 
но для этого сначала нужно получить ссылку на элемент. 
Доступ к DOM начинается с объекта document, от него можно добраться до любых узлов.

Узлы HTML-дерева имеют иерархическое отношение друг к другу. 
Термины ancestor (предок), descendant (потомок), parent (родитель), 
child (ребенок) и sibling (сосед) используются для описания отношений.

В дереве узлов верхний узел называется корневым (root node).
Каждый узел, кроме root node, имеет только одного родителя.
У узла может быть сколько угодно детей.
Соседи — это узлы с общим родителем.
Дочерние элементы (дети) — элементы, которые лежат непосредственно внутри данного.
Потомки – все элементы, которые лежат внутри данного, вместе с их детьми, 
детьми их детей и так далее. То есть всё поддерево.

Вы можете использовать следующие свойства для навигации между узлами.

elem.parentNode - выберет родителя elem
elem.childNodes - псевдо-массив хранит все дочерние элементы, включая текстовые.
elem.children - псевдо-массив хранит только дочерние узлы-элементы, то есть соответствующие тегам.
elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
elem.previousSibling - выберет элемент "слева" от elem (его предыдущего соседа)
elem.previousElementSibling - выберет узел-элемент "слева" от elem (его предыдущего соседа)
elem.nextSibling - выберет элемент "справа" от elem (его следующего соседа)
elem.nextElementSibling - выберет узел-элемент "справа" от elem (его предыдущего соседа)

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#Important_Data_Types


Поиск DOM-узлов
Итак, мы уже знаем что DOM-узел это объект. У него есть методы и свойства. 
Самое время научиться находить элемент по произвольному CSS-селектору.

Методы elem.querySelector* это современный стандарт для поиска DOM-узлов. 
Они позволяют найти узел или группу узлов по CSS-селектору любой сложности.

elem.querySelector(selector)
Используется когда мы заведомо знаем, что подходящий элемент только один.
Возвращает первый найденный элемент внутри elem, соответствующий CSS-селектору selector.
Если ничего не найдено, вернет null.

elem.querySelectorAll(selector)
Используется когда мы заведомо знаем, что подходящих элементов более одного.
Возвращает псевдомассив всех элементов внутри elem, удовлетворяющих CSS-селектору selector.
Если ничего не найдено вернет пустой массив.

https://codepen.io/goit-fe-adv/pen/NvVpMw/ (ссылка на пример)







DOM-свойства и атрибуты
Свойства
Во время построения DOM-дерева многие стандартные HTML-атрибуты становятся свойствами узлов. 
Посмотрим на несколько часто использующихся свойств.

hidden - контролирует видимость элемента.
value - содержит текущий текстовый контент элементов input, select, textarea.
checked - хранит состояние чекбокса или радиокнопки.
name - хранит значение указанное в HTML-атрибуте name.
src - путь к изображению тега <img>.

https://codepen.io/goit-fe-adv/pen/RZmgpE/


Свойство Node.textContent
elem.textContent — свойство, содержит текстовый контент внутри элемента. 
Доступно для записи, при чем вне зависимости что будет передано в textContent, 
данные всегда будут записаны как текст.
https://codepen.io/goit-fe-adv/pen/WEBjVV/


Свойство HTMLElement.style
Используется для получения и установки инлайновых стилей. Возвращает объект CSSStyleDeclaration, 
который содержит список всех свойств определенных только в инлайновом стиле элемента, а не весь CSS. 
Свойство можно как читать так и записывать. При записи, свойства записываются в camelCase, 
то есть background-color превращается в element.style.backgroundColor и т. д. 

const button = document.querySelector('.btn');

button.style.backgroundColor = 'teal';
console.log(button.style); // объект инлайн стилей


Свойство Element.classList
Объект, содержит методы для работы с классами элемента.

elem.classList.contains(cls) - возвращает true или false, в зависимости от того, есть ли 
у элемента класс cls
elem.classList.add(cls) - добавляет класс cls в список классов элемента
elem.classList.remove(cls) - удаляет класс cls из списка классов элемента
elem.classList.replace(oldClass, newClass) - заменяет существующий класс на указанный
elem.classList.toggle(cls) - если класса cls нет, добавляет его, если есть, удаляет

https://codepen.io/goit-fe-adv/pen/eEaRME/
<p id="paragraph" class="text red big">
Proin magna. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, 
non adipiscing dolor urna a orci. Etiam rhoncus. Donec mi odio, faucibus at, 
scelerisque quis, convallis in, nisi.</p>

const elem = document.querySelector("#paragraph");

console.log(elem.classList); // ["text", "red", "big", value: "text red big"]

console.log(elem.classList.contains("red")); // true

elem.classList.remove("big");
console.log(elem.classList); // ["text", "red", value: "text red"]

elem.classList.add("new-class");
console.log(elem.classList); // ["text", "red", "new-class", value: "text red new-class"]

// можно добавлять множественные классы
elem.classList.add("a", "b", "c");
console.log(elem.classList);

elem.classList.toggle("hidden"); // спрячется, добавился класс hidden
elem.classList.toggle("hidden"); // покажется, удалили класс hidden

// classList – это псевдо-массив, в прототипе которого есть метод forEach,
// поэтому можно перебрать классы в цикле
elem.classList.forEach(cls => {
  console.log(cls); // text, red, new-class
});


Атрибуты
DOM-элементам соответствуют HTML-теги, у которых есть текстовые атрибуты. 
Доступ к атрибутам осуществляется при помощи стандартных методов. 
Эти методы работают со значением, которое находится в HTML.

elem.hasAttribute(name) - проверяет наличие аттрибута, возвращает true или false
elem.getAttribute(name) - получает значение атрибута и возвращает его
elem.setAttribute(name, value) - устанавливает атрибут
elem.removeAttribute(name) - удаляет атрибут
elem.attributes - свойство, возвращает коллекцию всех атрибутов элемента

<img class="image" src="https://placeimg.com/400/200/nature" alt="lake and clouds">
const image = document.querySelector(".image");

console.log(image.attributes); // обьект всех аттрибутов елемента 
// NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(image.hasAttribute("src")); // true

console.log(image.getAttribute("alt")); // lake and clouds

image.setAttribute("alt", "amazing lake and clouds");

console.log(image.getAttribute("alt")); // amazing lake and clouds


HTML5 data-атрибуты
В HTML5 можно создавать произвольный атрибут и получать значения этого атрибута в JavaScript. 
Эту возможность используют для того чтобы упростить написание кода, 
например связать данные и разметку по уникальному идентификатору, указать тип действия кнопки и т. п.

<div class="editor">
  <p>Donec id justo. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Curabitur suscipit suscipit tellus. Phasellus gravida semper nisi.</p>
  <div class="actions">
    <button type="button" class="btn" data-action="save">Save</button>
    <button type="button" class="btn" data-action="close">Close</button>
  </div>
</div>

<ul class="dishes">
  <li data-id="14">Baked Yak &amp; Mushrooms</li>
  <li data-id="7">Strawberry Pancakes</li>
  <li data-id="3">Caramel Toffee</li>
  <li data-id="61">Pistachio Elderberry Wafer</li>
</ul>

const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

// Для получения значения data-атрибута используется
// свойство dataset, после коготого идет свойство
// data-action это action, data=close это close
// то есть data- отбрасывается, а остальное имя записывается
// как ключ объекта
const saveBtnAction = saveBtn.dataset.action;
console.log(saveBtnAction); //save

const closeBtnAction = closeBtn.dataset.action;
console.log(closeBtnAction); //close




Работа с DOM-узлами
Используя DOM API мы можем не только выбирать уже существующие, но и удалять, 
а так же создавать новые элементы, после чего добавлять их в документ.

Создание
document.createElement(tagName)
Создает HTML-элемент по указаному имени тега и возвращает ссылку на него 
как результат своего выполнения. tagName это строка, 
указывающая тип создаваемого элемента. Элемент создается в памяти, в DOM его еще нет.

const heading = document.createElement('h1');
console.log(heading); // <h1></h1>

heading.textContent = 'This is a heading';
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement('img');
image.setAttribute('src', 'https://placeimg.com/640/480/nature');
image.setAttribute('alt', 'nature');

console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="nature">


Добавление
Чтобы созданный элемент был отображен на странице, его необходимо добавить 
к уже существующему элементу в DOM. Допустим, что добавляем в некий элемент parentElem, 
для этого есть методы.

parentElem.appendChild(elem)
Добавляет elem в конец дочерних элементов parentElem.

parentElem.insertBefore(elem, nextSibling)
Добавляет elem в коллекцию детей parentElem, перед элементом nextSibling. 
Если вторым аргументом указать null, тогда insertBefore сработает как appendChild.

<div class="container center">
  <nav class="nav white">
    <a href="#" class="btn">item 1</a>
    <a href="#" class="btn">item 2</a>
    <a href="#" class="btn">item 3</a>
  </nav>
</div>
// Создадим еще один li и вставим его в конец списка
const item = document.createElement("a");
item.href = "#";
item.classList.add("btn");
item.textContent = "item 4";

const nav = document.querySelector(".nav");
nav.appendChild(item);

// Создадим заголовок и вставим его в container перед списком
const heading = document.createElement("h1");
heading.textContent = "Nav heading";

const container = document.querySelector(".container");
container.insertBefore(heading, nav);


Методы append/prepend, before/after, replaceWith
Есть методы которые позволяют вставить что угодно и куда угодно. 
Во всех этих методах, nodes – DOM-узлы или строки, в любом сочетании и количестве. 
Причём строки вставляются как текстовые узлы.

elem.append(nodes) - добавляет nodes в конец elem
elem.prepend(nodes) - добавляет nodes в начало elem
elem.after(nodes) - добавляет nodes после узла elem
elem.before(nodes) - добавляет nodes перед узлом elem
elem.replaceWith(nodes) - добавляет nodes вместо elem

<div class="container">
  <ul class="list">
    <li>Mango</li>
  </ul>
</div>

const list = document.querySelector(".list");

// Добавлем элемент в конец списка
const item = document.createElement("li");
item.textContent = "Poly";
list.append(item);

// Добавляем элемент в начало списка
const clone = item.cloneNode(true);
clone.textContent = "Ajax";
list.prepend(clone);

// Добавляет заголовок перед списком
const title = document.createElement("h2");
title.textContent = "Список клиентов";
list.before(title);

// Добавляет абзац после списка
const text = document.createElement("p");
text.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
list.after(text);


Удаление
Для того чтобы удалить узел существуют два метода. Первый, более старый метод работающий 
во всех браузерах, позволяет удалить ребенка elem из родителя parent. 
В таком случае необходимо иметь ссылку как на родителя так и на ребенка.

parent.removeChild(elem)

Более современный метод, но с гарантированной поддержкой только в новых браузерах, 
он вызывается на самом элементе elem который необходимо удалить.

elem.remove()

<article class="article">
  <h2 class="title">Article title</h2>
  <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! Praesentium accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
<a class="link" href="">Read more</a>
</article>
const article = document.querySelector('.article'); 

const text = article.querySelector('.text');
article.removeChild(text);

const link = article.querySelector('.link');
link.remove();


Клонирование
Представим что у нас есть элемент с текстом, и мы хотим вставить такой же элемент 
в другую часть документа. Мы уже знаем что каждый элемент может существовать в document 
в одном экземпляре. Но элемент можно клонировать и работать с этим клоном (точной копией).

Так же мы могли бы создать новый элемент и работать с ним, но в ряде случаев 
гораздо эффективнее клонировать существующий, а потом изменить текст внутри. 
В частности, если элемент большой, то клонировать его будет быстрее, чем пересоздавать.

elem.cloneNode(true)

Создаст глубокую копию элемента – вместе с атрибутами, включая все поддерево. 
Если же вызвать с аргументом false, то копия будет сделана без дочерних элементов.

<div class="parent">
  <article class="article">
    <h2>Article title</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, natus unde enim deleniti quod amet tempore officia, possimus non iure vitae quasi reiciendis!</p>
  </article>
</div>

const parent = document.querySelector('.parent');
const article = document.querySelector('.article');

// Создает точную глубокую копию всей статьи
const clone = article.cloneNode(true);
clone.classList.add('blue-text');
parent.appendChild(clone);


Свойство innerHTML
Еще один способ создать DOM-элементы и поместить их в дерево это использовать строки 
и позволить браузеру сделать всю тяжелую работу. Как мы увидим далее, у такого подхода есть свои плюсы и минусы.

Создание узлов
elem.innerHTML — свойство, позволяет получить содержимое элемента, включая теги, в виде строки. 
Значение, возвращаемое innerHTML — всегда валидный HTML-код.

Оно доступно как для чтения так и для записи. Если записать в innerHTML элемента строку с HTML-тегами, 
то браузер ее распарсит и превратит их в валидные DOM-узлы.

elem.innerHTML = '<p class="text">Pellentesque habitant.</p>';

Такой код говорит браузеру распарсить строку, проверить на наличие тегов, 
если нашел таковые то создать DOM-элементы и вставить их в правильном порядке. 
При таком подходе, в отличии от createElement, мы не получаем ссылку на созданный DOM-элемент. 
В то же время, создавать много разметки проще.


Метод insertAdjacentHTML()
Метод парсит указанную строку как HTML и добавляет результирующие узлы в указанное место DOM-дерева. 
Не делает повторный рендеринг для существующих элементов внутри элемента-родителя на котором используется. 
Это позволяет избежать дополнительного этапа сериализации, делая его быстрее, 
чем непосредственная манипуляция innerHTML.

element.insertAdjacentHTML(position, string)

position — позиция относительно элемента. Принимает одно из следующих значений:

'beforebegin' - перед element
'afterbegin' - внутрь element, в самое начало контента
'beforeend' - внутрь element, в самый конец контента
'afterend' - после element

<ol id="list">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>
const list = document.querySelector('#list');

list.insertAdjacentHTML('beforebegin', '<h2>beforebegin заголовок</h2>');
list.insertAdjacentHTML('afterbegin', '<li>afterbegin item</li>');
list.insertAdjacentHTML('beforeend', '<li>beforeend item</li>');
list.insertAdjacentHTML('afterend', '<p>afterend текст</p>');

У этого метода есть братья-близнецы. Их синтаксис, за исключением последнего параметра, полностью совпадает с insertAdjacentHTML. Вместе они образуют универсальный швейцарский нож для вставки чего угодно куда угодно.

elem.insertAdjacentElement(position, elem) — вставляет в произвольное место не HTML-строку, 
а элемент elem.
elem.insertAdjacentText(position, text) — создаёт текстовый узел из строки text 
и вставляет его в указанное место относительно elem.



Оптимизация работы с DOM
Манипуляция DOM-дерева это дорогая операция. 
Необходимо всеми возможными методами стараться минимизировать количество обращений к DOM. 
Разберемся с очень важными концепциями при работе c DOM-деревом.
https://www.youtube.com/watch?v=dndeRnzkJDU&feature=youtu.be


Repaint
Происходит когда изменения произошли в стилях элемента влияющих на внешний вид, но не на геометрию. 
Например opacity, background-color, visibility и outline. 
Браузер отрисовывает его заново, с учётом нового стиля. 
Это дорогая операция, потому что браузер проверяет видимость всех остальных узлов в дереве, 
один или более могут оказаться скрыты под изменившим внешний вид.

Reflow
Происходит когда изменения затрагивают содержимое, структуру документа, положение элементов. 
Идет пересчет позиционирования и размеров всех элементов, что ведет к перерисовке части 
или всего документа. Изменения размера одного родительского контейнера повлияет на всех его детей 
и предков. Имеет значительно большее влияние на производительность чем repaint



Выводы
Всегда необходимо думать об оптимизации работы с DOM. Все вышеперечисленные операции блокируют браузер. 
Страница не может выполнять никакие другие операции в то время, когда проиходит reflow или repaint. 
Причинами таких изменений обычно являются:

Манипуляции с DOM (добавление, удаление, изменение, перестановка элементов)
Изменение содержимого, в т.ч. текста в полях форм
Расчёт или изменение CSS-свойств
Добавление и удаление таблиц стилей
Манипуляции с атрибутом class
Манипуляции с окном браузера (изменения размеров, прокрутка)
Активация псевдо-классов (например :hover)
Современные браузеры оптимизируют процесс отрисовки страницы без вмешательства разработчика. 

И все же не забывайте думать о производительности, следуйте лучшим практикам из 
статей в дополнительных материалах этой секции.

Дополнительные материалы
https://habr.com/ru/post/224187/
https://medium.com/swlh/what-the-heck-is-repaint-and-reflow-in-the-browser-b2d0fb980c08
https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing
https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/









События
Событие – это сигнал от браузера о том, что что-то произошло. События используются для 
реакции на действия посетителя и исполнения кода. Cобытия становятся в очередь 
и обрабатываются в порядке поступления, асинхронно, независимо.

Существует много видов событий, рассмотрим некоторые из них.

click - происходит, когда кликнули на элемент левой кнопкой мыши
submit - посетитель отправил форму
focus - посетитель фокусируется на элементе, например нажимает на input
keydown - посетитель нажимает клавишу

https://developer.mozilla.org/en-US/docs/Web/Events (список событий)


Порядок срабатывания событий
Одно действие может вызывать несколько событий. Например, клик вызывает сначала mousedown, 
а затем mouseup и click. В тех случаях, когда одно действие генерирует несколько событий, 
их порядок фиксирован. То есть, обработчики вызовутся в порядке mousedown → mouseup → click.

Каждое событие обрабатывается независимо. Например, при клике, события mouseup и click 
возникают одновременно, но обрабатываются последовательно. 
Сначала полностью завершается обработка mouseup, затем запускается click.


Слушатели событий
Для того чтобы элемент реагировал на действия пользователя, на него необходимо повесить 
слушателя (обработчик) события. То есть функцию, которая сработает как только событие произошло. 
Именно благодаря слушателям событий, скрипт может реагировать на действия пользователя.

Методы elem.addEventListener() и elem.removeEventListener() это современный способ назначить или удалить 
обработчик, при этом можно использовать сколько угодно обработчиков на одном типе события.

https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers



Метод elem.addEventListener()
Добавляет слушателя события на элемент.

element.addEventListener(event, handler[, phase])

event - имя события, строка, например click
handler - ссылка на функцию, которую надо поставить обработчиком
phase - необязательный аргумент, фаза, на которой обработчик должен сработать. Указывается крайне редко.

<button id="single" class="btn">SINGLE CALLBACK</button>
<hr>
<button id="multiple" class="btn">MULTIPLE CALLBACKS</button>

const singleBtn = document.querySelector('#single');

// Для обработчика события можно (и желательно) 
// использовать отдельную функцию, ссылку на которую 
// передаем вторым аргументом в addEventListener
const handleClick = () => alert('CLICK!');

singleBtn.addEventListener('click', handleClick);


//========================================================
// Можно вешать более одного обработчика на элемент, 
// даже на одно и тоже событие
const multiBtn = document.querySelector('#multiple');

const firstCallback = () => alert('First callback!');
const secondCallback = () => alert('Second callback!');
const thirdCallback = () => alert('Third callback!');

multiBtn.addEventListener('click', firstCallback);
multiBtn.addEventListener('click', secondCallback);
multiBtn.addEventListener('click', thirdCallback);



addEventListener и this
Если мы передаем функцию которая использует this, по умолчанию this внутри нее будет ссылаться 
на сам DOM-узел на котором висит слушатель. Не забывайте привязывать контекст используя метод bind.
const user = {
  name: 'Mango',
  showName() {
    console.log(this);
    // this будет ссылаться на button если использовать showName как callback
    console.log(`My name is: ${this.name}`);
    // тут undefined так как поля name у button нет
  },
};

 * Представим что у нас есть кнопка с классом js-btn
 * Выберем ее и повесим на нее слушатель клика
 
const btn = document.querySelector('.js-btn');

user.showName(); //работает
btn.addEventListener('click', user.showName); // не работает
btn.addEventListener('click', user.showName.bind(user)); // работает



Метод elem.removeEventListener()
Удаляет слушателя. Аргументы те же что у addEventListener.

element.removeEventListener(event, handler[, phase])

Для удаления нужно передать ссылку именно на ту функцию-обработчик, которая была назначена 
в addEventListener. Поэтому для callback используют отдельную функцию и передают ее по имени.

<button class="btn" data-action="add">Add Listener</button>
<button class="btn" data-action="remove">Remove Listener</button>
<hr>
<button id="btn" class="btn">CLICK ME!</button>

const addBtn = document.querySelector('button[data-action="add"]');
const removeBtn = document.querySelector('button[data-action="remove"]');
const btn = document.querySelector("#btn");

const handleClick = () => {
  alert("CLICK EVENT LISTENER ALERT!");
};

addBtn.addEventListener("click", () => {
  btn.addEventListener("click", handleClick);
});

removeBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick);
});




Объект события
Чтобы обработать событие, недостаточно знать о том, что это клик или нажатие клавиши. 
Могут понадобиться детали: текущее значение текстового поля, элемент на котором произошло событие, 
встроенные методы и другое. Объект события содержит ценную информацию о деталях события и автоматически передается первым аргументом в обработчик события.

https://devdocs.io/dom/event

Некоторые свойства объекта события:

event.type - тип события
event.target - элемент, на котором произошло событие
event.currentTarget - элемент, на котором сработал обработчик

<button id="btn" class="btn">CLICK ME!</button>

const btn = document.querySelector("#btn");

// event - это и есть обьект события который автоматически 
// передается первым аргументом, мы можем называть его как угодно, 
// хоть qwerty, но чаще всего он называется или e, evt или event

const handleClick = event => {
  console.log("event: ", event); //откройте консоль чтобы увидеть весь объект целиком

  console.log("event type: ", event.type); // event type:  click

  // будет window, так как мы используем стрелочную функцию, 
  // которая использует внешний контекст 
  // Если использовать обычную функцию то this будет самим элементом 
  // button и равен currentTarget
  console.log("this: ", this); 
  console.log("target: ", event.target); // <button id="btn">CLICK ME!</button>
};

btn.addEventListener("click", handleClick);



Действия браузера по умолчанию
Некоторые события автоматически вызывают действие браузера встроенное по умолчанию 
как реакция на определенный тип события: переход по ссылке, отправка формы и т. п. 
Как правило их можно, и зачастую нужно, отменить.

Например:

Клик по ссылке инициирует переход на новый URL указанный в href ссылки.
Отправка формы — перезагрузку страницы.
Для отмены действия браузера по умолчанию, на объекте события есть стандартный метод.

event.preventDefault()



Событие submit
Возникает при отправке формы. Его применяют для валидации (проверки) формы перед отправкой. Чтобы отправить форму, у посетителя есть два способа:

Нажать кнопку с type="submit"
Нажать клавишу Enter, находясь в каком-нибудь поле формы
Какой бы способ ни выбрал посетитель – будет сгенерировано событие submit. 
В обработчике этого события можно проверить данные, и выполнить действия по результатам проверки.
<form class="form">
  <input type="text" placeholder="Login">
  <input type="password" placeholder="Password">
  <button class="btn" type="submit">Зарегистрироваться</button>
</form>

const form = document.querySelector(".form");
const loginInput = form.querySelector('input[type="text"]');
const passInput = form.querySelector('input[type="password"]');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Предотвращаем поведение по умолчанию
  event.preventDefault();

  const login = loginInput.value.trim();
  const password = passInput.value.trim();
  
  if(login === '' || password === '') {
    return alert('Пожалуйста введите валидную информацию!')
  }

  form.reset();
  
  alert(`
    Спасибо за регистрацию!
    Логин: ${login} 
    Пароль: ${password}
  `);
}















*/







