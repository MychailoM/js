

// const arr = ['hello', 1, false, null, undefined];

//const names = ['Ольга', 'Орися', 'Олег', 'Олена', 'Олександр', 'Олександра', 'Олеся', 'Олексій', 'Онуфрій', 'qwerty', 'Орест',];
// console.log(names);

// console.log(names[1]);

// names[9] = 'Остап';

// names[11] = 'Оксана';
// console.log(names);

// names[18] = "йцукен";
// console.log(names);

// console.log(names.length);

// names.length = 9;
// console.log(names)

// names.length = 19;
// console.log(names);

// const names = ['Ольга', 'Орися', 'Олег', 'Олена', 'Олександр', 'Олександра', 'Олеся', 'Олексій', 'Онуфрій', 'qwerty', 'Орест',];

// for (let i = 0; i < names.length; i += 1){
//     console.log('Names: ', names[i]);
// }

// for (const name of names) {
//     console.log(name);
// }

// const string = 'hello';
// for (const letter of string) {
//     console.log(letter)
// }


//const names = ['Ольга', 'Орися', 'Олег', 'Олена', 'Олександр', 'Олександра', 'Олеся', 'Олексій', 'Онуфрій', 'qwerty', 'Орест',];

// const nameInd = 'Олексій';
// let message;
// for (const name of names) {
//     if (name === nameInd) {
//         message = `Клієнта ${name} знайдено`;
//         break;
//     }
//     message = 'клієнта не знайдено';
// }
// console.log(message)

// const num = [20, 1, 35, 14, 88, 7, 3, 4, 34];
// const newNum = 15;

// for (let i = 0; i < num.length; i += 1){
//     if (num[i] < newNum) {
//         continue;
//     }
//     console.log(`Число ${newNum} більше ніж ${num[i]}`);
// }



// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// // console.log(matrix[1][2])

// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//     console.log('підмасив матриці matrix[i]:', matrix[i]);

//     for (let x = 0; x < matrix[i].length; x += 1) {
//         console.log('елемент підмасиву матриці matrix[i][x]: ', matrix[i][x]);
//         total += matrix[i][x];
//     }
// }
// console.log(total);


// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }
// console.log(total);

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         total += numbers[i];
//     }
// }

// console.log(total);

for (const number of numbers) {
    console.log(number);
}