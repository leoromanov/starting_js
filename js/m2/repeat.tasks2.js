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



//Гравировка украшений
function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
let totalPrice = message.split(' ').length * pricePerWord;
return totalPrice;
  // Пиши код выше этой строки
};
console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));



//Метод массива join()
function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки
 string = array.join(delimeter);
  // Пиши код выше этой строки
  return string;
};
console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '));



//Генератор slug
function slugify(title) {
  // Пиши код ниже этой строки
 let slugTitle = title.toLowerCase().replace(/\s+/g, '-');
 return slugTitle;

 //или return slugTitle.toLowerCase().split(' ').join('-');
  // Пиши код выше этой строки
};
console.log(slugify('Массивы для новичков'));



//Метод slice()
const fruits5 = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
const firstTwoEls = fruits5.slice(0, 2);
const nonExtremeEls = fruits5.slice(1, fruits.length - 1);
const lastThreeEls = fruits5.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);



//Метод concat()
const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];
const anyClients = ['Leo', 'Seva'];

const allClients = oldClients.concat(newClients, anyClients); // Дополни эту строку
console.log(allClients);//["Манго", "Аякс", "Поли", "Киви", "Персик", "Хьюстон", "Leo", "Seva"]



//Композиция массивов
/* Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива
 со всеми элементами двух исходных firstArray и secondArray. 
 Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть
 копию массива длиной maxLength элементов.

В противном случае функция должна вернуть новый массив целиком.*/
function makeArray(firstArray, secondArray, maxLength) {
  // Пиши код ниже этой строки
let newArray = [];
newArray = firstArray.concat(secondArray);
if (newArray.length > maxLength) {
  
  return newArray.slice(0, maxLength);
} else {
  return newArray;
}
// Пиши код выше этой строки
};
console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));



//Цикл for
/*Функция logNumbersInRange(start, end) логирует все целые числа в диапазоне 
от start до end включительно. Дополни тело функции так, чтобы она работала правильно.*/
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Дополни эту строку
  console.log(i);
};



//Сумма чисел (цикл for)
/*Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) 
и возвращает сумму всех целых чисел от единицы и до этого числа. 
Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.*/
function calculateTotal(number) {
  let summ = 0;
  for (let i = 0; i <= number; i += 1) {
    summ += i;
  };
  return summ;
};
console.log(calculateTotal(3));//6 (т.е. 1+2+3)



//Итерация по массиву
/*Дополни код цикла for так, чтобы он последовательно логировал 
все элементы массива fruits.*/
const fruits6 = ['яблоко', 'слива', 'груша', 'апельсин'];

for (let i = 0; i <= fruits6.length; i += 1) { // Дополни эту строку
  const fruit = fruits6[i]; // Дополни эту строку
  console.log(fruit);
};




//Подсчёт суммы покупки
/*Напиши функцию calculateTotalPrice(order), которая принимает один параметр order 
- массив чисел, и рассчитывает общую сумму его элементов. 
Общая сумма элементов должна сохраняться в переменной total, 
которая возвращается, как результат работы функции.*/
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
    }
  // Пиши код выше этой строки
  return total;
};
console.log(calculateTotalPrice([12, 85, 37, 4]));