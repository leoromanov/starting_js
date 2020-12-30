'use strict'
//Прототип объекта и метод Object.create()
/* Объекты можно организовать в цепочки так, чтобы свойство не найденное в одном 
объекте, автоматически искалось бы в другом. Связующим звеном выступает 
специальное скрытое свойство [[Prototype]], которое в консоли браузера 
отображается как __proto__.

const animal = {
  legs: 4
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); // { name: 'Манго', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true

Метод Object.create(obj) создаёт и возвращает новый объект, 
связывая его с объектом obj. Объект, на который указывает ссылка в __proto__, 
называется прототипом. В нашем примере объект animal это прототип для объекта dog. 
Метод isPrototypeOf() проверяет является ли объект animal прототипом для dog 
и возвращает true или false.

console.log(dog.hasOwnProperty('name')); // true
console.log(dog.name); // 'Манго'

console.log(dog.hasOwnProperty('legs')); // false
console.log(dog.legs); // 4

Обращение dog.name работает очевидным образом - возвращает собственное свойство name 
объекта dog. При обращении к dog.legs интерпретатор ищет свойство legs 
в объекте dog, не находит и продолжает поиск в объекте по ссылке из 
dog.__proto__, то есть, в данном случае, в объекте animal - его прототипе.

Поиск свойства выполняется до первого совпадения. 
Интерпретатор ищет свойство по имени в объекте, если не находит, 
то обращается к свойству __proto__, т. е. переходит по ссылке к объекту-прототипу, 
а затем и прототипу прототипа. Если интерпретатор доберется до конца цепочки 
и не найдет свойства с таким именем, то вернёт undefined.

Задание
Измени код так, чтобы объект parent стал прототипом 
для объекта в переменной сhild.*/

const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;

console.log(parent.hasOwnProperty('heritage'))
console.log(child.name);





//Задача. Цепочка прототипов
/* Измени код, построив цепочку прототипов так, чтобы объект ancestor 
был прототипом для parent, а тот в свою очередь был прототипом для child. */

const ancestor = {
    name: 'Paul',
    age: 83,
    surname: 'Dawson',
    heritage: 'Irish'
  };
  // Пиши код ниже этой строки
  
  const parent1 = Object.create(ancestor);
  parent1.name = 'Stacey';
  parent1.surname = 'Moore';
  parent1.age = 54;
  
  const child1 = Object.create(parent);
  child1.name = 'Jason';
  child1.age = 27;
  
  // Пиши код выше этой строки
  console.log(parent1.surname);//'Moore'
  console.log(parent1.hasOwnProperty('surname'));//true
  console.log(parent1.hasOwnProperty('heritage'));//false
  console.log(child1.hasOwnProperty('surname'));//false
  console.log(child1.surname);//'Moore'




  //Функция-конструктор
  /* Синтаксис литерала объекта позволяет создать один объект. 
  Но часто нужно создать много однотипных объектов с одинаковым набором свойств, 
  но разными значениями, и методами для взаимодействия со свойствами. 
  Всё это нужно сделать динамически, во время выполнения программы. 
  Для этого используют функции-конструкторы, вызывая их при помощи 
  специального оператора new.

  function User() {
  // Тело функции
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}

Любая функция, кроме стрелочной, может быть использована как конструктор. 
Чтобы отличить конструктор от обычной функции, их принято называть с большой буквы, 
а в самом названии отражать тип создаваемого объекта (существительное).

Вызов функции с оператором new приводит к созданию нового объекта и 
вызову функции в контексте этого объекта. То есть this внутри функции 
будет ссылаться на новосозданный объект. Это позволяет добавлять каждому объекту 
свойства с одинаковыми именами, но разными значениями.

function User(name, email, age) {
  this.name = name;
  this.email = email;
}

const mango = new User('Манго', 'mango@mail.com');
console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

const poly = new User('Поли', 'poly@mail.com');
console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

Задание 
Объяви функцию-конструктор Car которая принимает три параметра:

brand - марка автомобиля.
model - модель автомобиля.
price - цена автомобиля.
Функция Car должна создавать объект с одноимёнными свойствами brand, 
model и price, значениями которых должны быть переданные аргументы во время её вызова 
с оператором new.*/
function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};
console.log(new Car('Audi', 'Q3', 36000));//Car {brand: "Audi", model: "Q3", price: 36000}





