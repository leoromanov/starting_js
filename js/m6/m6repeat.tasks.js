'use strict'

//Метод forEach(callback)
/* Перебирающий метод массива, который используется 
как замена циклов for и for...of при работе с коллекцией.
массив.forEach(function callback(element, index, array) {
  // Тело коллбек-функции
});
Поэлементно перебирает массив.
Вызывает коллбек-функцию для каждого элемента массива.
Ничего не возвращает.

Аргументы коллбек-функции это значение текущего элемента element, 
его индекс index и сам исходный массив array. 
Объявлять можно только те параметры которые нужны, чаще всего это элемент, 
главное не забывать про их порядок.

const numbers = [5, 10, 15, 20, 25];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

// Перебирающий forEach
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});

Единственным случаем, когда стоит использовать циклы for или for...of 
для перебора массива, это задачи с прерыванием выполнения цикла. 
Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.

Задание
Функция calculateTotalPrice(orderedItems) принимает один параметр 
orderedItems - массив чисел, и рассчитывает общую сумму его элементов, 
которая сохраняется в переменной totalPrice и возвращается 
как результат работы функции.

Выполни рефакторинг функции так, чтобы вместо цикла for 
она использовала метод forEach.*/
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Пиши код ниже этой строки
    // for (let i = 0; i < orderedItems.length; i += 1) {
    //     totalPrice += orderedItems[i];
    //   }
  orderedItems.forEach(orderedItem => {
      totalPrice += orderedItem;
  });
    // Пиши код выше этой строки
    return totalPrice;
  };
  console.log(calculateTotalPrice([12, 85, 37, 4]));




  //Задача. Фильтрация массива чисел
  /* Функция filterArray(numbers, value) принимает массив чисел numbers 
  и возвращает новый массив, в котором будут только те элементы оригинального массива, 
  которые больше чем значение параметра value.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.*/
function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] > value) {
    //     filteredNumbers.push(numbers[i]);
    //   }
    // }
  numbers.forEach(number => {
      if (number > value) {
        filteredNumbers.push(number);
      }
  });
    // Пиши код выше этой строки
    return filteredNumbers;
  };
  console.log(filterArray([1, 2, 3, 4, 5], 3));//[4,5]
  console.log(filterArray([1, 2, 3, 4, 5], 5));//[]




  //Задача. Общие элементы
  /*Функция getCommonElements(firstArray, secondArray) принимает два массива 
  произвольной длины в параметры firstArray и secondArray, и возвращает 
  новый массив их общих элементов, то есть тех которые есть в обоих массивах.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.*/
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
    // for (let i = 0; i < firstArray.length; i += 1) {
    //   if (secondArray.includes(firstArray[i])) {
    //     commonElements.push(firstArray[i]);
    //   }
    // }
  firstArray.forEach(element => {
      if (secondArray.includes(element)) {
          commonElements.push(element);
  }
});
    return commonElements;
    // Пиши код выше этой строки
  };
  console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))//[1, 2]
  console.log(getCommonElements([1, 2, 3], [10, 20, 30]));//[]





  //Стрелочные функции.
  /* Стрелочные функции имеют сокращённый, более лаконичный синтаксис, что уменьшает объем кода, 
  особенно когда функция маленькая или если она используется как коллбек.

  Все стрелки создаются как функциональное выражение, и если функция не анонимна, 
  то она должна быть присвоена переменной.
  // Обычное объявление функции
function classicAdd(a, b, c) {
  return a + b + c;
}

// Тоже самое как стрелочная функция
const arrowAdd = (a, b, c) => {
  return a + b + c;
};
Ключевое слово function не используется, вместо этого сразу идёт объявление параметров, 
за которыми следует символ => и тело функции.

Если параметров несколько, то они перечисляются через запятую в круглых скобках, 
между знаками равно = и стрелкой =>.
const add = (a, b, c) => {
  return a + b + c;
};
Если параметров нет, то обязательно должны быть пустые круглые скобки.
const greet = () => {
  console.log('Привет!');
};

Выполни рефакторинг функции calculateTotalPrice() так, 
чтобы она была объявлена как стрелочная.*/
// Пиши код ниже этой строки

