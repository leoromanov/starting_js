'use strict'

// МАССИВЫ
// Объявление, переопределение, индексация и длина

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.log(friends[0]);
// console.log(friends);

// В массивах можно переопределять значение переменных const т.к. это
// сложный тип данных. Примитивные типы переопределять нельзя.

// friends[2] = 'Chelsea';
// console.log(friends);

// Т.е. мы не заменяем всю переменную, а изменяем один элемент массива

// length - св-во длинны переменной:

// console.log(friends.length, '- это вывод длинны массива');

// friends[4] = 'Kongo';
// console.log(friends);

// В свойство length нельзя ничего записать!!
// Его можно только читать!!

// ИТЕРАЦИЯ ПО МАССИВУ

// Если нужно сделать console.log каждого элемента массива
// Для этого делается цикл

// for (let i = 0; i < friends.length; i += 1) {
//     console.log(i);
//     console.log(friends[i]);
// }

// Что буквально значит: цикл, в котором начинаем с 0-индекса;
// перебираем пока i меньше чем длинна массива;
// с каждой итерацией увеличивая i на +1;
// На выходе получим вывод только значения индекса
// Поэтому нужен console.log(friends[i]), чтобы вывести каждое i

// Можно перебирать массив с помощью for...of
// В таких простых случаях это сильно упрощает код

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// for (const friend of friends){
//     console.log(friend);
// }
// В данном случае const friend будет доступна только внутри for


// Break  и Continue

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind = 'Ajax';
// let message;
// тут делаем поиск по друзьям
// для этого необходимо перебрать цикл

//  for (let i = 0; i < friends.length; i +=1){
//      const friend = friends[i];
//      // после чего нужно значение переменной const friends сравнить
// // с friend в console.log
//      if (nameToFind === friend) {
//          console.log('друг найден')
//      } 
    
//  }

//  но ниже более краткая запись того же выражения через for...of

//  for (const friend of friends){
//     if (nameToFind === friend) {
//         message = 'друг найден'
//         break;
//     }
    
    // если добавить else и сообщение "друг не найден" 
    // то консоль в любом случае будет выдавать "друга нет"
    //  потому что цикл перебирает массив до конца
    // поэтому в случае если после верного варианта есть ещё варианты,
    // то цикл пойдёт по ним и выдаст последнее сообщение
    // т.е. нужно прервать цикл по условию (типа если найден нужный вариант)
    // поэтому после message в if нужно поставить break

//     else {
//         message = 'друг не найден'
//     }
//  }
//  console.log(message)

//  также можно избавиться от else с помощью предположения от обратного
// т.е. сразу задать let message = "друг не найден", а если найдется, то выдаст if
// const nameToFind = 'Ajax';
// let message = "друг не найден";
// for (const friend of friends){
//     if (nameToFind === friend) {
//         message = 'друг найден';
//         break;
//     }
// }
//     console.log(message);


// Передача по ссылке и по значению
// let a = 5;
// let b = a;
// console.log('a: ', a); //5
// console.log('b: ', b); //5

// a = 10;
// console.log('a: ', a); //10
// console.log('b: ', b); //5

//в таком случае делается копия значения переменной
// и если переменная перезаписывается? то в копии остается старое значение
 // но это только с примитивными типами. с массивани не так

//   const a = [1, 2, 3];
//   const b = a;
//   console.log('a: ', a); //[1, 2, 3]
// console.log('b: ', b); //[1, 2, 3]
// a[0] = 10;
// console.log('a: ', a); //[10, 2, 3]
// console.log('b: ', b); //[10, 2, 3]

// //массивы создают ссылку на оригинал
// //если изменить оригинал - изменится контент по ссылке

// b[1] = 20;
// console.log('a: ', a); //[10, 20, 3]
// console.log('b: ', b); //[10, 20, 3]
 
// console.log(5 === 5); 

//true - потому что примитивы сравниваются по значению

// console.log([1,2,3] === [1,2,3,]); 

//false - когда сравниваются массивы у них нет значения
//сравнивается то место в памяти где они лежат. 
// а если создается два массива, как две ячейки памяти
// то их адреса не равны - поэтому false


// методы массива
// const numbers = [1,2,3];
// console.log(numbers);
// numbers.push(4,5,6);
// console.log(numbers);//[1,2,3,4,5,6]
// numbers.pop();
// console.log(numbers);//[1,2,3,4,5]
// numbers.pop();
// numbers.pop();
// console.log(numbers);//[1,2,3]
// numbers.push(4,5,6,7);
// console.log(numbers);//[1,2,3,4,5,6,7]
// numbers.shift();
// console.log(numbers);//[2,3,4,5,6,7]
// numbers.unshift(0);
// console.log(numbers);//[0,2,3,4,5,6,7]

//програмка, которая суммирует все числа, которые введёт пользователь
// код скрипта находится в push.js


// метод SPLIT
//разбивает строку в массив
// const title = 'Top 10 benefits of React Framework';

// console.log(title.split(' '));//["Top", "10", "benefits", "of", "React", "Framework"]
//разобьёт строку на массив, где каждое слово это эл-т массива
//в данном случае разделителем выступает пробел
// если без пробела, то разобьет по каждому символу
// разделитель может быть любой, лишь бы он был везде одинаковый


//метод JOIN
// собирает массив в строку
// const numbers = [1,2,3,4,5];
// console.log(numbers.join('!==')); //1!==2!==3!==4!==5

//SPLIT и JOIN не изменяют исходных данных, но возвращают на свое место результат своей работы

//Это нужно например чтобы сделать SLUG из названия статьи, т.е. стилизовать его для URL-адреса
//Потому что такие данные как название заголовков нигде-не-хранятся-в-таком-виде

const title = 'Top 10 benefits of React Framework';
const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);