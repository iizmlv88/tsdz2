"use strict";
// Задача 1: Об'єднання ізольованих даних
// Створіть тип даних Tuple, який містить ім'я користувача (string) і його вік (number). Потім створіть змінну, використовуючи цей тип, і присвойте їй значення.
let NameAge;
NameAge = ['Ildar', 33];
// Задача 2: Фільтрація масиву об'єктів
// Напишіть функцію, яка приймає масив об'єктів і рядкову властивість, і повертає новий масив, який містить тільки об'єкти, у яких властивість має задане значення.
const obj = [
    { id: 111111112222, item: 'xbox' },
    { id: 2233231, item: 'ps' },
    { id: 3333333333333333, item: 'ps' },
    { id: 44443, item: 'xbox' }
];
function filterObj(obj, property, value) {
    console.log(obj);
    return obj.filter(obj => obj[property] === value);
}
console.log(filterObj(obj, 'item', 'xbox'));
// Задача 3: Пошук об'єкта за властивістю
// Напишіть функцію, яка приймає масив об'єктів і рядкову властивість, і повертає перший об'єкт з масиву, у якого властивість має задане значення.
function firstObj(objects, property, value) {
    console.log(obj);
    return objects.find(obj => obj[property] === value);
}
console.log(firstObj(obj, 'item', 'ps'));
// Задача 4: Розрахунок середнього значення
// Напишіть функцію, яка приймає масив об'єктів з числовими властивостями і повертає середнє значення цих властивостей.
const objectsNum = [
    { id: 10, itrm: 20 },
    { id: 5, itrm: 15 },
    { id: 8, itrm: 12 }
];
function calc(objects) {
    let sum = 0;
    let count = 0;
    for (const obj of objects) {
        for (const key in obj) {
            if (typeof obj[key] === 'number') {
                sum += obj[key];
                count++;
            }
        }
    }
    return count > 0 ? Math.floor(sum / count) : 0;
}
console.log(calc(objectsNum));