const calculateTotalPrice1 = (quantity, pricePerItem) => {
    // Пиши код выше этой строки
    return quantity * pricePerItem;
  };
  console.log(calculateTotalPrice1(5, 100))//500
  




  //Неявный возврат
  /* В стрелочной функции после символа => идёт её тело. Здесь может быть два варианта: 
  с фигурными скобками и без них.
  const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
Если фигурные скобки есть, и функция должна возвращать какое-то значение, 
необходимо явно поставить return. Это называется явный возврат (explicit return). 
Такой синтаксис используется в том случае, если в теле функции нужно выполнить 
ещё какие-то инструкции кроме возврата значения.

const add = (a, b, c) => a + b + c;
Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. 
Это называется неявный возврат (implicit return). 
В примере вернётся результат выражения сложения параметров a, b и c.
// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// После
const arrowAdd = (a, b, c) => a + b + c;

Выполни рефакторинг функции calculateTotalPrice() так, 
чтобы она была объявлена как стрелочная.*/
// Пиши код ниже этой строки
const calculateTotalPrice2 = (quantity, pricePerItem) => quantity * pricePerItem;
  // Пиши код выше этой строки
  console.log(calculateTotalPrice2(8, 60));




  //Стрелочные функции как коллбеки
  /* Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива 
  из-за более краткого синтаксиса объявления, особенно если не нужно тело функции.
  const numbers = [5, 10, 15, 20, 25];

// Объявление функции
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});

// Анонимная стрелочная функция
numbers.forEach((number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
});
Стрелочную коллбек-функцию также можно объявлять отдельно и передавать на неё ссылку. 
Это стоит делать если одна функция используется в нескольих местах программы 
или если она громоздкая.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
};

numbers.forEach(logMessage);

Задание
Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление 
на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() 
на стрелочную функцию.*/
// Пиши код ниже этой строки
const calculateTotalPrice3 = (orderedItems) => {
    let totalPrice = 0;
    orderedItems.forEach(item => {totalPrice += item;});
    return totalPrice;
  };
  // Пиши код выше этой строки
  console.log(calculateTotalPrice3([12, 85, 37, 4]));//138




  //Задача. Фильтрация массива чисел 2.0
  /* Замени объявление функции filterArray() и коллбек для метода forEach() 
  на стрелочные функции.*/
  // Пиши код ниже этой строки
const filterArray1 = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach(number => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
  };
  console.log(filterArray1([12, 24, 8, 41, 76], 38));//[41,76]





  //Задача. Общие элементы 2.0
  /* Замени объявление функции getCommonElements() и коллбек для метода forEach() 
  на стрелочные функции. */
  // Пиши код ниже этой строки
const getCommonElements1 = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach(element => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
  };
  console.log(getCommonElements1([24, 12, 27, 3], [12, 8, 3, 36, 27]));//[12, 27, 3]





  //Чистые функции
  /* Функция с побочными эффектами - это функция которая в процессе выполнения 
  может изменять или использовать глобальные переменные, 
  изменять значение аргументов ссылочного типа, выполнять операции ввода-вывода и т. п.
  const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Произошла мутация исходных данных - массива numbers
console.log(numbers); // [2, 4, 6, 8, 10]

Функция dirtyMultiply(array, value) умножает каждый элемент массива array на число value. 
Она изменяет (мутирует) исходный массив по ссылке.

Чистая функция (pure function) - это функция результат которой зависит 
только от значений переданных аргументов. При одинаковых аргументах она всегда возвращает 
один и тот же результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.

Напишем реализацию чистой функции умножения элементов массива, 
возвращающей новый массив, не изменяя исходный.
const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Не произошло мутации исходных данных
console.log(numbers); // [1, 2, 3, 4, 5]
// Функция вернула новый массив с изменёнными данными
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, 
значение которого это чётное число, добавляя к нему значение параметра value.

Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, 
а создавала, наполняла и возвращала новый массив с обновлёнными значениями.*/
function changeEven(numbers, value) {
    // Пиши код ниже этой строки
    const newNumbers = [];
    numbers.forEach(element => {
    if (element % 2 === 0) {
        newNumbers.push(element += value);
    } else {
        newNumbers.push(element);
    }
});
return newNumbers;
    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] % 2 === 0) {
    //     numbers[i] = numbers[i] + value;
    //   }
    // }
    // Пиши код выше этой строки
  };
  console.log(changeEven([1, 2, 3, 4, 5], 10));




  //Метод map()
  /* Большинство перебирающих методов массива это чистые функции. 
  Они создают новый массив, заполняют его, применяя к значению каждого элемента 
  указанную коллбек-функцию, после чего возвращают этот новый массив.

  Метод map(callback) используется для трансформации массива. 
  Он вызывает коллбек-функцию для каждого элемента исходного массива, 
  а результат её работы записывает в новый массив, 
  который и будет результатом выполнения метода.
  массив.map((element, index, array) => {
  // Тело коллбек-функции
});
Поэлементно перебирает оригинальный массив.
Не изменяет оригинальный массив.
Результат работа коллбек-функции записывается в новый массив.
Возвращает новый массив такой же длины.

Его можно использовать для того, чтобы изменить каждый элемент массива. 
Оригинальный массив используется как эталон, на базе которого можно сделать другую коллекцию.

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// Оригинальный массив не изменился
console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']


Задание
Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. 
Обязательно используй метод map().*/
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths);//[5, 4, 6, 6]





