// 'use strict'
// //Создание объекта
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// console.log(apartment.descr); //Просторная квартира в центре




// //Вложенные свойства
// const apartment1 = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Генри',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
//   };
//   console.log(apartment1.owner);




//   //Доступ к свойствам через точку
//   const apartment2 = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment2.rating;
//   const aptDescr = apartment2.descr;
//   const aptPrice = apartment2.price;
//   const aptTags = apartment2.tags;
//   console.log(aptTags);
//   // Пиши код выше этой строки




//   //Доступ к вложенным свойствам
//   /* const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3 */
// const apartment3 = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     },
//   };
//   // Пиши код ниже этой строки
// const ownerName = apartment3.owner.name;
// const ownerPhone = apartment3.owner.phone;
// const ownerEmail = apartment3.owner.email;
// const numberOfTags = apartment3.tags.length;
// const firstTag = apartment3.tags[0];
// const lastTag = apartment3.tags[numberOfTags - 1];
// // Пиши код выше этой строки
// console.log(numberOfTags);
// console.log(lastTag);




// //Доступ к свойствам через квадратные скобки
// /* Синтаксис «квадратных скобок» используется значительно реже.
//  Как правило в случаях когда имя свойства заранее неизвестно 
//  или оно хранится в переменной (как значение параметра функции, например).

// На место обращения будет возвращено значение свойства с таким именем.
// Если в объекте нет свойства с таким именем, 
// на место обращения вернётся undefined. */
// const apartment4 = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating1 = apartment4['rating'];
//   const aptDescr1 = apartment4['descr'];
//   const aptPrice1 = apartment4['price'];
//   const aptTags1 = apartment4['tags'];
//   // Пиши код выше этой строки




  //Изменение значения свойства
  const apartment = {
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
  apartment.price = 5000;
  apartment.rating = 4.7;
  apartment.owner.name = 'Генри Сибола'
  apartment.tags.push('trusted');
  console.log(apartment.tags);
  console.log(apartment.rating);





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