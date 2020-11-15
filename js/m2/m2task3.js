'use strict'
function findLongestWord (string = "") {
    return string.split(' ').reduce((word, bigWord) => (bigWord.length > word.length ? bigWord : word));
  }

// function findLongestWord (string = "") {
//     let a;
//     let b;
//     string.split(' ').reduce(a, b); {
//     if (b.length > a.length) {
//         console.log(b);
//     } 
// }
// }

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'


// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
