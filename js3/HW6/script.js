console.log('завдання 1')

let count = 0;
while (count <= 10) {
    console.log(count)
    count += 1;
}

console.log("завдання 2");

const max = 20;

for (let i = 2; i <= max; i += 1){
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

console.log("завдання 3");
const num = 7;
for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`${i} x ${num} = ${result}`);
}

const n = 12;
for (let i = 0; i < n; i++){
    if (i >= n) {
        break;
    }
    console.log(n);
}


let a = 1;
while (a <= 20) {
    if (a % 3 === 0) {
        a += 1;
        continue;
    }
    console.log(a);
}