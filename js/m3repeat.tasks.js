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