//Метод map() и массив объектов
/* Мы уже знаем что повседневная задача это манипуляция массивом объектов. 
Например, получить массив значений свойства из всех объектов. 
Есть массив студентов, а нужно получить отдельный массив их имён.
const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 }
];

const names = students.map(student => student.name);
console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

Задание
Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг 
(свойство title) из всех объектов массива books.*/
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
  const titles = books.map(book => book.title);
  console.log(titles);




  //Метод flatMap()
  /* Метод flatMap(callback) аналогичен методу map(), но применяется в случаях, 
  когда результат это многомерный массив который необходимо «разгладить».
  
  В массиве students хранится список студентов со списком предметов, 
  которые посещает студент, в свойстве courses. Несколько студентов могут посещать 
  один и тот же предмет. Необходимо составить список всех предметов, 
  которые посещает эта группа студентов, пока даже повторяющихся.
  const students = [
  { name: 'Манго', courses: ['математика', 'физика'] },
  { name: 'Поли', courses: ['информатика', 'математика'] },
  { name: 'Киви', courses: ['физика', 'биология'] },
];

students.map((student) => student.courses);
// [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

students.flatMap((student) => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

Он вызывает коллбек-функцию для каждого элемента исходного массива, 
а результат её работы записывает в новый массив. Отличие от map() в том, 
что новый массив «разглаживается» на глубину равную единице (одна вложенность). 
Этот разглаженный массив и есть результат работы flatMap().

Задание
Используя метод flatMap() сделай так, чтобы в переменной genres получился 
массив всех жанров книг (свойство genres) из массива книг books.*/

const books1 = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
  
  const genres = books1.flatMap(book => book.genres);
  console.log(genres);// массив с жанрами




  //Задача. Имена пользователей
  /* Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

  Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей 
  (свойство name) из массива объектов в параметре users. */
  const Users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
      gender: 'female',
      age: 34,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'male',
      age: 24,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      skills: ['adipisicing', 'irure', 'velit'],
      gender: 'female',
      age: 21,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      skills: ['ex', 'culpa', 'nostrud'],
      gender: 'male',
      age: 27,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      skills: ['lorem', 'veniam', 'culpa'],
      gender: 'female',
      age: 39,
    },
  ];
  // Пиши код ниже этой строки
const getUserNames = users => users.map(user => user.name);
// Пиши код выше этой строки
console.log(getUserNames(Users));//["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]





//Задача. Почты пользователей
// Пиши код ниже этой строки
const getUserEmails = users => users.map(user => user.email);
// Пиши код выше этой строки
console.log(getUserEmails(Users));//["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]





//Методы filter и find
/* Метод filter(callback) используется для единственной операции - фильтрации массива, 
то есть когда необходимо выбрать более одного элемента из коллекции по какому-то критерию.
Не изменяет оригинальный массив.
Поэлементно перебирает оригинальный массив.
Возвращает новый массив.
Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
Если коллбек вернул true элемент добавляется в возвращаемый массив.
Если коллбек вернул false элемент не добавляется в возвращаемый массив.
Если ни один элемент не удовлетворил условию, возвращает пустой массив.
const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []

// Оригинальный массив не изменился
console.log(values); // [51, -3, 27, 21, -68, 42, -37]

То есть метод filter вызывает коллбек-функцию для каждого элемента исходного массива 
и если результат её выполнения true, текущий элемент добавляет в новый массив.

Задание
Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, 
а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().*/
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(value => value % 2 === 0);
const oddNumbers = numbers.filter(value => value % 2 === 1);
console.log(evenNumbers);//[24, 82, 36, 18, 52]





