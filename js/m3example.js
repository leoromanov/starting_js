// Объекты

// Это ещё одна струкрута данных, которая позволяет хранить данные описывающие какую-то конкретную сущность.
// Описание продукта, пользователя, отеля и т.п. 
// Что-то у чего много характеристик. 

const hotel = {
    name: 'Resort',
    stars: 5,
    capasity: 150, 
}

console.log(hotel); //{name: "Resort", stars: 5, capasity: 150}capasity: 150guests: []name: "Resort"stars: 3__proto__: Object

console.log(hotel.name); // Resort

console.log(hotel.capasity); //150

// но если значение св-ва хранится в переменной, то путь к ней
// нужно указывать так

const key = 'capasity';
console.log(hotel[key]); //150
// потому что интерпретатор будет искать именно переменную с таким именем
// и только с []  будет подставлять значение

// Перезаписываются значения просто

hotel.stars = 3;
console.log(hotel); // {name: "Resort", stars: 3, capasity: 150}
 
//добавляются тоже просто

hotel.guests = []; 
console.log(hotel); //{name: "Resort", stars: 3, capasity: 150, guests: Array(0)}

//Ссылочный тип
//Объект, как и массив, это ссылочный тип
// Копируется по ссылке, т.е. не делает новую копию, а создает ссылку на оригинал
 const a = {x: 1, y: 2};
 const b = a;
 console.log (b === a); //true

 // в JS массив это толком не массив, это отдельный случай объекта!
 const arr = ['a', 'b', 'c']; 
 console.log(arr); //["a", "b", "c"]

 arr.hello = ';)'; //добавляем элемент hello в объект arr

 console.log(arr); //["a", "b", "c", hello: ";)"]
 // добавился элемент :) с индексом hello

 // функции это тоже подвид объекта
 const fn = function() {};
 fn.hello = 'xD'; //на функцию fn записал св-во hello которому присвоил значение xD
 console.log(fn.hello); //xD
  

//Методы объекта и this
const motel = {
    name: 'Resort',
    stars: 5,
    capasity: 150, 
}
//сделаем функцию для замены имени отеля
const updateMotelName = function(motel, newName){
    motel.name = newName;
};
updateMotelName(motel, 'Road Resort');
console.log(motel.name);
//в таком виде функция никак не связана с объектом
//она принимает его имя и меняет значение 

//можно положить функцию прямо в объект, это хорошая практика
const motel1 = {
    name: 'Resort Motel',
    stars: 5,
    capasity: 150, 
    updateName: function(newName) {
         console.log(this.name);
         this.name = newName;
    }
}
//если мы хотим обратиться к св-ву объекта внутри метода объекта
//лучше использовать this,
console.log(motel1);
motel1.updateName('Lagoon');
console.log(motel1); // {name: "Lagoon", stars: 5, capasity: 150, updateName: ƒ}
// в данном случае метод объекта это 
// updateName: function(newName) {
//     console.log(this.name);
//     this.name = newName;
// }
// МЕТОД ОБЪЕКТА - ЭТО СВ-ВО, ЗНАЧЕНИЕМ КОТОРОГО ЯВЛ-СЯ ФУНКЦИЯ
//в новом синтаксисе записывается без слова function
// updateName(newName) {
//     console.log(this.name);
//     this.name = newName;
// }


//Можно вызывать методы в других методах
//Ниже в методе updateName я обращаюсь к вызову метода someMethod
const motel2 = {
    name: 'Resort Motel2',
    stars: 5,
    capasity: 150, 
    updateName(newName) {
         console.log(this.name);
         
         this.name = newName;

         this.someMethod();
    },
    someMethod() {
        console.log('This is some method');
    },
}
console.log(motel2);
//т.е. в одном методе объекта можно вызывать другие методы этого же объекта


//чтобы достучаться до глубоких св-в нужно выстроить цепочку из имен объектов
const objA = {
    x: 1,
    objB: {
        y: 5,
    },
};
console.log(objA.objB.y); // 5

//перебор объекта через for...in

const feedback = {
    verygood: 15,
     good: 10,
     neutral: 5,
     bad: 3,
     verybad: 1,
 };
 let totalFeedback = 0; //сделаем переменную чтобы сложить все ключи объекта
 console.log('good' in feedback); //true
 // тогда in вернёт true если такой ключ в объекте есть
// если такого ключа нет - то вернёт false
for (const key in feedback) { //key это зарезервированное слово для ключей объекта
    console.log(key); //выведет список ключей без значений
    console.log(feedback[key]);//выводит значения после ключей
    totalFeedback += feedback[key];
}
console.log('Total Feedback: ', totalFeedback); // 18

// это олдскульный метод, обычно не используется
 
//если в массиве перебор идет по индексам которые по порядку,
//то в объекте ключи не пронумерованы и перебор может идти хаотично

//актуальный метод перебора
const keys = Object.keys(feedback)
 //на место этого вызова мы получим все ключи объекта в виде массива
console.log(keys); // ["good", "neutral", "bad"]

//есть задачка где нужно посчитать сколько ключей в объекте
// для этого перебираем объект с помощью const keys = Object.keys(feedback)
// и потом console.log(keys.length); // вернет кол-во ключей
let totally = 0;
console.log(keys.length);

//после того как объект делаем массивом его можно перебрать с помощью for...of
for (const key of keys) {
    console.log(key); //выведи сначала каждый ключ
    console.log(feedback[key]);

    totally += feedback[key];
} //мы сначала переводим объект в массив ключей const keys = Object.keys(feedback)
//перебираем массив ключей for (const key of keys)
// и на каждой итерации получаем доступ к значению console.log(feedback[key]);
console.log('Totally: ', totally); //Totally: 34

//работать с массивом приятнее чем с объектом
 
// можно получить отдельно все значения объекта
const values = Object.values(feedback); //создание переменной в которую
//кладутся значения объекта feedback
console.log('Значения', values);//Значения (5) [15, 10, 5, 3, 1]

//может быть задача: приходит зарплата людей в виде массива, надо посчитать общю з/п
//просто берём массив всех значений св-в, т.е. массив зарплат
//перебрать его в цикле for (const value of values) {console.log(value);}
let totalValue = 0;
for (const value of values) {
    console.log(value);
    totalValue += value;
}
console.log('Total value: ', totalValue);

//чтобы посмотреть пустой объект или нет надо проверить есть ли в нем ключи
//т.е. проверить keys.legth

//НИ НА ОДНОМ ОБЪЕКТЕ, НА КОТОРОМ УЖЕ ЕСТЬ МЕТОДЫ НЕ ВЫЗЫВАЕТСЯ НИ keys НИ values НИ enties
//keys value entries нужны для объектов данных


//дальше пример идёт в файле friends.js

