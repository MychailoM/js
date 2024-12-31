const message = "hallo " + "JS";
console.log(message);

const result = 6 + "6";
console.log(result); //66

const number = 6 + 6 + "6";
console.log(number); //126



const a = "My name is Misha";
console.log(a.length);//16



const b = "Welcome to New York";
console.log(b.toLocaleLowerCase());//welcome to new york

const c = "Welcome to New York";
console.log(c.toLocaleUpperCase());//WELCOME TO NEW YORK

console.log(b.indexOf('to'))//8
console.log(b.indexOf("9"));//-1

console.log(b.includes('new'));//false
console.log(b.includes('New'));//true

console.log(b.startsWith('Wel'));//true
console.log(b.endsWith('.'));//false

console.log(b.padEnd(22, "*"));
console.log(b.padStart(22, "*"));



const name = 'Nikc';
const age = 15;
const mood = 'Happy';
const mes = 'My name is ' + name + ', i`m ' + age + ' years old and ' + mood + '.';
console.log(mes);

const sameMes = `My name is ${name}, i'm ${age} years old and ${mood}.`;
console.log(sameMes);

console.log(`Сума покупки: ${121 + 58}`);

const userName = 'Misha Martsiniv';
console.log(userName.length);
console.log(userName.indexOf(" "));

const x ='Max';
const y = 'Qwerty';
const n = 'VIP';
const g = 5;
console.log(`Гість ${x} ${y} поселяється в ${n} номер ${g}`);



