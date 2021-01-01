'use strict'
//Функция как значение
/* Функции не отличаются от чисел, строк или массивов - 
это просто специальный тип данных (объект высшего порядка), 
значение, которое можно хранить в переменной или передавать, как аргумент, 
в другую функцию.
function greet(name) {
  return `Добро пожаловать ${name}.`;
}

/* Вызываем функцию greet 
   и выводим результат в консоль */
//    console.log(greet('Манго'));
   // Добро пожаловать Манго.
   
   /* Выводим функцию greet 
      в консоль не вызывая её */
//    console.log(greet);
   /* 
   ƒ greet() { 
        return `Добро пожаловать ${name}.`; 
   } 
   */
  /* В первом логе мы вызываем функцию greet при помощи круглых скобок и в 
  консоль выводится результат её выполнения. Во втором логе передаётся ссылка 
  на функцию, а не результат её вызова (отсутствуют круглые скобки), 
  поэтому в консоль выводится тело функции. Это значит, что функцию можно 
  присвоить в переменную или передать, как аругмент, другой функции.


Задание
Дополни код так, чтобы в переменной result был результат выполнения функции 
makePizza, а в переменной pointer была ссылка на функцию makePizza.
*/
// function makePizza() {
//     return 'Ваша пицца готовится, ожидайте.';
//   }
//   // Пиши код ниже этой строки
  
//   const result = makePizza();
//   const pointer = makePizza;




  //Колбэк-функции
  /* Функция обратного вызова (callback, колбэк) - это функция, 
  которая передаётся другой функции в качестве аргумента и та, в свою очередь, 
  вызывает переданную функцию.

  Функция высшего порядка(higher order function) - функция, принимающая 
  в качестве параметров другие функции или возвращающая функцию как результат.

  // Колбэк-функция
function greet(name) {
  consle.log(`Добро пожаловать ${name}.`);
}

// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

registerGuest('Манго', greet);

Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена 
в параметр callback и вызвана внутри функции registerGuest через круглые скобки. 
Имя параметра для колбэка может быть произвольным, главное помнить, 
что значением будет функция.

Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) 
колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет 
передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы. */

function deliverPizza(pizzaName) {
    return `Доставляем пиццу ${pizzaName}.`;
  }
  
  function makePizza1(pizzaName) {
    return `Пицца ${pizzaName} готовится, ожидайте...`;
  }
  
  // Пиши код ниже этой строки
  function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
  };
console.log(makeMessage('Роял гранд', makePizza1));//Пицца Роял гранд готовится, ожидайте...




//Инлайн-колбэки
/* Если колбэк-функция маленькая и нужна только для передачи аргументом, 
её можно объявить прямо при вызове функции в которую передаём колбэк. 
Такая функция будет доступна только как значение параметра и больше нигде в коде.
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк
registerGuest('Манго', function greet(name) {
  consle.log(`Добро пожаловать ${name}.`);
});

// Передаём инлайн функцию notify как колбэк
registerGuest('Поли', function notify(name) {
  consle.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
});


Задание
Дополни второй вызов функции makePizza(pizzaName, callback), 
передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), 
которая логирует строку 'Едим пиццу <имя пиццы>'. */

