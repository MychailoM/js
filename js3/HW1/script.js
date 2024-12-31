"use strict";
const age = 15;
console.log(age);

const name = "Misha";
console.log(name);

let isStudent = true;
console.log(isStudent);

const myStryng = "Борітеся — поборете, Вам Бог помагає! За вас правда, за вас слава І воля святая!";
console.log(myStryng);

const myNumber = 24;
console.log(myNumber + 10);

const myNull = null;
console.log(myNull);

const userName = prompt("Please enter your name");
alert("Вітаємо " + userName + "!");

const acept = confirm("ви підтверджуєте дію?");
if (acept) {
    alert("Дякую за підтвердження!");
}
else {
    alert("Дію відмінено!");
}

alert("ця дія може зашкодити вашому пристрою!");
const dangerousFile = confirm("Ви дійсно хочете продовжити?");
if (dangerousFile) {
    alert("Дякую за підтвердження!");
} else
{
    alert("Дію відмінено!");
}


