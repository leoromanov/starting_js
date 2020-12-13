'use strict'

/* Императивный код
Описывает процесс вычисления в виде заданной последовательности инструкций,
изменяющих состояние программы. Описание того, как что выполняется.
В общем самый обычный код.

Декларативный код.
Описывает то, что мы хотим получить в результате, а не как это сделать.
Как правило является итоговым результатом работы императивного кода.
Декларативное описание задачи более наглядно и легче формулируется. 
Мы говорим что хотим сделать, вызвав метод или функцию. 
Ее реализация скорее всего использует императивный код, 
но он скрыт внутри и не усложняет понимание основного кода.
*/

//Рассмотрим разницу подходов на примере базовой операции фильтрации коллекции. 
//Напишем код перебора и фильтрации массива чисел по какому-то критерию.
// Императивный подход
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}

console.log(filteredNumbers); // [4, 5]

/* Array.prototype.filter() это метод массива который скрывает в себе 
логику перебора коллекции и вызывает callback-функцию 
которую мы ему передаем для каждого элемента, 
возвращая массив элементов подошедших под критерий.
*/
// Декларативный подход
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => {
  return value > 3;
});

console.log(filteredNumbers); // [4, 5]


//ЧИТСТЫЕ ФУНКЦИИ
//Функция с побочными эффектами
//функция, которая в процессе выполнения может модифицировать или использовать 
//значения глобальных переменных, изменять ссылочные аргументы, 
//выполнять операции ввода-вывода и т. п.

/*Используем привычный императивный подход и напишем функцию умножающую каждый 
элемент массива на значение параметра value. Эта функция будет мутировать 
(изменять) исходный массив по ссылке.*/
const dirtyMultiply = (array, value) => {
    for (let i = 0; i < array.length; i += 1) {
      array[i] = array[i] * value;
    }
  };
  
  const numbers = [1, 2, 3, 4, 5];
  
  dirtyMultiply(numbers, 2);
  
  // Произошла мутация исходных данных
  console.log(numbers); // [2, 4, 6, 8, 10]

  
  //Чистые функции
  /* функции, результат которых зависит только от значений переданных аргументов 
  и стабильных переменных локальной области видимости, которые при одинаковых 
  аргументах всегда возвращают один и тот же результат, и не имеют видимых 
  побочных эффектов, то есть не изменяют состояние программы.
  */

//Теперь напишем реализацию чистой функции умножения элементов массива, 
//возвращающей новый массив, не мутируя исходный.
const pureMultiply = (array, value) => {
    const result = [];
  
    for (let i = 0; i < array.length; i += 1) {
      result.push(array[i] * value);
    }
  
    return result;
  };
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = pureMultiply(numbers, 2);
  
  // Не произошло мутации исходных данных
  console.log(numbers); // [1, 2, 3, 4, 5]
  
  // Функция вернула новый массив с измененными данными
  console.log(doubledNumbers); // [2, 4, 6, 8, 10]


  // ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВА
  /*
  В JavaScript есть методы массивов пришедшие из функциональных языков. Они получают исходный 
  массив, создают новый пустой массив и заполняют его, применяя к копии значения каждого элемента
   указанную callback-функцию.

Все функциональные методы массивов имеют схожий синтаксис. 
Исходный массив array, вызов метода method и callback-функция callback 
в качестве аргумента метода.
*/
array.method(callback[currentValue, index, array])
//В большинстве методов, аргументами callback-функции являются значение элемента currentValue 
//(первый параметр), позиция элемента index (второй параметр) 
//и сам исходный массив array (третий параметр).
array.method((item, idx, arr) => {
    // логика которая будет применяться на каждой итерации
  });
  //Все параметры кроме значения элемента item необязательны. 
  //Названия параметров могут быть любые, но есть неофициальные соглашения.
  array.method(item => {
    // логика которая будет применяться на каждой итерации
  });

  

  //Array.prototype.forEach()
  //Единственный из функциональных методов который ничего не возвращает, 
  //а просто перебирает коллекцию. Используется как замена цикла for.
  array.forEach(callback[currentValue, index, array])
/* Перебирает
Может изменять
Не возвращает
*/
const numbers = [1, 2, 3];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// Функциональный forEach
numbers.forEach(num => console.log(num));

