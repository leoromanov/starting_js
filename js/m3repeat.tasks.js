'use strict'
//Создание объекта
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
};

console.log(apartment.descr); //Просторная квартира в центре




//Вложенные свойства
const apartment1 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
        name: 'Генри',
        phone: '982-126-1588',
        email: 'henry.carter@aptmail.com',
    },
  };
  console.log(apartment1.owner);




  //Доступ к свойствам через точку
  const apartment2 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  // Пиши код ниже этой строки
  const aptRating = apartment2.rating;
  const aptDescr = apartment2.descr;
  const aptPrice = apartment2.price;
  const aptTags = apartment2.tags;
  console.log(aptTags);
  // Пиши код выше этой строки




  //Доступ к вложенным свойствам
  /* const hobbies = user.hobbies;
console.log(hobbies); // ['swiming', 'music', 'sci-fi']

const firstHobby = user.hobbies[0];
console.log(firstHobby); // 'swiming'

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3 */
const apartment3 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
      name: 'Генри',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com',
    },
  };
  // Пиши код ниже этой строки
const ownerName = apartment3.owner.name;
const ownerPhone = apartment3.owner.phone;
const ownerEmail = apartment3.owner.email;
const numberOfTags = apartment3.tags.length;
const firstTag = apartment3.tags[0];
const lastTag = apartment3.tags[numberOfTags - 1];
// Пиши код выше этой строки
console.log(numberOfTags);
console.log(lastTag);




//Доступ к свойствам через квадратные скобки
/* Синтаксис «квадратных скобок» используется значительно реже.
 Как правило в случаях когда имя свойства заранее неизвестно 
 или оно хранится в переменной (как значение параметра функции, например).

На место обращения будет возвращено значение свойства с таким именем.
Если в объекте нет свойства с таким именем, 
на место обращения вернётся undefined. */
const apartment4 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  // Пиши код ниже этой строки
  const aptRating1 = apartment4['rating'];
  const aptDescr1 = apartment4['descr'];
  const aptPrice1 = apartment4['price'];
  const aptTags1 = apartment4['tags'];
  // Пиши код выше этой строки




  //Изменение значения свойства
  const apartment5 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
      name: 'Генри',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com'
    }
  };
  apartment5.price = 5000;
  apartment5.rating = 4.7;
  apartment5.owner.name = 'Генри Сибола'
  apartment5.tags.push('trusted');
  console.log(apartment5.tags);
  console.log(apartment5.rating);





  //Добавление свойств
  const apartment6 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4.7,
    price: 5000,
    tags: ['premium', 'promoted', 'top', 'trusted'],
    owner: {
      name: 'Генри Сибола',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com'
    }
  };
  // Пиши код ниже этой строки
apartment6.area = 60;
apartment6.rooms = 3;
apartment6.location = {
    country: 'Ямайка',
    city: 'Кингстон',
};
console.log(apartment6.location.country);




//Короткие свойства
/* Дополни код объявления объекта так, чтобы у него были свойства name,
 price, image и tags со значениями из переменных с аналогичными именами.
  Обязательно используй синтаксис коротких свойств. */
  const name = 'Ремонтный дроид';
  const price = 2500;
  const image = 'https://via.placeholder.com/640x480';
  const tags = ['on sale', 'trending', 'best buy'];
  
  const product = {
    // Пиши код ниже этой строки
  name,
  price,
  image,
  tags
    // Пиши код выше этой строки
  };
  console.log(product.price);




  //Вычисляемые свойства
  /* Бывают ситуации, когда при объявлении обьекта необходимо добавить 
  свойство с именем, которое мы заранее не знаем, потому что оно хранится 
  как значение переменной или как результат выполнения функции. 
  Синтаксис вычисляемых свойств (computed properties) помогает избежать 
  лишнего кода и в некоторых случаях упростить его. 
  Значением вычисляемого свойства может быть любое валидное выражение.
  const propName = 'name';
    const user = {
    age: 25,
    // Имя этого свойства будет взято из значения переменной propName
    [propName]: 'Генри Сибола'
};

console.log(user.name); // 'Генри Сибола'*/
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Пиши код ниже этой строки
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam'
  // Пиши код выше этой строки
};
console.log(credentials.email);//henry.carter@aptmail.com
console.log(credentials.password);//jqueryismyjam