function makePizza(pizzaName, callback) {
    console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
    callback(pizzaName);
  }
  
  makePizza('Роял гранд', function deliverPizza(pizzaName) {
    console.log(`Доставляем пиццу ${pizzaName}.`);
  });
  // Пиши код ниже этой строки
  
  makePizza('Ультрасыр', function eatPizza(pizzaName) {
      console.log(`Едим пиццу ${pizzaName}`);
  });




  //Несколько колбэков
  /* Функция может принимать произвольное количество колбэков. 
  Например, представим что мы пишем логику принятия звонков для телефона. 
  Программа должна включить автоответчик если абонент недоступен, 
  или соединить звонок в противном случае. Доступность абонента будем имитировать 
  генератором случайного числа, чтобы между разными вызовами функции можно было 
  получить различные результаты.
  function processCall(recipient) {
  // Имитируем доступность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
    // Логика активации автоответчика
  } else {
    console.log(`Соединяем с ${recipient}, ожидайте...`);
    // Логика принятия звонка
  }
}

processCall('Манго');

Проблема такого подхода в том, что функция processCall делает слишком много 
и привязывает проверку доступности абонента к двум заранее определённым действиям. 
Что если в будущем вместо автоответчика нужно будет оставлять голограмму?

Мы могли бы написать функцию так, чтобы она возвращала какое-то значение
 и потом по результату её выполнения делать проверки и выполнять нужный код. 
 Но проверки не относятся к внешнему коду и будут его засорять.

Выполним рефакторинг функции так, чтобы она принимала два колбэка 
onAvailable и onNotAvailable, и вызывала их по условию.

function processCall(recipient, onAvailable, onNotAvailable) {
  // Имитируем доступеность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Соединяем с ${name}, ожидайте...`);
  // Логика принятия звонка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
  // Логика активации автоответчика
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступен, записываем голограмму.`);
  // Логика записи голограммы
}

processCall('Манго', takeCall, activateAnsweringMachine);
processCall('Поли', takeCall, leaveHoloMessage);

Колбэки применяются для обработки действий пользователя на странице, 
при обработке запросов на сервер, выполнения заранее неизвестных функций и т. п. 
В этом и заключается их суть - это функции предназначенные для отложенного выполнения.


Задание
Необходимо написать логику обработки заказа пиццы. 
Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами 
два колбэка onSuccess и onError.

Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, 
метод order должен возвращать результат вызова колбэка onError, 
передавая ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.'

Если в свойстве pizzas есть пицца с названием из параметра pizzaName, 
метод order должен возвращать результат вызова колбэка onSuccess, 
передавая ему аргументом имя заказанной пиццы.

После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. 
Пожалуйста ничего там не меняй. */
const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName, onSuccess, onError) {
        if (this.pizzas.includes(pizzaName)) {
            // return onSuccess(pizzaName);
        }
        const error = `В ассортименте нет пиццы с названием ${pizzaName}.`
        // return onError(error);
    //     for (let i = 0; i < this.pizzas.length; i + 1) {
    //         if (pizzaName !== this.pizzas[i]) {
    //             const error = `В ассортименте нет пиццы с названием ${pizzaName}.`
    //             return onError(error);
    //         }
    //     }
    //     return onSuccess(pizzaName);
    },
  };
  function onError() {
      return console.log(error);
      
  };
  function onSuccess() {
      return console.log(pizzaName);
  };
  
  // Пиши код выше этой строки
  
  // Колбэк для onSuccess
  function makePizza2(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
  }
  
  // Колбэк для onError
  function onOrderError(error) {
    return `Ошибка! ${error}`;
  };
  
  // Вызовы метода с колбэками
  pizzaPalace.order('Аль Копчино', makePizza2, onOrderError);
  pizzaPalace.order('Четыре нарезона', makePizza2, onOrderError);
  pizzaPalace.order('Биг майк', makePizza2, onOrderError);
  pizzaPalace.order('Венская', makePizza2, onOrderError);
  
//   console.log(pizzaPalace.order('Аль Копчино', makePizza2, onOrderError));
//   console.log(pizzaPalace.order('Четыре нарезона', makePizza2, onOrderError));
//   console.log(pizzaPalace.order('Биг майк', makePizza2, onOrderError));




  //Контекст вызова функции
  /*
  const bookShelf = {
  authors: ['Бернард Корнуэлл', 'Роберт Шекли'],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ['Бернард Корнуэлл', 'Роберт Шекли']
bookShelf.addAuthor('Ли Танит');
console.log(bookShelf.getAuthors()); // ['Бернард Корнуэлл', 'Роберт Шекли', 'Ли Танит']
*/
const pizzaPalace1 = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    // Пиши код ниже этой строки
    checkPizza(pizzaName) {
        return this.pizzas.includes(pizzaName);
      },
      order(pizzaName) {
        const isPizzaAvailable = this.checkPizza(pizzaName);
    
        if (!isPizzaAvailable) {
          return `В ассортименте нет пиццы с названием «${pizzaName}».`;
        }
    
        return `Заказ принят, готовим пиццу «${pizzaName}».`;
      },
    // Пиши код выше этой строки
  };
  console.log(pizzaPalace1.order('Аль Копчино'));
  console.log(pizzaPalace1.order('Венская'));
  




  //Задача. Аккаунт пользователя
  /* Задание
Перед увольнением разработчик сломал исходный код управления аккаунтами 
пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта 
customer, расставив отсутствующие this при обращении к свойствам объекта. */
const customer = {
    username: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['Burger', 'Pizza', 'Salad'],
    // Пиши код ниже этой строки
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
    // Пиши код выше этой строки
  };
  
  customer.setDiscount(0.15);
  console.log(customer.getDiscount()); // 0.15
  customer.addOrder(5000, 'Steak');
  console.log(customer.getBalance()); // 19750
  console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']
  




  //Метод call
  /* Бывают ситуации когда функцию нужно вызвать в контексте какого-то объекта, 
  при этом функция не является его методом. 
  Для этого у функций есть методы call и apply.

  foo.call(obj, arg1, arg2, ...)

  Метод call вызовет функцию foo так, что в this будет ссылка на объект obj, 
  а также передаст аргументы arg1, arg2 и т. д.
  
  function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = { username: 'Манго' };
const poly = { username: 'Поли' };

greetGuest.call(mango, 'Добро пожаловать');
// Добро пожаловать, Манго.

greetGuest.call(poly, 'С приездом');
// С приездом, Поли. */

