console.log('№1');

const numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);

console.log('№2');

const strings = ['one', 'two', 'three'];
strings[3] = 'four';
console.log(strings);

console.log('№3');

const sum = [5, 9, 8, 7, 8, 15, 95, 7, 7, 63];
let total = 0;
for (let i = 0; i < sum.length; i += 1){
    total += sum[i];
}
console.log(total);

console.log('№4');

const arr = [13, 15, 7, 9, 54];
for (const num of arr) {
    console.log(num);
}

console.log('№5');

const newArr = ['morning', 'window', 'computer', 'mouse', 'sun', 'sum']
for (let i = 0; i < newArr.length; i++){
    if (newArr[i].length < 5) {
        continue;
    }
    console.log(newArr[i]);
}

console.log('№6');

const newSum = [5, 9, 8, 7, 8, 15, 95, 7, 7, 63];
let max = newSum[0];
for (let i = 0; i < newSum.length; i++){
    if (newSum[i] > max) {
        max = newSum[i];
    }
}
console.log(max);

console.log('№7');

const newNum = [5, 9, 2, 7, 8, 15, 95, 6, 4, 63];
for (let i = 0; i < newNum.length; i++) { 
    if (newNum[i] % 2 === 0) {
        console.log(newNum[i]);
    }
}