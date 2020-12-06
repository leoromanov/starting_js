'use strict'
/*
Напиши класс Car с указанными свойствами и методами.
*/
class Car {
    // Write code under this line
    /*
   * Добавь `статический` метод 
   * `getSpecs(car)`, который принимает 
   * объект-машину как параметр 
   * и возвращает шаблонную строку 
   * со свойствами и значениями объекта.
   * Свойства: 
   *   maxSpeed, 
   *   speed, 
   *   isOn, 
   *   distance,
   *   price
   * Пример строки, полученной этим методом:
   * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   */
     static getSpecs(car) {
         return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
     }
     /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, 
   *          начальное значение `0`
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль. 
   *         Значения `true` или `false`,  
   *         начальное значение false
   *  distance - пробег в километрах, 
   *             начальное значение `0`
   */
     constructor({maxSpeed, price}) {
        this.maxSpeed = maxSpeed;
        this.speed = 0;
        this.isOn = false;
        this.distance = 0;
        this._price = price;
      }
      /*
   * Добавь геттер и сеттер 
   * для свойства `price`, который будет 
   * работать с свойством цены автомобиля.
   * 
   * ВАЖНО: для записи методов get и set
   * значение параметра записывают с 
   * подчеркиванием. См. ниже пример 1.
   */

  
     get price() {
         return this._price;
     }
     set price(value) {
         this._price = value;
     }
     /*
   * Метод, который заводит автомобиль
   * Записывает в свойство `isOn` значение `true`
   */
     turnOn() {
         this.isOn = true;
     }
     /*
   * Метод, чтобы заглушить автомобиль
   * Этот метод должен записывать 
   * в свойство isOn значение false,
   * и сбрасывать текущую скорость до 0
   */
     turnOff() {
         this.inOn = false;
         this.speed = 0;
     }
     /*
   * Этот метод должен добавлять 
   * к свойству `speed` полученное
   * значение, при условии, 
   * что результирующая скорость
   * не больше чем значение свойства `maxSpeed`
   */
     accelerate(value) {
        this.speed =
          this.speed + value <= this.maxSpeed ? this.speed + value : this.maxSpeed; 
      }
      /*
   * Этот метод должен отнимать 
   * от свойства `speed` 
   * полученное значение, при условии, 
   * что результирующая скорость не меньше 0
   */
      decelerate(value) {
        this.speed = this.speed - value >= 0 ? this.speed - value : 0;
      }
      /*
   * Этот метод должен добавлять к свойству 
   * `distance` пробег в километрах, 
   * т.е. hours * speed,
   * но только в том случае, 
   * если машина заведена!
   */
     drive(hours) {
         if (this.turnOn) {
             this.distance += hours * this.speed;
         }
     }
   }
    
   const mustang = new Car({ maxSpeed: 200, price: 2000 });
   mustang.turnOn();
   mustang.accelerate(50);
   mustang.drive(2);
   
   console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   
   mustang.decelerate(20);
   mustang.drive(1);
   mustang.turnOff();
   
   console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
   
   console.log(mustang.price); // 2000
   mustang.price = 4000;
   console.log(mustang.price); // 4000

   
