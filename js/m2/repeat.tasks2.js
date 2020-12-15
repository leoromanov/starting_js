'use strict'
//Ранний возврат
function checkAge(age) {
    if (age >= 18) { // Дополни эту строку
      return 'Вы совершеннолетний человек';
    }
  
    return 'Вы не совершеннолетний человек';
  };
  console.log(checkAge(20));
  console.log(checkAge(8));


  //Проверка пароля (ранний возврат)
  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    // Пиши код ниже этой строки
  
    if (password === ADMIN_PASSWORD) {
      return 'Добро пожаловать!';
    };
  
    return 'Доступ запрещен, неверный пароль!';
    // Пиши код выше этой строки
  };
  console.log(checkPassword('mangohackzor'));
  console.log(checkPassword('jqueryismyjam'));



  //Склад товаров 3.0
  function checkStorage(available, ordered) {
    // Пиши код ниже этой строки
  
    if (ordered === 0) {
        return 'В заказе еще нет товаров';
      }
    if (ordered > available) {
          return 'Слишком большой заказ, на складе недостаточно товаров!';
      } 
      return 'Заказ оформлен, с вами свяжется менеджер';
    // Пиши код выше этой строки
  };
  console.log(checkStorage(100, 50));
  console.log(checkStorage(100, 130));
  console.log(checkStorage(70, 0));



  //Создание массива
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
  console.log(fruits);



  //Доступ к элементам по индексу
  // Стартовый код
const fruits1 = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
const firstElement = fruits1[0];
const secondElement = fruits1[1];
const lastElement = fruits1[fruits1.length - 1];

console.log(firstElement);
console.log(secondElement);
console.log(lastElement);




//Переопределение значения элемента
const fruits2 = ['яблоко', 'слива', 'груша', 'апельсин'];
fruits2[1] = 'персик';
fruits2[3] = 'банан';
console.log(fruits2);



//Длина массива
const fruits3 = ['яблоко', 'персик', 'груша', 'банан'];
const fruitsArrayLength = fruits3.length;
console.log(fruitsArrayLength);




//Индекс последнего элемента
const fruits4 = ['яблоко', 'персик', 'груша', 'банан'];
const lastElementIndex = fruits4.length - 1;
const lastElement1 = fruits4[lastElementIndex];
console.log(lastElementIndex);
console.log(lastElement1);




//Крайние элементы массива
function getExtremeElements(array) {
    // Пиши код ниже этой строки
    const newArray = [array[0], array[array.length - 1]];

    return newArray;

    // Пиши код выше этой строки
  };
  console.log(getExtremeElements([1, 2, 3, 4, 5]));
  console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']));


  //Метод строк split()
  function splitMessage(message, delimeter) {
    let words;
    // Пиши код ниже этой строки
    words = message.split(delimeter);
    
    
    // Пиши код выше этой строки
    return words;
  };
  console.log(splitMessage('Манго спешит на поезд', ' '));
  console.log(splitMessage('Манго', ''));