/* Сервису приготовления и доставки еды требуется функция генерации сообщений 
о статусе заказа.

Дополни функцию composeMessage(position) так, 
чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. 
Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position 
- позиция элемента в массиве (на единицу больше чем индекс).

Не объявляй дополнительные параметры функции composeMessage(position).

Используй call для вызова функции в контексте одного объекта-заказа.

Используй this в теле функции для доступа к свойствам объекта-заказа 
в контексте которого она была вызывана.

Дополни код так, чтобы в переменной messages, с помощью метода map, 
получился массив сообщений о статусе заказов из массива orders.
*/
const orders = [
    { email: 'solomon@topmail.ua', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'jacob@mail.com', dish: 'Taco' },
  ];
  
  // Пиши код ниже этой строки
  function composeMessage(position) { 
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
  }
  const messages = orders.map((order, index) => composeMessage.call(order, index + 1));

  


  //Метод apply
  /* Метод apply это аналог метода call за исключением того, 
  что синтаксис передачи аргументов требует не перечисление, а массив, 
  даже если аргумент всего один.
  foo.call(obj, arg1, arg2, ...)

foo.apply(obj, [arg1, arg2, ...])

Метод apply вызовет функцию foo так, что в this будет ссылка на объект obj, 
а также передаст элементы массива как отдельные аргументы arg1, arg2 и т. д. 
На практике, в основном используется метод call.
function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = { username: 'Манго' };
const poly = { username: 'Поли' };

greetGuest.apply(mango, ['Добро пожаловать']); // Добро пожаловать, Манго.
greetGuest.apply(poly, ['С приездом']); // С приездом, Поли.

Задание
Выполни рефакторинг кода так, чтобы функция composeMessage(position) 
вызывалась методом apply.*/
const orders3 = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage1(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages1 = orders3.map((order, index) =>
  composeMessage1.apply(order, [index + 1])
);





//Метод bind
/* Методы call и apply вызывают функцию «на месте», то есть сразу. 
Но в случае колбэк-функций, когда необходимо не сразу вызвать функцию, 
а передать ссылку на неё, причём с привязанным контекстом, используется метод bind.

foo.bind(obj, arg1, arg2, ...)

Метод bind создаёт и возвращает копию функции foo с привязанным контекстом obj 
и аргументами arg1, arg2 и т. д. Получается копия функции которую можно 
передать куда угодно и вызвать когда угодно.

function greet(clientName) {
  return `${clientName}, добро пожаловать в «${this.service}».`;
}

const steam = { service: 'Steam' };
const steamGreeter = greet.bind(steam);
steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."

const gmail = { service: 'Gmail' };
const gmailGreeter = greet.bind(gmail);
gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."

Задание
Функция composeMessage(customerName) создаёт приветственные сообщения 
для ресторанов. Дополни код так, чтобы в переменных pizzaPalaceComposer 
и burgerShackComposer были её копии с привязанным контекстом 
к соответствующим объектам.*/
const pizzaPalace2 = {
  company: 'Pizza Palace',
};

const burgerShack = {
  company: 'Burger Shack',
};

function composeMessage2(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

const pizzaPalaceComposer = composeMessage2.bind(pizzaPalace2);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

const burgerShackComposer = composeMessage2.bind(burgerShack);
const burgerShackMessage = burgerShackComposer('Поли');

console.log(pizzaPalaceMessage);





//Метод bind и методы объекта
/* При передаче методов объекта как колбэк-функций, контекст не сохраняется. 
Колбэк это ссылка на метод, которая присваивается как значение параметра, 
вызываемого без объекта.
const customer = {
  firstName: 'Jacob',
  lastName: 'Mercer',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() это вызов метода getFullName без объекта
  console.log(`Обрабатываем заявку от ${callback()}.`);
}

makeMessage(customer.getFullName); // Будет ошибка при вызове функции

В строгом режиме, значение this в методе getFullName, 
при вызове как колбэк-функции callback(), будет undefined. 
При обращении к свойствам firstName и lastName будет ошибка, 
так как undefined это не объект.

Метод bind используется для привязки контекста при передаче методов объекта 
как колбэк-функций. Передадим колбэком не оригинальный метод getFullName, 
а его копию с призанным контекстом к объекту customer.

// ❌ Было
makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// ✅ Стало
makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.

Задание
Сервису рассылки электронной почты необходимо добавить логирование действий 
для сбора статистики. Функция logAndInvokeAction(email, action) ожидает почту 
и действие которое нужно выполнить - ссылку на метод объекта service. 
Сбор статистики симулиуется логированием строки. 
Разберись и дополни код так, чтобы он работал верно.*/
const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

console.log(logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service)));
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/

console.log(logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service)));
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']