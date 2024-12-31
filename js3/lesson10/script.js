// const repeat = function (n) {
//     for (let i = 0; i <= n; i += 1) {
//         console.log(i);
//     }
// }
// repeat(10);



// const filter = function (array, test) {
//     const newFilter = [];
//     for (const element of array) {
//         test(element)
//     }
//     return newFilter;
// }



// const filter = function (array, test) {
//     const newFilter = [];
//     for (const element of array) {
//         const passed = test(element);
//         if (passed){
//             newFilter.push(element)
//         }
//     }
//     return newFilter;
// }

// const fruits = [
//     { name: 'kivi', quantity: 300, isFresh: true },
//     { name: 'orange', quantity: 100, isFresh: false },
//     { name: 'apple', quantity: 88, isFresh: true },
// ]

// const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
// console.log(freshFruits);

// console.log(value)
// value = 5;


// if (true) {
//     console.log(value);
//     var value = 10;
//     console.log(value);
// }
// value = 15;
// console.log(value)




//console.log(value);//error
// const value = 5;
// console.log(value);//5

// if (true) {
//     //console.log(value);//error
//     const value = 10;
//     console.log(value);//10
// }

// console.log(value)



// const add = (...args) => {
//     console.log(args);
// }

// add(2, 17, 15, 6)



// const arr = [1, 2, 3, 4, 5];
// function sumArray(arr, callback) {
//     // пиши код тут
//     let result = 0;
//     for (let i = 0; i < arr.length; i += 1){
//         result += arr[i];
//     }
//     callback(result);
// }

// function cb(sum) {
//     console.log(`сума елементів масиву ${sum}`)
// }
// sumArray(arr, cb);


const arr = [1, 2, 3, 4, 5];

function multiplyArray(arr, num, callback) {
    // код
    const newArr = [];
    for (let i = 0; i < arr.length; i += 1){
        newArr.push(callback(arr[i], num))
    }
    return newArr;
    
}


const result = multiplyArray(arr, 3, (element, num) => { return element * num });
console.log(result)