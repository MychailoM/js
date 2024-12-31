// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filterNum = [];

// for (let i = 0; i < num.length; i++) {
//     if (num[i] > 3) {
//         filterNum.push(num[i]);
//     }
// }
// console.log(filterNum)


// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filterNum = num.filter(value => {
//     return value > 3;
// })


// const one = (array, value) => {
//     for (let i = 0; i < array.length; i++){
//         array[i] = array[i] * value;
//     }
// }
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// one(num, 2);
// console.log(num);


// const pure = (array, value) => {
//     const result = [];

//     for (let i = 0; i < array.length; i++){
//         result.push(array[i] * value)
//     }
//     return result;
// }

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newNum = pure(num, 2)
// console.log(num);
// console.log(newNum)



//forEach

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach(num => console.log(num));

// numbers.forEach((num, ind) => console.log(`індекс ${ind} - ${num} значення `))





//map

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newNumbers = numbers.map(num => num * 5);
// console.log(newNumbers)


// const users = [
//     { name: 'Bob', isActive: true },
//     { name: 'Job', isActive: false },
//     { name: 'Rob', isActive: true },
// ];

// const names = users.map(user => user.name);
// console.log(names)




//filter

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(numbers.filter(num => num < 5))
// console.log(numbers.filter(num => num > 5));
// console.log(numbers.filter(num => num === 5));


// const users = [
//     { name: 'Bob', isActive: true },
//     { name: 'Job', isActive: false },
//     { name: 'Rob', isActive: true },
// ];

// const active = users.filter(user => user.isActive);
// console.log(active);

// const inactive = users.filter((user) => !user.isActive);
// console.log(inactive);





//find

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(numbers.find(num => num > 5));
// console.log(numbers.find((num) => num < 5));
// console.log(numbers.find((num) => num = 5));









//every

// const big = val => val >= 10;
// console.log([15, 2, 44, 9, 65, 2].every(big))
// console.log([15, 72, 44, 90, 65, 22].every(big));



//some
// console.log([15, 2, 44, 9, 65, 2].some(big));