//Цикл for...in !!!!!!!!!!!!!!!!!!
/* 
for (key in object) {
  // инструкции
}
Переменная key доступная только в теле цикла.
На каждой итерации в неё будет записано значение ключа (имя) свойства. 
Для того чтобы получить значение свойства с таким ключом (именем), 
используется синтаксис квадратных скобок.
const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book[key]);
}
*/
const apartment7 = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  // Пиши код ниже этой строки
  for (const key in apartment7) {
      keys.push(key);
      values.push(apartment7[key]);
  };
  console.log(keys);//["descr", "rating", "price"]
  console.log(values);//["Просторная квартира в центре", 4, 2153]




  //Метод hasOwnProperty()
  /*
  Разберём концепцию собственных и несобственных свойств объекта 
  и научимся правильно использовать цикл for...in.
  const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4
Метод Object.create(animal) создаёт и возвращает новый объект, 
связывая его с объектом animal. Поэтому можно получить значение свойства legs 
обратившись к нему как dog.legs, хотя его нет в объекте dog 
- это несобственное свойство из объекта animal.
Оператор in, который используется в цикле for...in, не делает различия между 
собственными и несобственными свойствами объекта. 
Эта особенность мешает, так как мы всегда хотим перебрать только 
собственные свойства. Для того чтобы узнать есть в объекте собственное свойство
или нет, используется метод hasOwnProperty(key), 
который возвращает true или false.
// ❌ Возвращает true для всех свойств
console.log('name' in dog); // true
console.log('legs' in dog); // true

// ✅ Возвращает true только для собственных свойств
console.log(dog.hasOwnProperty('name')); // true
console.log(dog.hasOwnProperty('legs')); // false

Поэтому при переборе циклом for...in необходимо на каждой итерации добавить 
проверку на собственное свойство. Даже если сейчас мы уверены в том,
 что у объекта нет несобственных свойств, это оградит от возможных ошибок в будущем.

 const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};

for (const key in book) {
  // Если это собственное свойство - выполняем тело if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // Если это не собственное свойство - ничего не делаем
}
*/

//Выполни рефакторинг решения предыдущего задания добавив в цикл for...in 
//проверку на собственное свойство.
const keys1 = [];
const values1 = [];
const advert = {
  service: 'apt',
};
const apartment8 = Object.create(advert);
apartment8.descr = 'Просторная квартира в центре';
apartment8.rating = 4;
apartment8.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
if (apartment8.hasOwnProperty(key)){
  keys1.push(key);
  values1.push(apartment8[key]);
    }
  // Пиши код выше этой строки
};
console.log(advert);//{service: "apt"}
console.log(apartment8);//{descr: "Просторная квартира в центре", rating: 4, price: 2153}
console.log(keys1);//["descr", "rating", "price"]
console.log(values1);//["Просторная квартира в центре", 4, 2153]




//Задача. Подсчёт свойств
/*
Напиши функцию countProps(object), которая считает и возвращает 
количество собственных свойств объекта в параметре object. 
Используй переменную propCount для хранения количества свойств объекта.
*/
function countProps(object) {
    let propCount = 0;
    // Пиши код ниже этой строки
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
          propCount += 1;
        }
      }
    // Пиши код выше этой строки
    return propCount;
  };
  console.log(countProps({ name: 'Mango', age: 2 }));//2
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));//3





  //Метод Object.keys()
  /*
  Object.keys(obj), который принимает объект и возвращает массив ключей 
  его собственных свойств. Если в объекте нет свойств, метод вернёт пустой массив.
  const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства 
объекта, не прибегая к использованию архаического цикла for...in с проверками принадлежности свойств.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(book[key]);
};

Мы перебираем массив ключей объекта и на каждой итерации получаем 
значение свойства с таким ключом.

Задание
Перебери объект apartment используя метод Object.keys() и цикл for...of. 
Запиши в переменную keys массив ключей собственных свойств объекта apartment, 
и добавь в массив values все значения его свойств.
*/