//Объект настроек
/* Функции-конструкторы всегда принимают большое количество входных данных 
для свойств будущего объекта. Поэтому, к ним также можно применить паттерн 
«Объект настроек», передавая один объект с логично именованными свойствами, 
вместо несвязанного набора аргументов.

function User({ name, email }) {
  this.name = name;
  this.email = email;
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
const poly = new User({ name: 'Поли', email: 'poly@mail.com' });

Задание
Выполни рефакторинг функции-конструктора Car так, чтобы она 
принимала один параметр - объект со свойсвами brand, model и price. 
Деструктуризируй объект в сигнатуре (подписи) функции. */

function Car1({brand, model, price}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};
console.log(new Car1({ brand: 'BMW', model: 'X5', price: 58900 }));//{ brand: 'BMW', model: 'X5', price: 58900 }




//Свойство prototype
/* Мы уже знаем что такое прототип объекта, свойство __proto__ и как происходит 
поиск отсутствующих свойств объекта по цепочке прототипов. 
Во время вызова функции-конструктора через new и создания нового объекта 
со свойствами, ему также устанавливается прототип.

У каждой функции, кроме стрелочных, есть свойство prototype, 
значение которого это объект с единственным свойством constructor, 
указывающим на саму функцию-конструктор.

function User() {}
console.log(User.prototype); // { constructor: User }

const mango = new User();
console.log(User.prototype.isPrototypeOf(mango)); // true

В свойство prototype можно записывать свойства и методы, которые будут доступны 
всем объектам созданным этой функцией-конструктором. Методы в prototype 
будут вызываться объектами созданными функцией-конструктором, 
поэтому для доступа к свойствам вызываемого объекта в методах используется 
ключевое слово this.

function User({ name, email }) {
  this.name = name;
  this.email = email;
}

User.prototype.getEmail = function () {
  return this.email;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

console.log(mango.getEmail()); // mango@mail.com
mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail()); // mango@supermail.com


Задание
Добавь в свойство prototype функции-конструктора Car два метода:

getPrice() - возвращает значение свойства price из объекта который 
его будет вызывать.
changePrice(newPrice) - обновляет значение свойства price у объекта 
который его будет вызывать на newPrice.*/

