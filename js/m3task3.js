const findBestEmployee = function (employees) {
    'use strict';
    // Write code under this line
    let bestValue = 0;
    let bestName = '';

    for (const key in employees) {
        if (employees[key] > bestValue) {
            bestValue = employees[key];
            bestName = key;  
        }
    }
    return bestName;


    //ниже рабочий код Тумэна
    // const allEmployees = Object.keys(employees);
    // let bestEmployee = '';

    // for (let i = 0; i < allEmployees.length; i += 1) {
    //   if (employees[allEmployees[i]] >= employees[allEmployees[0]]) {
    //     bestEmployee = allEmployees[i];
    //   }
    // }
    // return bestEmployee;


    // const values = Object.values(employees);
    // let bestValue = values[0];

    // for (let i = 1; i < values.length; i += 1) {
    //     if (values[i] > bestValue) {
    //         bestValue = values[i];
    //     }
    // } console.log(bestValue);
  };
  
  
  // Объекты и ожидаемый результат
  const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }; 
  console.log(findBestEmployee(developers)); 
  // 'lorence'
  
  const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
  }; 
  console.log(findBestEmployee(supports)); 
  // 'mango'
  
  const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }
  console.log(findBestEmployee(sellers)); 
  // 'lux'  


//   Задача 3-3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненных задач содержатся как свойства объекта в формате "имя":"кол-во задач".