const apartment9 = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values9 = [];
// Пиши код ниже этой строки
const keys9 = Object.keys(apartment9);

for (const key of keys9) {
  values.push(apartment9[key]); 
};
console.log(keys9);//["descr", "rating", "price"]
console.log(values9);//["Просторная квартира в центре", 4, 2153]




//Задача. Подсчёт свойств 2.0
//Выполни рефакторинг функции countProps(object) используя метод Object.keys() 
//и, возможно, цикл for...of.
function countProps1(object) {
  // Пиши код ниже этой строки
  // let propCount = 0;

  const keys10 = Object.keys(object);
  return keys10.length;
  // for (const key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     propCount += 1;
  //   }
  // }
  //return propCount
  
  // Пиши код выше этой строки
};
console.log(countProps1({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));





//Метод Object.values()
/*
Если метод Object.keys(obj) возвращает массив ключей собственных свойств объекта, 
то метод Object.values(obj) возвращает массив значений его собственных свойств. 
Если в объекте нет свойств, метод Object.values(obj) вернёт пустой массив.
const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

const values = Object.values(book);
console.log(values); // ['Последнее королевство', 'Бернард Корнуэлл', 8.38]
*/
const apartment11 = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
// Пиши код ниже этой строки
const keys11 = Object.keys(apartment11);//["descr", "rating", "price"]
const values11 = Object.values(apartment11);//["Просторная квартира в центре", 4, 2153]
console.log(keys11);
console.log(values11);




//Задача. Расходы на зарплату
/* Задание
Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, 
где имя свойства это имя сотрудника, а значение свойства это зарплата. 
Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. 
Используй переменную totalSalary для хранения общей суммы зарплаты. */
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
const salaryArray = Object.values(salaries);
let key1 = 0;
for (key1 of salaryArray) {
  totalSalary += key1;
}
  // Пиши код выше этой строки
  return totalSalary;
};
console.log(countTotalSalary({}));//0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));//330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));//400





//Массив объектов
/* В стандартный набор повседневных задач разработчика входит 
манипуляция массивом однотипных объектов. 
Это значит что все объекты в массиве гарантированно будут иметь 
одинаковый набор свойств, но с разными значениями.
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    rating: 8.38,
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    rating: 8.51,
  },
  {
    title: 'Сон смешного человека',
    author: 'Федор Достоевский',
    rating: 7.75,
  },
];
Для перебора такого массива используется стандартный цикл for...of. 
Значения свойств каждого объекта можно получить используя синтаксис «через точку», 
так как в каждом объекте набор свойств и их имена будут одинаковые, 
отличаются только значения.
for (const book of books) {
  // Объект книги
  console.log(book);
  // Название
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
};

Задание
Перебери массив объектов colors используя цикл for...of. 
Добавь в массив hexColors значения свойств hex, 
а в массив rgbColors значения свойств rgb из всех объектов массива colors.
*/
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
};
console.log(hexColors);
console.log(rgbColors);





//Задача. Поиск объекта по значению свойства
/* Напиши функцию getProductPrice(productName) которая принимает один параметр 
productName - название продукта. 
Функция ищет объект продукта с таким именем (свойство name) в массиве products 
и возвращает его цену (свойство price). 
Если продукт с таким названием не найден, функция должна возвращать null.
*/
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  for (const product of products) {
    if (productName === product.name) {  
      // console.log(product.price);
      return product.price;
    } 
    
  } 
  return null
  // Пиши код выше этой строки
};
console.log(getProductPrice('Радар'));
console.log(getProductPrice('Захват'));
console.log(getProductPrice('Двигатель'));




//Задача. Коллекция значений свойства
/* Напиши функцию getAllPropValues(propName) которая принимает 
один параметр propName - имя (ключ) свойства. 
Функция должна вернуть массив всех значений свойства с таким именем 
из каждого объекта в массиве products. 
Если в объектах нет свойства с таким именем, 
функция должна вернуть пустой массив. */
const products1 = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  let propArray = [];
  for (const product of products1) {
    for (const key in product) {
      if (propName === key) {
        // const value = Object.values(product);
        propArray.push(product[key]);
      }
    }
  }
  return propArray;
};
console.log(getAllPropValues('name'));//[ 'Радар', 'Сканер', 'Дроид', 'Захват' ]
console.log(getAllPropValues('category'));// []
console.log(getAllPropValues('quantity')); //[ 4, 3, 7, 9 ]




