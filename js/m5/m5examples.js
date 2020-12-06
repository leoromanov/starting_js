'use strict'

//ПРОТОТИП ОБЪЕКТА
// const objA = {
//     x: 1,
//     y: 2,
// };

const objB = {
    z: 10,
};
const objA = Object.create(objB);//кладем в objA ссылку на objB
//т.е. делаем objB прототипом для objA
//т.е. в св-вах objA в __proto__ будет ссылка на objB

objA.x = 1;
objA.y = 2;

console.log(objA); //{x: 1, y: 2}
console.log(objA.z);//10  -  берется из ссылки на objB



//ФУНКЦИИ КОНСТРУКТОРЫ
const Manager = function(name, sales) {
    this.name = name;
    this.sales = sales;
};

const mango = new Manager('Mango', 5);
console.log(mango);//Manager {name: "Mango", sales: 5}

const poly = new Manager('Poly', 8);
console.log(poly);//Manager {name: "Poly", sales: 8}

//у каждой ф-ции есть св-во/объект prototype
Manager.prototype.sell = function() { //в prototype добавляем св-во sell
    this.sales += 1 //и назначаем ему функцию увеличения на одно значение
}
//т.е. в св-во prototype добавляем метод sell который будет доступен по ссылке
//так делается чтобы не вешать св-во на каждый объект и не плодить его
//просто при необходимости обратиться к нему по прототипному наследию
mango.sell();
console.log(mango);//{name: "Mango", sales: 6}



/*ОБЪЕКТЫ не стоит перебирать через  цикл for in потому что
он будет перебирать не только собственные св-ва объекта,
но и св-ва всех его прототипов в цепочке*/
const objC = {
    q:5,
    z:6,
};
const objD = Object.create(objC);

objD.x = 3;
objD.y = 4;

console.log(objD);//x: 3, y: 4} выведется массив собственных значений objD
//а если через for..in то будут ещё и q и z, которые конечно можно
//избежать с помощью HasOwnPropetry, который выведет только собственные св-ва



//Ф-ция конструктор для сравнения с новым синтаксисом
const Hero = function(name, xp) {
    this.name = name;
    this.xp = xp;
};

const leo = new Hero('Leo', 1000);
console.log(leo);//Hero {name: "Leo", xp: 1000}

//а теперь новый сиснтаксис в классами
class Hero1 {
    constructor(name, xp) {
        this.name = name;
    this.xp = xp;
    }
    changeName(name) {//при таком способе это св-во сразу попадает в prototype
        this.name = name;
    }
    gainXp(amount) {
        console.log(`${this.name} получил ${amount} опыта`);
        this.xp += amount;
    }
}
const leo1 = new Hero1('Leo', 1000);
console.log(leo1);//Hero1 {name: "Leo", xp: 1000}
leo1.gainXp(2000);
console.log(leo1);//Hero1 {name: "Leo", xp: 3000}


//про геттеры и сеттеры на 25 минуте 10го занятия


//дальше создаём более специфические классы, которые будут отличаться
//специфическими св-вами, но основые св-ва будут общие из Hero
class Warrior extends Hero1 { //extends Hero1 это привязывание к родителю
    constructor(name, xp, weapon){
        super(name, xp);//это вызов конструктора родителя для обращения к name и xp
        this.weapon = weapon;
    }
    attack() {
        console.log(`${this.name} атакует с помощью ${this.weapon}`);
    }//для того чтобы было откуда взять this.name нужно связать Warrior с Hero1
}

const leo2 = new Warrior('Leo', 1000, 'Молот');
console.log(leo2);//Warrior {name: "Leo", xp: 1000, weapon: "Молот"}
leo2.attack();//Leo атакует с помощью Молот
leo2.gainXp(500);//Leo получил 500 опыта
console.log(leo2);//Warrior {name: "Leo", xp: 1500, weapon: "Молот"}
//в этом случае gainXp был взят из Hero1 как из родительского класса
//по прототипному наследию
//можно сказать что
console.log(Warrior.prototype.__proto__ === Hero1.prototype);//true