// Указываем параметр idx если нужен доступ к счетчику
numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

/*
Код более декларативный, читабельный, поддерживаемый. Поэтому дальнейшее использование цикла for 
при выполнении домашних работ не рекомендуется. Единственным местом где все еще необходимо 
использовать цикл for, это задача с прерыванием выполнения цикла, forEach прервать 
инструкцией break нельзя.
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://davidtang.io/2016-07-30-javascript-for-loop-vs-array-foreach/


//Array.prototype.map()
/*
Используется для транформации массива. Применяет callback-функцию к каждому элементу 
исходного массива, результат работы callback-функции записывает в новый массив, 
который и будет результатом выполнения метода. Исходный и новый массив всегда имеют 
одинаковую длину. Не мутирует иходный массив.
*/
array.map(callback[currentValue, index, array])
/*
Используется для трансформации массива
Перебирает
Не изменяет
Возвращает коллекцию
*/
const numbers = [1, 2, 3];

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6]

//Используем map чтобы пройти по базе данных users и получить массив всех имен пользователей.
const users = [
    { name: 'Mango', isActive: true },
    { name: 'Poly', isActive: false },
    { name: 'Ajax', isActive: true },
  ];
  
  // Для каждого элемента коллекции (user) вернем значение поля name
  const names = users.map(user => user.name);
  
  console.log(names); // ["Mango", "Poly", "Ajax"]
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map




  //Array.prototype.filter()
  /*
Применяет callback-функцию к каждому элементу исходного массива и если результат ее выполнения 
имеет значение true, то копирует значение из исходного массива в новый массив. 
Исходный и новый массив могут иметь разную длину. Не мутирует иходный массив. 
Всегда возвращает массив, даже если в нем всего 1 элемент. 
Если ничего не найдено, вернет пустой массив. 
Используется когда необходимо найти более одного элемента в коллекции.
  */
 array.filter(callback[currentValue, index, array])
/*
Используется для фильтрации массива
Перебирает
Не изменяет
Возвращает коллекцию
*/

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.filter(num => num > 5)); // [6, 7, 8, 9]

console.log(numbers.filter(num => num < 5)); // [0, 1, 2, 3, 4]

console.log(numbers.filter(num => num === 5)); // [5]

//Используем filter чтобы пройти по базе данных users и выбрать активных и неактивных пользователей по значению свойства isActive.

const users = [
    { name: 'Mango', isActive: true },
    { name: 'Poly', isActive: false },
    { name: 'Ajax', isActive: true },
    { name: 'Chelsey', isActive: false },
  ];
  
  // Для каждого элемента коллекции (user) проверим поле isActive.
  // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
  const activeUsers = users.filter(user => user.isActive);
  console.log(activeUsers);
  
  // Для каждого элемента коллекции (user) проверим поле isActive.
  // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
  const inactiveUsers = users.filter(user => !user.isActive);
  console.log(inactiveUsers);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter




  // Array.prototype.find()
  /*
  Применяет callback-функцию к каждому элементу исходного массива и если результат ее выполнения имеет значение true, то возвращает этот элемент и завершает свое выполнение. Если ничего не найдено, вернет undefined.
  */
 array.find(callback[currentValue, index, array])
/*
Используется для поиска уникального элемента массива
Перебирает
Не изменяет
Возвращает элемент
*/
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.find(num => num > 5)); // 6

console.log(numbers.find(num => num < 5)); // 0

console.log(numbers.find(num => num === 5)); // 5

/*
Используем find чтобы пройти по базе данных users и найти пользователя по идентификатору id. Идентификаторы всегда уникальны.
*/
const users = [
    { id: '000', name: 'Mango', isActive: true },
    { id: '001', name: 'Poly', isActive: false },
    { id: '002', name: 'Ajax', isActive: true },
    { id: '003', name: 'Chelsey', isActive: false },
  ];
  
  // Для каждого элемента коллекции (user) проверим поле id.
  // Если оно совпадает с искомым идентификатором, то find прекратит
  // выполнение и вернет текущий элемент (user) как результат выполнения
  const user = users.find(user => user.id === '002');
  console.log(user);
  
  // Создадим функцию которая будет возвращать нам пользователя по id
  const getUserById = (arr, id) => arr.find(x => x.id === id);
  
  console.log(getUserById(users, '001'));
  console.log(getUserById(users, '003'));
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find




  // Array.prototype.every() и Array.prototype.some()