//Задача. Общая стоимость товара
/* Напиши функцию calculateTotalPrice(productName) которая принимает 
один параметр productName - название товара. Функция должна вернуть 
общую стоимость (цена * количество) товара с таким именем из массива products. */
const products2 = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
let totalPrice = 0;
for (const product of products2) {
  if (productName === product.name) {
    totalPrice = product.price * product.quantity;
  }
}
return totalPrice;

  // Пиши код выше этой строки
};
console.log(calculateTotalPrice('Радар'));//5200
console.log(calculateTotalPrice('Бластер'));//0




//Деструктуризация объектов
/* 
const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  public: true,
  rating: 8.38,
};

const accessType = book.public ? 'публичном' : 'закрытом';
const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;

Деструктуризация позволяет «распаковать» значения свойств объекта
в локальные переменные. Это делает код в месте их использования менее «шумным».
*/
// const book = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл',
//   genres: ['историческая проза', 'приключения'],
//   public: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, public, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = public ? 'публичном' : 'закрытом';
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
/* Деструктуризация всегда находится в левой части операции присвоения. 
Переменным внутри фигурных скобок присваиваются значения свойств объекта. 
Если имя переменной и имя свойства совпадают, то происходит присваивание, 
в противном случае ей будет присвоено undefined. 
Порядок объявления переменных в фигурных скобках не важен. */

//Задание
/* Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю 
температуру за три дня (meanTemperature). 
Замени объявления переменных yesterday, today и tomorrow 
одной операцией деструктуризации свойств объекта highTemperatures.
*/
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const { yesterday, today, tomorrow } = highTemperatures;
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);//29
console.log(yesterday);//28




//Значения по умолчанию
/* Задание
В прогнозе максимальных температур также может быть необязательное свойство icon 
- иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon 
одной операцией деструктуризации свойств объекта highTemperatures. 
Задай значение по умолчанию для icon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'. */
const highTemperatures1 = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

/* const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
} = highTemperatures1; */
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;

// Пиши код выше этой строки
const meanTemperature1 = (yesterday + today + tomorrow) / 3;




//Изменение имени переменной
/* const firstBook = {
  title: 'Последнее королевство',
  coverImage:
    'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
};

const {
  title: firstTitle, //создать переменную firstTitle, 
                     //в которую поместить значение св-ва title из объекта firstBook
  coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
} = firstBook;

console.log(firstTitle); // Последнее королевство
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: 'Сон смешного человека',
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
} = secondBook;

console.log(secondTitle); // Сон смешного человека
console.log(secondCoverImage); // https://via.placeholder.com/640/480 




Задание
Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon 
одной операцией деструктуризации свойств объекта highTemperatures. 
Задай значение по умолчанию для highIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.*/
const highTemperatures2 = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {
  yesterday: highYesterday,
  tomorrow: highTomorrow,
  today: highToday,
  highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
} = highTemperatures2;
// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// Пиши код выше этой строки
const meanTemperature2 = (highYesterday + highToday + highTomorrow) / 3;




//Деструктуризация в циклах
/* for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
};
Если в объекте немного свойств, деструктуризацию можно выполнить 
прямо в месте объявления переменной book.
for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
};
*/
const colors1 = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors1 = [];
const rgbColors1 = [];
// Пиши код ниже этой строки

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
};
console.log(rgbColors);//['244,67,54', '33,150,243', '76,175,80', '255,235,59']




//Глубокая деструктуризация
/* 
const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308
*/



