// 'use strict'

const array = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];


const getItemsString = function(array) {
    let result = '';
    'use strict';
    
    for (let i = 0; i < array.length; i += 1) {
        const number = i + 1;
        const item = array[i];
        result += `${number} - ${item}\n`;
    }
    return result;
  };

  console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));


//   Использование for
// Напиши функцию getItemsString(array), которая получает массив и возвращает строку, полученную из объединения (конкатенации) строк в формате ${номер элемента} - ${значение элемента}\n , где \n - спецсимвол переноса.

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// Используйте вспомогательную переменную result для добавления (конкатенации) строк внутри цикла for