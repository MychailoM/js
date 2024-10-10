//reduce

// const num = [15, 60, 5, 31, 87];
// const sum = num.reduce((acc, value) => acc + value, 0);
// console.log(sum);



// const tweets = [
//     { id: '00', likes: 100, tags: ['js, react'] },
//     { id: '01', likes: 25, tags: ['html, css'] },
//     { id: '02', likes: 88, tags: ['sass, css'] },
// ];

// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0)
// console.log(likes);

// const tags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
// }, [])
// console.log(tags)




//sort

// const numbers = [5, 4, 1, 9, 5, 7];
// console.log(numbers.sort())

// const later = ["c", "b", "w", "q", "a", "z"];
// console.log(later.sort());

// const lat = ["c", "B", "w", "Q", "a", "Z", "D"];
// console.log(lat.sort());

// const users = ['Nick', 'Bob', 'John', 'Anna'];
// console.log(users.sort())



// const users = [
//     { name: 'Bob', daysActive: 14 },
//     { name: 'July', daysActive: 3 },
//     { name: 'Nik', daysActive: 30 },
//     { name: 'Jhon', daysActive: 1 },
    
// ];

// const sortByDays = (a, b) => b.daysActive - a.daysActive;
// console.log(users.sort(sortByDays));


// const goods = ['orange', 'apple', 'kivi', 'banana'];
// goods.sort(function (a, b) {
//     return a.localeCompare(b)
// }); console.log(goods)



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// const even = numbers.filter(x => x % 2 === 0);
// const doubled = even.map(x => x * 2);
// const reversed = doubled.reverse();
// console.log(reversed)


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers
//     .filter(x => x % 2 === 0)
//     .map(y => y * 2)
//     .reverse();
// console.log(result)





// const arr = [
//     { name: 'John', age: 32 },
//     { name: 'Jane', age: 26 },
//     { name: 'Mike', age: 42 },
//     { name: 'Emily', age: 29 }
// ];

// arr.sort(function (a, b) {
//     return a.name.localeCompare(b.name);
// }); console.log(arr);