//Задание: выполнить рефакторинг в глубокой дестркуктуризацией
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки
const {
  today: { low: lowToday, high: highToday1, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
  tomorrow: { low: lowTomorrow, high: highTomorrow1, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
} = forecast;
// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;




//Паттерн «Объект настроек»
/* function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Делаем что-то с параметрами
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}

// ❌ Что такое 736? Что такое 10283? Что такое true?
doStuffWithBook('Последнее королевство', 736, 10283, 8.38, true);

Паттерн «Объект настроек» помогает решить эту проблему, 
заменяя набор параметров всего одним - объектом с именованными свойствами.
Ещё один плюс в том, что можно деструктуризировать объект в параметре book.

// Это можно сделать в теле функции.
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, public } = book;
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}

// Или в сигнатуре (подписи), разницы нет.
function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
  console.log(title);
  console.log(numberOfPages);
  // И так далее
};
*/
function calculateMeanTemperature(forecast) {
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;
const {
  today: { low: todayLow, high: todayHigh },
  tomorrow: { low: tomorrowLow, high: tomorrowHigh }
} = forecast;
  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
};
console.log(calculateMeanTemperature({ 
  today: {low: 28, high: 32}, 
  tomorrow: {low: 25, high: 29} }));//28.5





  //Операция spread при передаче аргументов
  /* Можно привести аналогию с ящиком яблок. 
  Поставив ящик на пол не вынимая из него яблоки, получим аналог массива значений. 
  Если высыпать яблоки из ящика на пол, 
  произойдёт распыление - набор отдельных значений.

  Отличие всего одно - в JavaScript распыление не изменяет оригинальную коллекцию, 
  то есть делается копия каждого элемента. 
  После распыления останется и ящик полный яблок, и копия каждого яблока на полу.
  
const temps = [14, -4, 25, 8, 11];

// В консоли будет массив
console.log(temps);
// ❌ Так не сработает, потому что передаём целый массив
console.log(Math.max(temps)); // NaN

// В консоли будет набор отдельных чисел
console.log(...temps);
// ✅ Распылим коллекцию элементов как отдельные аргументы
console.log(Math.max(...temps)); // 25

То есть запись Math.max(...[14, -4, 25, 8, 11]), 
после интерпретации превращается в Math.max(14, -4, 25, 8, 11) 
- синтаксис ... возвращает распакованный массив, 
то есть распыляет его элементы как отдельные аргументы.

Задание
В переменной scores хранится массив результатов тестирования. 
Используя распыление и методы Math.max() и Math.min() дополни код так, 
чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.
*/
const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);
console.log(bestScore);//93




//Операция spread при создании нового массива
/* Операция spread позволяет создать копию массива или «склеить» 
произвольное количество массивов в один новый. 
Раньше для этого использовали методы slice() и concat(), 
но операция распыления позволяет сделать тоже самое в более краткой форме.

const temps = [14, -4, 25, 8, 11];
// Это точная, но независимая копия массива temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

Распыление двух массивов в один новый
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

Задание
В переменных firstGroupScores, secondGroupScores и thirdGroupScores 
хранятся результаты тестирования отдельных групп. 
Используя распыление дополни код так, чтобы:

В переменной allScores хранился массив всех результатов от первой до третьей группы.
В переменной bestScore был самый высокий общий балл.
В переменной worstScore был самый низкий общий балл.
*/
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore1 = Math.max(...allScores);
const worstScore1 = Math.min(...allScores);
console.log(allScores);





//Операция spread при создании нового объекта
/* Операция spread позволяет распылить свойства произвольного количества объектов 
в один новый.
const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }
Порядок распыления имеет значение. Имена свойств объекта уникальные, 
поэтому свойства распыляемого объекта могут перезаписать значение уже 
существующего свойства, если их имена совпадают.

Во время распыления можно добавлять свойства в произвольное место.
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

Задание
В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию
 которые хранятся в переменной defaultSettings. 
 Во время создания теста, все или часть настроек можно переопределить, 
 они хранятся в переменной overrideSettings.

Для того чтобы получить финальные настройки теста, 
необходимо взять настройки по умолчанию и поверх них применить 
переопределённые настройки. Дополни код так, 
чтобы в переменной finalSettings получился объект финальных настроек теста.
*/
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = { ...defaultSettings, ...overrideSettings };
console.log(finalSettings.theme);





//Задача. Карточки задач
/* Напиши функцию makeTask(data) которая принимает один параметр data 
- объект со следующими свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.
Функция должна составить и вернуть новый объект задачи, 
не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, 
значение которого хранится в одноимённой локальной переменной.

В параметре data гарантированно будет только свойство text, 
а остальные два, category и priority, могут отсутствовать. 
Тогда, в новом объекте задачи, в свойствах category и priority должны быть 
значения по умолчанию, хранящиеся в одноимённых локальных переменных. */
function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки

const finalData = {
  category: category,
  priority: priority,
  ...data,
  completed: completed
};
return finalData
  // Пиши код выше этой строки
};
console.log(makeTask({}));//{category: "Общее", priority: "Обычный", completed: false}
console.log(makeTask({ 
  category: 'Домашнее', 
  priority: 'Низкий', 
  text: 'Вынести мусор' }));//{category: "Домашнее", priority: "Низкий", text: "Вынести мусор", completed: false}




  //Операция rest для сбора всех аргументов функции
