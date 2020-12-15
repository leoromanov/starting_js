'use strict'

//переопределение значения переменной
let productName = 'Дроид';
let pricePerItem = 2000;

pricePerItem = 3500;
console.log(pricePerItem);

productName = 'Ремонтный дроид';
console.log(productName);

//Типы примитивов (числа, строки, були)
const topSpeed = 160;
const distance = 617.54;
let login = 'mango935';
let isOnline = true;
let isAdmin = false;

//Математические операторы
const pricePerItem1 = 3500;
const orderedQuantity = 4;

// Пиши код ниже этой строки
const totalPrice = pricePerItem1 * orderedQuantity;
console.log(totalPrice);

//Шаблонные строки
const productName1 = 'Дроид';
const pricePerItem2 = 3500;

const message = `Вы выбрали ${productName1}, цена за штуку ${pricePerItem2} кредитов`;
console.log(message);

//Заказ продукта
const pricePerDroid = 800;
let orderedQuantity1 = 6;
let deliveryFee = 50;
let totalPrice1 = pricePerDroid * orderedQuantity1 + deliveryFee;
const message1 = `Вы заказали дроидов на сумму ${totalPrice1} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`
console.log(message1)


//Объявление и вызов функции
function sayHi() {
    console.log('Привет, это моя первая функция!');
}
sayHi();



