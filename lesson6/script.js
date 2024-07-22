// let counter = 0;
// while (counter < 10) {
//     console.log('counter: ', counter);
//     counter += 1;
// }

// let password = '';
// do {
//     password = prompt('введіть парольдовше 4-х символів', '');
// } while (password.length < 5);

// console.log('ваш пароль: ', password);

// for (let i = 0; i < 10; i += 1){
//     if (i === 5) {
//         break;
//     }
// }

// const max = 10;

// for (let i = 0; i < max; i + 1){
//     console.log
// }

// const num = 30;
// for (let i = 0; i < num; i += 1){
//     if (
//         i % 2 === 0
//     )
//     {
//         continue
//     }
//     console.log('непарні: ', i);
// }

// const grates = [1, 2, 8, 4, 7, 5, 6, 8, 3];
// let sum = 0;
// let count = 0;

// for (let i = 0; i < grates.length; i++){
//     sum += grates[i];
//     count++;
    
//     const everage = sum / count;
//     if (everage < 7) {
//         console.log('середній бал менше 7');
//         break;
//     } console.log('оцінка вище 7');
// }

// const max = 15;

// for (let i = 1; i < max; i += 1){
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

let num;
while (true) {
    num = prompt('введіть число більше 100');
    
    if (num > 100 || num === null) {
        console.log('Це число більше 100')
        break;

    } 
} 