/*
Метод every проверяет, прошли ли все элементы массива тест, предоставляемый callback-функцией. Возвращает true, если вызов callback-функции вернет true для каждого элемента в array.
*/
array.every(callback[currentValue, index, array])
/*
Метод some проверяет, проходит ли по крайней мере один элемент в массиве тест, предоставляемый callback-функцией. Возвращает true, если вызов callback-функции вернет true хотябы для одного элемента в array.
*/
array.some(callback[(currentValue, index, array)]);
/*
Перебирает
Не изменяет
Возвращает true или false
*/
// Функция которая проверяет величину значения, возвращает true или false.
const isBigEnough = val => val >= 10;

// Допустим нам нужно узнать достаточно ли большие ВСЕ числа в коллекции.
// Все что нам нужно это буль true/false. Метод every вернет true только тогда,
// когда все элементы коллекции будут удовлетворять условию в callback-функции.

console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// Допустим нам нужно узнать ЕСТЬ ЛИ в коллекции числа больше 10, хотя бы одно
// или больше. Все что нам нужно это буль true/false. Метод some вернет true
// только тогда, когда хотябы 1 или более элементов коллекции будут
// удовлетворять условию в callback-функции.

console.log([2, 5, 8, 1, 4].some(isBigEnough)); // false
console.log([12, 5, 8, 1, 4].some(isBigEnough)); // true

/*
Давайте еще пример. Есть массив объектов фруктов, необходимо узнать все ли фрукты есть в наличии и есть ли в наличии хоть какие-то фрукты более 0 штук.
*/
const fruits = [
    { name: 'apples', amount: 100 },
    { name: 'bananas', amount: 0 },
    { name: 'grapes', amount: 50 },
  ];
  
  // every вернет true только если всех фруктов будет больше чем 0 штук
  const allAvailable = fruits.every(fruit => fruit.amount > 0); // false
  
  // some вернет true если хотябы одного фрукта будет больше чем 0 штук
  const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some





  // Array.prototype.reduce()

  /*
  Аккумулирующая функция, используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата. Швейцарский нож функциональных методов массива. Возможно немного сложна в усвоении, но результат стоит того.
  Перебирает
Не изменяет
Возвращает что угодно
  */
 array.reduce(сallback[(previousValue, currentItem, index, array)], initialValue)
/* previousValue — промежуточный результат (аккумулятор)
currentItem — текущий элемент массива
index — индекс текущего элемента массива
array — оригинальный массив 

Легко представить ее работу на примере подсчета суммы значений массива. Если в качестве callback-функции задать сложение, то reduce вернет сумму всех значений массива. */

/*
Работает это так:

Функция reduce создаст новую переменную, называемую аккумулятор. Затем присвоит аккумулятору значение текущего (первого) элемента массива currentItem.
Функция проверит есть ли у массива следующий элемент и если он есть, то добавит значение к аккумулятору. Когда следующего элемента не окажется (конец массива), функция вернет значения аккумулятора.
Вторым аргументом reduce может быть начальное значение initialValue. Это значение будет присвоено аккумулятору до применения callback-функции к первому элементу массива.
*/
const numbers = [1, 2, 3, 4, 5];

const summ = numbers.reduce((acc, value) => acc + value, 0);