//Параметры и аргументы
// Пиши код ниже этой строки
function add(a,b,c) {
    console.log(`Результат сложения равен ${a + b + c}`);
    // Пиши код выше этой строки
  }
    
  add(15, 27, 10);
  add(10, 20, 30);
  add(5, 10, 15);


  //Возврат значения
  function add1(a, b, c) {
    //  Пиши код ниже этой строки
    return a + b + c;
  }
  
  add1(2, 5, 8); // 15
  
  console.log(add1(15, 27, 10));
  console.log(add1(10, 20, 30));
  console.log(add1(5, 10, 15));


  
  //Шаблонные строки 2.0
  function makeMessage (name, price) {
    // Пиши код ниже этой строки
     const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
    // Пиши код выше этой строки
    return message;
  };
  console.log(makeMessage('Радар', 6150));
  console.log(makeMessage('Сканер', 3500));
  console.log(makeMessage('Реактор', 8000));
  console.log(makeMessage('Двигатель', 4070));


  //Математические операторы 2.0
  function calculateTotalPrice (orderedQuantity, pricePerItem) {
    // Пиши код ниже этой строки
    const totalPrice = orderedQuantity * pricePerItem;
  
    // Пиши код выше этой строки
    return totalPrice;
  };
  console.log(calculateTotalPrice(5, 100));
  console.log(calculateTotalPrice(8, 60));
  console.log(calculateTotalPrice(3, 400));
  console.log(calculateTotalPrice(1, 3500));
  console.log(calculateTotalPrice(12, 70));



  //Заказ продукта 2.0
  function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Пиши код ниже этой строки
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
    const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`
    // Пиши код выше этой строки
    return message;
  }
  console.log(makeOrderMessage(2, 100, 50));
  console.log(makeOrderMessage(4, 300, 100));
  console.log(makeOrderMessage(10, 70, 200));


  //Операторы сравнения
  function isAdult(age) {
    // Пиши код ниже этой строки
    const passed = age >= 18;
  
    // Пиши код выше этой строки
    return passed;
  }

  console.log(isAdult(20));
  console.log(isAdult(14));
  console.log(isAdult(8));
  console.log(isAdult(37));



  //Операторы сравнения
  function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    // Пиши код ниже этой строки
    const isMatch = SAVED_PASSWORD === password;
  
    // Пиши код выше этой строки
    return isMatch;
  };
  console.log(isValidPassword('mangodab3st'));
  console.log(isValidPassword('jqueryismyjam'));



  //Инструкция if...else
  function checkAge(age) {
    let message;
  
    if (age >= 18) { // Дополни эту строку
      message = 'Вы совершеннолетний человек';
    } else {
      message = 'Вы не совершеннолетний человек';
    }
  
    return message;
  };
  console.log(checkAge(20));
  console.log(checkAge(14));
  


  //Задача: склад товаров
  function checkStorage(available, ordered) {
    let message;
    // Пиши код ниже этой строки
  if (ordered > available) {
      message = 'На складе недостаточно товаров!'
  }
  else {message = 'Заказ оформлен, с вами свяжется менеджер'}
    // Пиши код выше этой строки
    return message;
  };
  console.log(checkStorage(100, 50));
  console.log(checkStorage(150, 180));



  //Оператор присвоения с добавлением/вычитанием/умножением/делением
  let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Пиши код ниже этой строки
a += 2;
b -= 4;
c *= 3;
d /= 10;




//Проверка баланса
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Пиши код ниже этой строки
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
      message = 'Недостаточно средств на счету!'
  }
  else {
      let credits = customerCredits - totalPrice;
      message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${credits} кредитов`
  };
    // Пиши код выше этой строки
    return message;
  };
    console.log(makeTransaction(3000, 5, 23000));
    console.log(makeTransaction(1000, 3, 15000));
    console.log(makeTransaction(2000, 8, 10000));
    console.log(makeTransaction(5000, 10, 8000));



    //Блок else...if
    function checkPassword(password) {
        const ADMIN_PASSWORD = 'jqueryismyjam';
        let message;
      
        if (password === null) { // Дополни эту строку
          message =  'Отменено пользователем!';
        } else if (password === ADMIN_PASSWORD) { // Дополни эту строку
          message = 'Добро пожаловать!';
        } else {
          message = 'Доступ запрещен, неверный пароль!';
        }
      
        return message;
      };
      console.log(checkPassword('mangohackzor'));
      console.log(checkPassword(null));
      console.log(checkPassword('jqueryismyjam'));


      //Задача: склад товаров 2.0
      function checkStorage1(available, ordered) {
        let message;
        // Пиши код ниже этой строки
      if (ordered === 0) {
          message = 'В заказе еще нет товаров';
      } else if (ordered > available) {
          message = 'Слишком большой заказ, на складе недостаточно товаров!';
      } else {
          message = 'Заказ оформлен, с вами свяжется менеджер';
      }
        // Пиши код выше этой строки
        return message;
      };
      console.log(checkStorage1(100, 50));
      console.log(checkStorage1(100, 130));
      console.log(checkStorage1(70, 0));



    //Логическое «И» (оператор &&)
    function isNumberInRange(start, end, number) {
        const isInRange = number >= start && number <= end; // дополни эту строку
      
        return isInRange;
      }

      console.log(isNumberInRange(10, 30, 17));//true
      console.log(isNumberInRange(10, 30, 5));//false

      //Логическое «ИЛИ» (оператор ||)
      function checkIfCanAccessContent(subType) {
        const canAccessContent = subType === 'pro' || subType === 'vip'; // дополни эту строку
      
        return canAccessContent;
      };
      console.log(checkIfCanAccessContent('pro'));
      console.log(checkIfCanAccessContent('starter'));


    
    //Логическое «НЕ» (оператор !)
    function isNumberNotInRange(start, end, number) {
        const isInRange = number >= start && number <= end;
        const isNotInRange = !isInRange; // Дополни эту строку
      
        return isNotInRange;
      };
      console.log(isNumberNotInRange(10, 30, 17));
      console.log(isNumberNotInRange(10, 30, 5));



      //Задача: расчёт скидки
      function getDiscount(totalSpent) {
        const BASE_DISCOUNT = 0;
        const BRONZE_DISCOUNT = 0.02;
        const SILVER_DISCOUNT = 0.05;
        const GOLD_DISCOUNT = 0.1;
        let discount;
        // Пиши код ниже этой строки
      if (totalSpent >= 50000) {
          discount = GOLD_DISCOUNT;
      } else if (totalSpent >= 20000 && totalSpent < 50000) {
          discount = SILVER_DISCOUNT;
      } else if (totalSpent >= 5000 && totalSpent < 20000) {
          discount = BRONZE_DISCOUNT;
      } else if (totalSpent < 5000) {
          discount = BASE_DISCOUNT;
      };
        // Пиши код выше этой строки
        return discount;
      };
      console.log(getDiscount(137000));//0.1
      console.log(getDiscount(46900));//0.05
      console.log(getDiscount(8250));//0.02
      console.log(getDiscount(1300));//0



      //Тернарный оператор
      function checkStorage2(available, ordered) {
        let message;
        // Пиши код ниже этой строки
      message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
        
      
        // Пиши код выше этой строки
        return message;
      };
      console.log(checkStorage2(100, 50));
      console.log(checkStorage(100, 130));



      //Задача: проверка пароля
      function checkPassword1(password) {
        const ADMIN_PASSWORD = 'jqueryismyjam';
        let message;
        // Пиши код ниже этой строки
      message = password === ADMIN_PASSWORD ? 'Доступ разрешен' : 'Доступ запрещён, неверный пароль!';
        // Пиши код выше этой строки
        return message;
      };
      console.log(checkPassword1('jqueryismyjam'));
      console.log(checkPassword('angul4r1sl1f3'));



      //Инструкция switch
      function getSubscriptionPrice(type) {
        let price;
        // Пиши код ниже этой строки
      
       switch (type) { // Дополни эту строку
          case 'starter': // Дополни эту строку
            price = 0; // Дополни эту строку
            break;
      
          case 'professional': // Дополни эту строку
            price = 20; // Дополни эту строку
            break;
      
          case 'organization': // Дополни эту строку
            price = 50; // Дополни эту строку
            break;
        }
      
        // Пиши код выше этой строки
        return price;
      };
      console.log(getSubscriptionPrice('professional'));
      console.log(getSubscriptionPrice('organization'));



      //Инструкция switch c блоком default
      function checkPassword2(password) {
        const ADMIN_PASSWORD = 'jqueryismyjam';
        let message;
      
        switch (password) {
          case null:
            message = 'Отменено пользователем!';
            break;

          case ADMIN_PASSWORD:
            message = 'Добро пожаловать!';
            break;

            default:
              message = 'Доступ запрещён, неверный пароль!';
        };

        // if (password === null) {
        //   message = 'Отменено пользователем!';
        // } else if (password === ADMIN_PASSWORD) {
        //   message = 'Добро пожаловать!';
        // } else {
        //   message = 'Доступ запрещён, неверный пароль!';
        // }
      
        return message;
      };
      console.log(checkPassword2('mangohackzor'));
      console.log(checkPassword(null));
      console.log(checkPassword('jqueryismyjam'));



      //Задача: доставка товара