//Фильтрация уникальных элементов
/* Используя метод filter() можно выполнить фильтрацию массива так, 
что в нём останутся только уникальные элементы. Этот приём работает только 
с массивом примитивных значений - не объектов.
Вернёмся к группе студентов и массиву всех посещаемых предметов, 
которые мы получили методом flatMap().
const students = [
  { name: 'Манго', courses: ['математика', 'физика'] },
  { name: 'Поли', courses: ['информатика', 'математика'] },
  { name: 'Киви', courses: ['физика', 'биология'] }
];

const allCourses = students.flatMap(student => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

В переменной allCourses хранится массив всех посещаемых предметов, которые могут повторяться. 
Задача заключается в том, чтобы сделать новый массив, в котором будут только уникальные предметы, 
то есть без повторений.

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);
Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course 
и получаем его индекс в оригинальном массиве всех курсов. 
В параметре index хранится индекс текущего элемента course при переборе массива методом filter.

Если результат indexOf() и значение index равны - это уникальный элемент, 
потому что это первый раз когда такое значение встречается в массиве 
и на текущей итерации фильтр обрабатывает именно его.

# Массив всех курсов
['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
Для элемента 'математика' под индексом 0:

indexOf() вернёт 0, потому что ищет первое совпадение.
Значение параметра index будет 0.
Они равны, значит это уникальный элемент.
Для элемента 'математика' под индексом 3:

indexOf() вернёт 0, потому что ищет первое совпадение.
Значение параметра index будет 3.
Они не равны, значит это повторяющийся - не уникальный элемент.


Задание
Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) 
из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.*/
const books2 = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
  const allGenres = books2.flatMap(book => book.genres);
  console.log(allGenres);//["приключения", "историческое", "фантастика", "мистика", "ужасы", "мистика", "приключения"]
  const uniqueGenres = allGenres.filter((element, index) => allGenres.indexOf(element) === index);
  console.log(uniqueGenres);//["приключения", "историческое", "фантастика", "мистика", "ужасы"]





  //Метод filter() и массив объектов
  /* При работе с массивом объектов выполняется фильтрация по значению какого-то свойства. 
  В результате получается новый массив отфильтрованных объектов.

  Например, есть массив студентов с баллами за тест. 
  Необходимо отфильтровать лучших (балл выше 80), худших (балл ниже 50) 
  и средних студентов (балл от 50 до 80).

  const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Массив объектов с именами Манго и Киви

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Массив с одним объектом Аякс

// В коллбек-функции удобно деструктуризировать свойства объекта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Массив объектов с именами Поли и Хьюстон


Задание
Используя метод filter() дополни код так, чтобы:

В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) 
больше либо равно значению переменной MIN_RATING.
В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) 
которое совпадает со значением в переменной AUTHOR.*/
const books4 = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  
  const MIN_RATING = 8;
  const AUTHOR = 'Бернард Корнуэлл';
  // Пиши код ниже этой строки
  
  const topRatedBooks = books4.filter(({ rating }) => rating >= MIN_RATING);
  console.log(topRatedBooks);
  const booksByAuthor = books4.filter(({ author }) => author === AUTHOR);
  console.log(booksByAuthor);




  //Задача. Пользователи с цветом глаз
  /*Задание
Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она 
возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает 
со значением параметра color.*/

const Users1 = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male'
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female'
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male'
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female'
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male'
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male'
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female'
    }
  ];
  // Пиши код ниже этой строки
  const getUsersWithEyeColor = (users, color) => users.filter((eye) => color === eye.eyeColor).map((user) => user);
// const getUsersWithEyeColor = (users, color) => {
// users.filter(({ user }) => color === user.eyeColor).map(element => element.name);
// };
// Пиши код выше этой строки
console.log(getUsersWithEyeColor(Users1, 'blue'));





//Задача. Пользователи в возрастной категории
/* Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала 
массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.*/
const Users2 = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
      age: 37
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
      age: 34
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
      age: 24
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
      age: 21
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male',
      age: 27
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male',
      age: 38
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
      age: 39
    }
  ];
// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => 
 users.filter(({ age }) => age >= minAge && age < maxAge);
console.log(getUsersWithAge(Users2, 20, 30));//массив объектов пользователей с именами Ryan, Elma, Carey





//Задача. Пользователи с другом
/* Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала 
массив пользователей у которых есть друг с именем в параметре friendName. 
Массив друзей пользователя хранится в свойстве friends.*/
// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => 
   users.filter((user) => user.friends.includes(friendName)) ;
// Пиши код выше этой строки
console.log(getUsersWithFriend(Users2, 'Briana Decker'));//массив объектов пользователей с именами Sharlene Bush и Sheree Anthony





//Задача. Список друзей
/* Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей 
всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья,
 сделай так чтобы возвращаемый массив не содержал повторений. */
 // Пиши код ниже этой строки
// const getFriends = users => users.flatMap(user => user.friends);
// const getFriends = users => users.filter((element, index, users) => users.indexOf(element) === index);
const getFriends = users => users.flatMap(user => user.friends).filter((element, index, users) => users.indexOf(element) === index);
// Пиши код выше этой строки
console.log(getFriends(Users2));//['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman']





//Задача. Активные пользователи
/* Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив 
активных пользователей, значение свойства isActive которых true.*/
const getActiveUsers = (users) => 
   users.filter((user) => user.isActive);

console.log(getActiveUsers(Users2));//массив объектов активных пользователей
//users.filter(({ age }) => age >= minAge && age < maxAge);
//const getUsersWithEyeColor = (users, color) => users.filter((eye) => color === eye.eyeColor).map((user) => user);





//Задача. Неактивные пользователи
const getInactiveUsers = (users) => users.filter((user) => !user.isActive);
console.log(getInactiveUsers(Users2));





//Метод find()
/* Если метод filter(callack) используется для поиска всех элементов удовлетворяющим условию, 
то метод find(callback) позволяет найти и вернуть первый подходящий элемент, 
после чего перебор массива прекращается. То есть он ищет до первого совпадения.
массив.find((element, index, array) => {
  // Тело коллбек-функции
});
Не изменяет оригинальный массив.
Поэлементно перебирает оригинальный массив.
Возвращает первый элемент удовлетворяющий условию, то есть когда коллбек возвращает true.
Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, 
метод возвращает undefined.

Метод find() используется для одной задачи - 
поиска элемента по уникальному значению свойства. Например, поиск пользователя по почте, 
автомобиля по серийному номеру, книги по названию и т. п.
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

colorPickerOptions.find((option) => option.label === 'blue'); // { label: 'blue', color: '#2196F3' }
colorPickerOptions.find((option) => option.label === 'pink'); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.find((option) => option.label === 'white'); // undefined

Задание
Используя метод find() дополни код так, чтобы:

В переменной bookWithTitle получился объект книги название которой (свойство title) 
совпадает со значением переменной BOOK_TITLE.
В переменной bookByAuthor получился объект книги автор который (свойство author) 
совпадает со значением переменной AUTHOR.*/
const books5 = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  ];
  const BOOK_TITLE = 'Сон смешного человека';
  const AUTHOR1 = 'Роберт Шекли';
  // Пиши код ниже этой строки
  
  const bookWithTitle = books5.find((name) => name.title === BOOK_TITLE);
  console.log(bookWithTitle);//{title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75}
  const bookByAuthor = books5.find((name) => name.author === AUTHOR1);
  console.log(bookByAuthor);//{title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51}





  //Задача. Пользователь с почтой
  /* Дополни функцию getUserWithEmail(users, email) так, 
  чтобы она возвращала объект пользователя, 
  почта которого (свойство email) совпадает со значением параметра email.*/
  const getUserWithEmail = (users, email) => 
   users.find((user) => user.email === email);
   //users.filter((user) => user.email === email); вернёт массив с объектом, а find вернёт сам объект

console.log(getUserWithEmail(Users2, 'shereeanthony@kog.com'));//{name: "Sheree Anthony", email: "shereeanthony@kog.com", eyeColor: "brown", friends: Array(2), isActive: true, …}
//const getUsersWithFriend = (users, friendName) => 
//   users.filter((user) => user.friends.includes(friendName)) ;
// Пиши код выше этой строки
//console.log(getUsersWithFriend(Users2, 'Briana Decker'));