/* Вернёмся к аналогии с яблоками. Если на полу лежат яблоки и у нас есть 
пустой ящик, то операция rest позволит «собрать» яблоки в ящик. 
При этом оригинальные яблоки останутся на полу, 
а в ящике будет копия каждого яблока.

Одна из областей применения операции rest это создание функций 
которые могут принимать произвольное количество аргументов.

// Как объявить параметры функции так,
// чтобы можно было передать любое кол-во аргументов?
function multiply() {
  // ...
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

Если убрать весь «синтаксический шум» и посмотреть на аргументы и параметры функции, 
то аргументы находятся в правой части операции присваивания, 
а параметры в левой, потому что значения аргументов присваиваются 
объявленным параметрам. Значит можно «собрать» все аргументы функции 
в один параметр используя операцию rest.
function multiply(...args) {
  console.log(args); // массив всех аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

Задание
Используя операцию rest дополни код функции add() так, 
чтобы она принимала любое количество аргументов, считала и возвращала их сумму. */
// Пиши код ниже этой строки
function add(...args) {
  // console.log(args);
  let summ = 0;
  for (let i = 0; i < args.length; i++) {
    summ += args[i]
  }
  return summ;
  // Пиши код выше этой строки
};
console.log(add(15, 27));





//Операция rest для сбора части аргументов функции
/*
function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4); 


Задание
Функция addOverNum() считает сумму всех аргументов. 
Измени параметры и тело функции addOverNum() так, чтобы она считала сумму 
только тех аргументов, которые больше чем заданное число. 
Это число должно быть первым параметром функции.
*/
function addOverNum(firstPar, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstPar){
    total += arg;
    }
  }

  return total;
  // Пиши код выше этой строки
};
console.log(addOverNum(50, 15, 27));//0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));//71
console.log(addOverNum(15, 32, 6, 13, 19, 8));//51




//Задача. Массив совпадений
// Пиши код ниже этой строки
function findMatches(array, ...args) {
  const matches = []; // Не изменяй эту строку
for (let i = 0; i < args.length; i += 1) {
  if (array.includes(args[i])) {
    matches.push(args[i]);
  }
}
  // Пиши код выше этой строки
  return matches;
};
console.log(findMatches([1, 2, 3, 4, 5], 8, 1, 2, 7));//[1, 2]
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));




//Методы объекта
const bookShelf = {
  // Пиши код ниже этой строки
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  removeBook(bookName) {
    return `Удаляем книгу ${bookName}`
  },
  updateBook (oldName, newName) {
    return `Обновляем книгу ${oldName} на ${newName}`
  }
  // Пиши код выше этой строки
};
console.log(bookShelf.addBook('Мгла'));
console.log(bookShelf.addBook('Преступление и наказание'));
console.log(bookShelf.books);//["Последнее королевство", "Страж снов"]




