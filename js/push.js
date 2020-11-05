'use strict'
//собираем ввод пользователья и что-то с ним делаем
const valueInputRef = document.querySelector('.js-value');
const addValueBtn = document.querySelector('.js-add-value');
const calcBtn = document.querySelector('.js-calculate');
const numbers = []; //пустой массив для введенных данных
let total = 0;
addValueBtn.addEventListener('click', function(){
    const value = Number(valueInputRef.value);
    numbers.push(value);
    valueInputRef.value = '';
    console.log(numbers);
});

calcBtn.addEventListener('click', function(){
    //чтобы сделатб сумму всех эл-тов массива нужо его перебрать
    //для этого вначале задаем let total = 0;
    for (const number of numbers) {
        console.log(number);
        //cсоответственно чтобы посчитать сумму, нужно к total
        //добавлять значение number
        total += number;
    }
    console.log('Total: ', total);
})