console.log(summ); // 15
/*
Допустим у нас есть следующая задача: из массива постов твиттера отдельного пользователя необходимо посчитать сумму всех лайков. Можно перебрать циклом for или forEach, каждое из этих решений потребует дополнительного кода. А можно использовать reduce.
*/
const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];
  
  // Пройдем по всем элементам коллекции и прибавим значения свойства likes
  // к аккумулятору, начальное значаение которого укажем 0.
  const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
  
  console.log(likes); // 32
  
  // Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
  // для подсчета лайков из коллекции
  const countLikes = tweets =>
    tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
  
  console.log(countLikes(tweets)); // 32
  
  //Продолжая тему reduce мы соберем в массив все теги которые встречаются в постах.

  const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];
  
  // Пройдем по всем элементам коллекции и добавим значения свойства tags
  // к аккумулятору, начальное значение которого укажем пустым массивом [].
  // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
  const tags = tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
  
    return allTags;
  }, []);
  
  console.log(tags);
  
  // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
  // для сбора тегов из коллекции
  const getTags = tweets =>
    tweets.reduce((allTags, tweet) => {
      allTags.push(...tweet.tags);
  
      return allTags;
    }, []);
  
  console.log(getTags(tweets));
  

  // После того как мы собрали все теги из постов, хорошо бы было посчитать количество уникальных тегов в массиве. И снова reduce тут как тут.
  const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];
  
  const getTags = tweets =>
    tweets.reduce((allTags, tweet) => {
      allTags.push(...tweet.tags);
  
      return allTags;
    }, []);
  
  const tags = getTags(tweets);
  
  // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
  // Это стандартная практика если callback-функция довольно большая.
  
  // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
  // то создаем его и записывает ему значение 0.
  // В противном случае увеличиваем значение на 1.
  const getTagStats = (acc, tag) => {
    if (!acc.hasOwnProperty(tag)) {
      acc[tag] = 0;
    }
  
    acc[tag] += 1;
  
    return acc;
  };
  
  // Начальное значение аккумулятора это пустой объект {}
  const countTags = tags => tags.reduce(getTagStats, {});
  
  const tagCount = countTags(tags);
  console.log(tagCount);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  // https://medium.com/@dave_lunny/reduce-your-fears-about-array-reduce-629b334ab945





  // Array.prototype.sort()
  /*
  Позволяет сортировать элементы массива на месте. Помимо возврата отсортированного массива метод sort также отсортирует массив, на котором он был вызван. По умолчанию метод sort сортирует, преобразуя элементы к строке.

Перебирает
Изменяет
Возвращает коллекцию
*/
const numbers = [2, 1, 4, 3, 5];
// Отсортирует по возрастанию
console.log('Before sort: ', numbers); // [2, 1, 4, 3, 5]
console.log('After sort: ', numbers.sort()); // [1, 2, 3, 4, 5]

const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// Отсортирует по алфавиту
console.log('Before sort: ', clients); // ["Mango", "Ajax", "Poly", "Chelsey"]
console.log('After sort: ', clients.sort()); // ["Ajax", "Chelsey", "Mango", "Poly"]

//Свой порядок сортировки
/*
Для указания своего порядка сортировки в метод arr.sort(fn) нужно передать функцию fn с двумя параметрами, которая сравнивает их. Внутренний алгоритм функции сортировки умеет сортировать любые массивы. Но для этого ему нужно знать, как их сравнивать. Эту роль и выполняет fn.

Алгоритм сортировки, встроенный в JavaScript, будет передавать ей для сравнения элементы массива. Она должна возвращать:

Положительное значение, если a > b
Отрицательное значение, если a < b
Если равны – можно 0, но вообще не важно, что возвращать, если их взаимный порядок не имеет значения.
Отсортируем массив наших пользователей по возрастанию дней онлайн активности.
*/
const users = [
    { name: 'Mango', daysActive: 15 },
    { name: 'Poly', daysActive: 4 },
    { name: 'Ajax', daysActive: 27 },
    { name: 'Chelsey', daysActive: 2 },
  ];
  
  const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;
  
  console.log(users.sort(sortByActiveDays));

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort






  //Цепочки методов массива
  /*
  Есть массив чисел, из него необходимо взять все четные и умножить на 2, после чего еще и развернуть массив. Выразим кодом решение так как мы уже умеем это делать.
  */
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const even = numbers.filter(x => x % 2 === 0);

const doubled = even.map(x => x * 2);

const reversed = doubled.reverse();

console.log(reversed);

/*
Вариант решения выше неплох. Проблема в том, что у нас появляются промежуточные переменные после каждой операции. Избавиться от них можно используя цепочки вызовов методов.

Функциональные методы массива можно группировать в цепочки. Каждый следующий метод будет выполняться на результате работы предыдущего.
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/*
 * Фильтруем четные числа. Далее, на результате метода filter,
 * вызываем map и множим на 2. После чего на результате
 * метода map вызываем reverse.
 */

const result = numbers
  .filter(x => x % 2 === 0)
  .map(y => y * 2)
  .reverse();

console.log(result);