//Доступ к свойствам объекта в его методах
/* Для того, чтобы получить доступ к свойствам объекта в методах, 
мы обращаемся к нему через this и дальше как обычно - «через точку» к свойствам.

const bookShelf = {
  books: ['Последнее королевство'],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // []
bookShelf.addBook('Мгла');
bookShelf.addBook('Страж снов');
console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Мгла', 'Страж снов']
bookShelf.removeBook('Мгла');
console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Страж снов']
*/

const bookShelf1 = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    // Пиши код выше этой строки
  },
};
bookShelf1.updateBook('Мгла', 'Хроники подземелий');
console.log(bookShelf1.books);//["Последнее королевство", "Хроники подземелий", "Страж снов"]





//Задача. Лавка зелий «У старой жабы»
/* Задание
К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу 
для ведения инвентаря - добавления, удаления, поиска и обновления зелий. 
Добавь объекту atTheOldToad свойство potions, 
значением которого сделай пустой массив. */
const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: []
  // Пиши код выше этой строки
};




//Задача. Получаем все зелья
//Добавь объекту atTheOldToad метод getPotions(), 
//который просто возвращает значение свойства potions.
const atTheOldToad1 = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  getPotions() {
    return this.potions
  }
  // Пиши код выше этой строки
};
console.log(atTheOldToad1.getPotions);//ƒ getPotions() {return this.potions}
console.log(atTheOldToad1.getPotions());//["Зелье скорости", "Дыхание дракона", "Каменная кожа"]




//Задача. Добавляем новое зелье
//Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName 
//в конец массива зелий в свойстве potions.
const atTheOldToad2 = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    return this.potions.push(potionName)
    // Пиши код выше этой строки
  },
};
atTheOldToad2.addPotion('Невидимка');
console.log(atTheOldToad2.potions);




//Задача. Удаляем зелье
//Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName 
//из массива зелий в свойстве potions.
const atTheOldToad3 = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1)
    // Пиши код выше этой строки
  },
};
console.log(atTheOldToad3.removePotion('Дыхание дракона'));
console.log(atTheOldToad3.potions);//["Зелье скорости", "Каменная кожа"]




//Задача. Обновляем зелье
//Дополни метод updatePotionName(oldName, newName) так, чтобы он 
//обновлял название зелья с oldName на newName, 
//в массиве зелий в свойстве potions.
const atTheOldToad4 = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);
    // Пиши код выше этой строки
  },
};
console.log(atTheOldToad4.updatePotionName('Дыхание дракона', 'Полиморф'));
console.log(atTheOldToad4.potions);//["Зелье скорости", "Полиморф", "Каменная кожа"]




//Задача. Расширяем инвентарь
/* Заказчица хочет чтобы каждое зелье было представлено не только именем, 
но и ценой, а в будущем может быть и другими характеристиками. 
Поэтому теперь в свойстве potions будет храниться массив объектов 
со следующими свойствами.
{
  name: 'Дыхание дракона',
  price: 700
}
Выполни рефакторинг методов объекта atTheOldToad так, 
чтобы они работали не с массивом строк, а с массивом объектов.

getPotions() - метод для получения всех зелий. 
Возвращает значение свойства potions.

addPotion(newPotion) - добавляет зелье newPotion (уже объект) 
в массив в свойстве potions.

removePotion(potionName) - удаляет объект зелья с именем potionName 
из массива в свойстве potions.

updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья 
с названием oldName на newName в массиве potions.
*/
const atTheOldToad5 = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    } else {
      this.potions.push(newPotion);
    }  
  },
  removePotion(potionName) {
       for (const potion of this.potions) {
           if (potion.name === potionName) {
               const potionIndex = this.potions.indexOf(potion);
               console.log(potionIndex)
               this.potions.splice(potionIndex, 1);
               return;
           }   
       }
        return `Зелья ${ potionName } нет в инвентаре!`;
  },
updatePotionName(oldName, newName) {
  for (const potion of this.potions) {
      if (potion.name === oldName) {
          potion.name = newName;
           return;
       } 
  }
  return `Зелья ${oldName} нет в инвентаре!`;
},
  // Пиши код выше этой строки
};
console.log(atTheOldToad5.getPotions());
atTheOldToad5.updatePotionName('Каменная кожа', 'Зелье неуязвимости');
