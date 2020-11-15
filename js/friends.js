// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Poly', online: true },
//     { name: 'Kiwi', online: true },
//     { name: 'Ajax', online: false },
// ];

// const nameToFind = 'Poly';

// const findFriends = function(allFriends, name) {
//     for (const friend of allFriends) {
//         console.log(friend);
//         // console.log(friend.name);
//         if (friend.name === name) {
//         return 'Нашли!';
//         break;
//     } //перебираем массив объектов и выводит объекты по одному
// } 
//     return 'Не нашли:(';
// }

// console.log(findFriends(friends, 'Poly'));
// console.log(findFriends(friends, 'Chelsea'));

//когда работаем с массивом объектов, то для вывода можно использовать
//console.table() - более информативно

const friends = [
    { name: 'Mango', online: false },
    { name: 'Poly', online: true },
    { name: 'Kiwi', online: true },
    { name: 'Ajax', online: false },
];
//если из массива объектов нужно получить например имена всех друзей
//передали allFriends в функцию
//и теперь нужно получить все имена этих друзей
 //соответственно она должна вернуть массив имен 
const getAllNames = function(allFriends) { 
const names = [];
for (const friend of allFriends){
     console.log(friend);
     names.push(friend.name);
 }
 return names;
};
// console.log(friends);
console.log(getAllNames(friends)); //["Mango", "Poly", "Kiwi", "Ajax"]



//теперь получим имена только тех, кто онлайн
 
const getOnlineFriends = function(allFriends) {
    //для этого делаем пустой массив, который будем заполнять
    const online = [];

    for (const friend of allFriends) { //перебираем его
    if (friend.online) { //и если у друга online = true
        online.push(friend.name); //то сделай push в массив onlinne имени из массива friends
    }
}
    return online;
}

console.log(getOnlineFriends(friends)); //["Poly", "Kiwi"]



//а теперь выводим всех кто оффлайн
const getOffineFriends = function(allFriends) {
  
    const online = [];

    for (const friend of allFriends) { 
    if (!friend.online) { //для это ставим ! т.е. все кто не онлайн
        online.push(friend.name); 
    }
}
    return online;
}

// console.log(getOffineFriends(friends)); //["Mango", "Ajax"]


//пример корзины с товарами и работы с ней
//набор методов называется интерфейсом
const cart = {
    // items: [], //закомментирован, чтобы написать пример добавления второго яблока
    //изначальо массив пустой, чтобы заполнять его продуктами
    //чтобы получить из корзины все что в ней лежит делаем
    items: [
        { name: 'apple', price: 50, quantity: 1 },
    ],
    getItems() {
        return this.items;
    },
    //теперь будем добавлять продукты
    add(product) {
        for (const item of this.items) {
            console.log(item);

            if (item.name === product.name) {
                console.log('Такой продукт уже есть в корзине.');
                item.quantity += 1;
                return;
            }
        }
        //ниже код для добавления нового продукта, которого в корзине ещё нет
        product.quantity = 1;//просто добавление нового св-ва
        // //которое значит кол-во этого продукта в корзине
        this.items.push(product);
    },
    remove(productName) {
        console.log(productName);
        //теперь надо перебрать массив, и при нахождении нужного
        //эл-та удалить его с помощью splice
        //поскольку цикл for...of не выдает индексы, то придется перебирать
        //просто циклом for
        for (let i = 0; i < this.items.length; i += 1) {
            // console.log(item);

            if (productName === this.items[i].name) {
//this.items[i].name - обращаемся к массиву this.items, берем у него объект с [i] индексом
//и у этого объекте берём .name
                console.log('Нашёлся')
                console.log('Индекс для  удаления: ', i);//находим его индекс

                this.items.splice(i, 1); //передаём индекс и кол-во для удаления
            }
        }
    },
    clear() { //функция для очистки корзины
        this.items = []; //значение массива перезаписывается на пустой массив
    },//при вызове функции выйдет пустой массив
    countTotalPrice() { 
        let total = 0;

        for (const item of this.items) {
            console.log(item);
            total += item.price * item.quantity;
        }

        return total;               
    },
     //метод для подсчета общей стоимости всех продуктов
//он ничего не получает в () т.к. все что ему нужно есть в объекте items: []
//и он будет возвращать общую цену
};

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'grapes', price: 70 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'strawberry', price: 110 });
console.table(cart.getItems());
// cart.remove('lemon');//вернётся lemon
// console.table(cart.getItems());
// cart.remove('grapes');
// console.table(cart.getItems());
// cart.clear ();
// console.table(cart.getItems());//пустой массив. потому что после clear
//если нужно вычистить массив, лучше всего просто перезаписать его на пустой массив
console.log('Total: ', cart.countTotalPrice());
