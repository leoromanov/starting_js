//пример цикла, в котором консоль выводит значение i от заданного 0
// и пока i меньше 10, после каждой итерации увеличивая i на 1
// for (let i = 0; i < 10; i += 1) {
//     console.log(i);
// }

//чтобы вывести только чётные числа, можно просто шаг увеличить до 2
//но если по условию шаг должен быть 1, можно сделать так
// if (i % 2 === 0) т.е. если остаток от деления i на 2 = 0, значит выведи это i
// остаток от деления это 9 % 4 = 1, т.е. 4 влазит в 9 2 раза, и остаётся единица






// пример скрипта счётчика, который при вводе переменной = 3, складывает все
// числа от 1 до 3, т.е. 1+2+3


// let userInput = prompt('Введите число');
// userInput = Number(userInput);
// let total = 0;

// for (let i = 1; i <= userInput; i += 1) {
//     total +=i;
// }

// console.log(`Total = ${total}`);



//цикл while
//тут заставляет пользователя вводить число, пока оно не будет = 5
// let userInput;

// do {
//     userInput = prompt('Введи 5');

//     //ниже if нужен для того, чтобы прервать цикл при нажатии cancel
//     //если его нет, то cancel не активна и цикл бесконечен
//     if(userInput === null) {
//         console.log('Пользователь оменил ввод');
//         break;
//     }

//     userInput = Number(userInput);
// }
// while (userInput !== 5);