//       function getShippingCost(country) {
//         const NO_DELIVERY = 'Извините, в вашу страну доставки нет';
//         const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const CHILI = 'Чили';
// const JAMAICA = 'Ямайка';
//         let message;
//         let shippingCost = 0;
//         // Пиши код ниже этой строки
//       switch(country) {
//         case CHINA:
//           shippingCost = 100;
//           break;

//         case CHILI:
//           shippingCost = 250;
//           break;

//         case AUSTRALIA:
//           shippingCost = 170;
//           break;

//         case JAMAICA:
//           shippingCost = 120;
//           break;
      
//           default: 
//           message = NO_DELIVERY;
//       };
//       message = `Доставка в ${country} будет стоить ${shippingCost} кредитов`;
//         return message;
//       };

function getShippingCost(country) {
  let message = "Извините, в вашу страну доставки нет";
  let price;
  // Пиши код ниже этой строки
  switch (country) {
    case "Австралия":
      price = 170;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    case "Китай":
      price = 100;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    case "Чили":
      price = 250;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    case "Ямайка":
      price = 120;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
      
  }
  // Пиши код выше этой строки
  return message;
}

console.log(getShippingCost("Чили"));
      
      console.log(getShippingCost('Австралия'));//Доставка в Австралия будет стоить 170 кредитов
      console.log(getShippingCost('Германия'));



//Длина строки
function getNameLength(name) {
  const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

  return message;
};
console.log(getNameLength('Poly'));



//Индексация элементов строки
const courseTopic = 'JavaSript для начинающих';
// Пиши код ниже этой строки

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// courseTopicLength = 24;
// firstElement = 'J';
// lastElement = 'x';

console.log(courseTopicLength);//24
console.log(firstElement);//J
console.log(lastElement);//x
// Пиши код выше этой строки



//Метод slice()
// Присвой переменной substring выражение создания подстроки длинной length символов 
// (от начала) из строки string.
function getSubstring(string, length) {
  const substring = string.slice(0, length); // Дополни эту строку

  return substring;
};
console.log(getSubstring('Привет мир', 3));



//Форматирование сообщения
function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
if (message.length <= maxLength) {
  return message;
} else if (message.length > maxLength) {
  const cutMessage = message.slice(0, maxLength) + '...';
  return cutMessage
};
// Пиши код выше этой строки
  return result;
};
console.log(formatMessage('Vestibulum facilisis purus nec', 20));



//Методы toLowerCase() и toUpperCase()
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  return normalizedInput;
};
console.log(normalizeInput('Привет Мир'));



//Метод includes()
function checkForName(fullName, name) {
  const result = fullName.includes(name); // Дополни эту строку
   return result;
 };
 console.log(checkForName('Егор Колбасов', 'Егор'));



 //Проверка спама
 function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
 const lowCaseMessage = message.toLowerCase();
 if (lowCaseMessage.includes('spam') || lowCaseMessage.includes('sale')) {
   return true;
 } else {
   return false;
 };
  // Пиши код выше этой строки
  return result;
};
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('Latest technology news'));