function Car2({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  };
  Car2.prototype.getPrice = function () {
      return this.price;
  }
  Car2.prototype.changePrice = function (newPrice) {
      this.price = newPrice;
  };
  console.log(Car2.prototype.hasOwnProperty('getPrice'));//true
  console.log(new Car2({ brand: 'Audi', model: 'Q3', price: 36000 }));
  console.log(Car2.prototype.getPrice());





  //Задача. Хранилище
  /* Задание
Напиши функцию-конструктор Storage, которая будет создавать объекты 
для управления складом товаров. Функция ожидает только один аргумент 
- начальный массив товаров, который записывается на создаваемый объект 
в свойство items.

Добавь методы на прототип:

getItems() - возвращает массив текущих товаров в свойстве items объекта, 
который вызывает этот метод.

addItem(newItem) - принимает новый товар newItem и добавляет его 
в массив товаров в свойстве items объекта, который вызывает этот метод.

removeItem(item) - принимает товар item и удаляет его из массива товаров 
в свойстве items объекта, который вызывает этот метод. */

function Storage (items) {
    this.items = items
};
Storage.prototype.getItems = function () {
    return this.items;
};
Storage.prototype.addItem = function (newItem) {
    this.items.push(newItem);
};
Storage.prototype.removeItem = function (item) {
    const itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
};
// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]




//Конструктор строк
/* Напиши функцию-конструктор StringBuilder, которая принимает один параметр 
baseValue - произвольную строку, которая записывается на создаваемый объект 
в свойство value.

Добавь методы на прототип:

getValue() - возвращает текущее значение свойства value.

padEnd(str) - получает парметр str (строку) и добавляет её в 
конец значения свойства value объекта, который вызывает этот метод.

padStart(str) - получает парметр str (строку) и добавляет её в 
начало значения свойства value объекта, который вызывает этот метод.

padBoth(str) - получает парметр str (строку) и добавляет её 
в начало и в конец значения свойства value объекта, который вызывает этот метод. */

function StringBuilder (baseValue) {
    this.value = baseValue;
    StringBuilder.prototype.getValue = function () {
        return this.value;
    }
    
    StringBuilder.prototype.padEnd = function (str) {
        // console.log(this.value += str);
        return this.value += str;
    }
    StringBuilder.prototype.padStart = function(str) {
        // return console.log(str += this.value);
        return this.value = str + this.value;

    }
    StringBuilder.prototype.padBoth = function(str) {
        // return console.log(str += this.value + str);
        return this.value = str + this.value + str
    }
}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='





//Объявление класса
/* Классы это синтаксический сахар (надстройка) над функциями-конструкторами 
- новый удобный способ для задания конструктора вместе с прототипом.
function User() {
  // Тело функции-конструктора
}
const mango = new User();

Объявление класса начинается с ключевого слова class, 
после которого идёт имя класса и фигурные скобки - его тело.

class User {
  // Тело класса
}
const mango = new User();

Результат вызова new User() это объект, как и в функциях-конструкторах, 
он называется экземпляр класса, потому что содержит данные и поведение, 
описываемые классом.

Задание
Используя ключевое слово class объяви класс Car с пустым телом. */

// function Car3() {
// };

class Car3 {};
const mango = new Car3();





//Конструктор класса
/* Задание
Выполни рефакторинг кода, заменив функцию-конструктор Car на класс 
с методом-конструктором, принимающим объект.*/
// function Car4({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   };
  class Car4 {
      brand;
      model;
      price;
  
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  };
};
console.log(new Car4({ brand: 'Nissan', model: 'Murano', price: 31700 }));//{ brand: 'Nissan', model: 'Murano', price: 31700 }





//Методы класса
/* В функции-конструкторе объявление методов для работы со свойствами экземпляра 
делается явно, путём обращения к свойству prototype и добавления на него методов.
function User({ name, email }) {
  this.name = name;
  this.email = email;
}

User.prototype.getEmail = function () {
  return this.email;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

В классах немного иначе, проще.
class User {
  constructor({ name, breed }) {
    this.name = name;
    this.breed = breed;
  }

  // Аналог User.prototype.getEmail
  getEmail() {
    return this.email;
  }

  // Аналог User.prototype.changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}; */
class Car5 {
    constructor({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    getPrice() {
        return this.price;
    }
    changePrice(newPrice) {
        this.price = newPrice;
    }
  };
  console.log(Car5.prototype.hasOwnProperty('changePrice'));
  const Audi = new Car5({ brand: 'Audi', model: 'Q3', price: 36000 });
  console.log(Audi);//Audi
  console.log(Audi.getPrice());//36000





  //Приватные свойства
  /* В классах инкапсуляция реализуется приватными свойствами, 
  доступ к которым можно получить только внутри класса. 
  Это одно из отличий классов и функций-конструкторов - 
  в классах легко объявить приватные свойства.

  class User {
  // Необязательное объявление публичных свойств
  name;
  // Обязательное объявление приватных свойств
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.#email); // Будет ошибка, это приватное свойство

Задание
Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

getBrand() - возвращает значение приватного свойства brand.
changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.*/
class Car6 {
    #brand;
    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.model = model;
      this.price = price;
    }
    getBrand () {
        return this.#brand;
    }
    changeBrand(newBrand) {
        this.#brand = newBrand;
    }
  };
  const bmw = new Car6({ brand: 'BMW', model: 'X5', price: 58900 });
  console.log(bmw.brand);//undefined потому что св-во приватное
  console.log(bmw.model);//X5





