let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

user.mood = 'happy';
// console.log(user.mood);
user['full time'] = true;
// console.log(user['full time']);
user.hobby = 'skydiving';
console.log(user.hobby);
user.premium = false;
 
 
const keys = Object.keys(user);
// Write code under this line
// console.log(keys);
for (const key of keys) {
    // console.log(key);
    // console.log(user[key]);

    message += `${key} : ${user[key]} \n`;
    // console.log(message);
}
 
console.log(message); 
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */


// CRUD для свойств объекта
// С - create (создать)
// R - read (читать)
// U - update (обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ:значение
// c переносом строки ('\n')