  //Задача. Хранилище 2.0
  /* Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. 
  Сделай так, чтобы свойство items было приватным. */
//   function Storage(items) {
//     this.items = items;
//   }
  
//   Storage.prototype.getItems = function () {
//     return this.items;
//   };
  
//   Storage.prototype.addItem = function (newItem) {
//     this.items.push(newItem);
//   };
  
//   Storage.prototype.removeItem = function (item) {
//     const itemIndex = this.items.indexOf(item);
//     this.items.splice(itemIndex, 1);
//   };
  
class Storage1 {
    #items;
  constructor(items) {
      this.#items = items;
  }
  getItems() {
    return this.#items;
  };
  
  addItem(newItem) {
    return this.#items.push(newItem);
  };
  
  removeItem(item) {
    const itemIndex = this.#items.indexOf(item);
    return this.#items.splice(itemIndex, 1);
  };
};
  // Пиши код выше этой строки
  const storage1 = new Storage1(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
  console.log(storage1.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
  storage1.addItem("Дроид");
  console.log(storage1.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
  storage1.removeItem("Пролонгер");
  console.log(storage1.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]





  //Задача. Конструктор строк 2.0
  /* Выполни рефакторинг заменив функцию-конструктор StringBuilder 
  на класс с методами. Сделай так, чтобы свойство value было приватным. */
//   function StringBuilder(baseValue) {
//     this.value = baseValue;
//   }
  
//   StringBuilder.prototype.getValue = function () {
//     return this.value;
//   };
  
//   StringBuilder.prototype.padEnd = function (str) {
//     this.value += str;
//   };
  
//   StringBuilder.prototype.padStart = function (str) {
//     this.value = str + this.value;
//   };
  
//   StringBuilder.prototype.padBoth = function (str) {
//     this.padStart(str);
//     this.padEnd(str);
//   };
  
class StringBuilder1 {
    #value;
    constructor(baseValue) {
    this.#value = baseValue;
    };
  
  getValue() {
    return this.#value;
  };
  
  padEnd(str) {
    this.#value += str;
  };
  
  padStart(str) {
    this.#value = str + this.#value;
  };
  
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  };
};
  // Пиши код выше этой строки
  const builder1 = new StringBuilder1('.');
  console.log(builder1.getValue()); // '.'
  builder1.padStart('^');
  console.log(builder1.getValue()); // '^.'
  builder1.padEnd('^');
  console.log(builder1.getValue()); // '^.^'
  builder1.padBoth('=');
  console.log(builder1.getValue()); // '=^.^='





  //Геттеры и сеттеры
/* Геттер выполняется при попытке получить значение свойства, 
а сеттер - при попытке его изменить.
Геттеры и сеттеры хорошо использовать для простых операций чтения 
и изменения значения свойств, особенно приватных, как их публичный интерфейс. 
Для работы со свойством которое хранит массив или объект они не подойдут.
class User {
  name;
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
};
const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
console.log(mango.email); // mango@mail.com
mango.email = 'mango@supermail.com';
console.log(mango.email); // mango@supermail.com

Плюс в том, что это методы, а значит при записи можно выполнить 
дополнительный код, например с какими-то проверками, 
в отличии от выполнениях этой же операции напрямую со свойством.
set email(newEmail) {
  if(newEmail === '') {
    console.log('Ошибка! Почта не может быть пустой строкой!');
    return;
  }

  this.#email = newEmail;
};

Задание
Выполни рефакторинг класса Car. Сделай свойства model и price приватными, 
также как #brand. Стандартизируй публичный интерфейс класса 
заменив уже объявленные методы на геттеры и сеттеры brand, model и price 
для взаимодействия с приватными свойствами. */
class Car7 {
    #model;
    #price;
    #brand;
  
    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.#model = model;
      this.#price = price;
    }
  
    get brand() {
      return this.#brand;
    }
  
    set brand(newBrand) {
      this.#brand = newBrand;
    }
  
    get model() {
      return this.#model;
    }
  
    set model(newModel) {
      this.#model = newModel;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(newPrice) {
      this.#price = newPrice;
    }
  };




  //Статические свойства
  /* Кроме публичных и приватных свойств будущего экземпляра, 
  в классе можно объявить его собственные свойства, доступные только классу, 
  но не его экземплярам - статические свойства (static). 
  Они полезны для хранения информации относящейся к самому классу.

  Добавим классу пользователя приватное свойство type - его тип, 
  определяющий набор прав, например администратор, редактор, 
  просто пользователь и т п. Возможные типы пользователей будем хранить 
  как статическое свойство TYPES - объект со свойствами.

  class User {
  // Объявление и инициализация статического свойства
  static TYPES = {
    ADMIN: 'admin',
    EDITOR: 'editor',
  };
  #email;
  #type;

  constructor({ email, type }) {
    this.#email = email;
    this.#type = type;
  }

  get type() {
    return this.#type;
  }

  set type(newType) {
    if (User.TYPES[newType] === undefined) {
      console.log('Ошибка! Такого типа пользователя не существет');
      return;
    }

    this.#type = newType;
  }
}

const mango = new User({
  email: 'mango@mail.com',
  type: User.TYPES.ADMIN,
});

console.log(mango.TYPES); // undefined
console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }

console.log(mango.type); // admin
mango.type = User.TYPES.EDITOR;
console.log(mango.type); // editor

Статические свойства также могут быть приватные, то есть доступные только 
внутри класса. Для этого имя свойства должно начинаться с символа #, 
также как приватные свойства. Обращение к приватному статическому свойству 
вне тела класса вызовет ошибку.

Задание
Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE
 со значением 50000 - максимально допустимая цена автомобиля.

Добавь сеттеру price проверку передаваемого значения параметра newPrice. 
Если оно больше чем MAX_PRICE, сеттер ничего не делает, 
а если меньше или равно, то перезаписывает цену автомобиля. */

class Car8 {
    // Пиши код ниже этой строки
    static MAX_PRICE = 50000;
    #price;
  
    constructor({ price }) {
      this.#price = price;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(newPrice) {
        if (newPrice <= Car8.MAX_PRICE) {
      this.#price = newPrice;
      return newPrice;
        }
        return;
    } 
    // Пиши код выше этой строки
  }
  
  const audi = new Car8({price: 35000});
  console.log(audi.price); // 35000
  
  audi.price = 49000;
  console.log(audi.price); // 49000
  
  audi.price = 51000;
  console.log(audi.price); // 49000





  //Статические методы
  /* В классе можно объявить не только методы будущего экземпляра, 
  но и методы доступные только классу - статические методы, 
  которые могут быть как публичные, так и приватные. Синтаксис объявления 
  аналогичен статическим свойствам, за исключением того, 
  что значением будет метод.
  class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: 'mango@mail.com' });

console.log(
  User.isEmailTaken('poly@mail.com')
); // false

console.log(
  User.isEmailTaken('mango@mail.com')
); // true

Задание
Добавь классу Car публичный статический метод checkPrice(price), 
принимающий цену автомобиля. Метод должен сравнить значения параметра price 
и приватного статического свойства MAX_PRICE.*/
class Car9 {
    static #MAX_PRICE = 50000;
    // Пиши код ниже этой строки
  static checkPrice(price) {
      if (price <= this.#MAX_PRICE) {
          return 'Всё хорошо, цена в порядке.';
      }
      return 'Внимание! Цена превышает допустимую.';
  }
    // Пиши код выше этой строки
    constructor({ price }) {
      this.price = price;
    }
  }
  
  const audi1 = new Car9({ price: 36000 });
  const bmw1 = new Car9({ price: 64000 });
  
  console.log(Car9.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
  console.log(Car9.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
  