// const hotel = {
//     name: 'hilton',
//     stars: 4,
//     capacity: 150,
// }

// const { name, stars, status } = hotel;
// const {name = 'hilton resort', stars = 5, status = 'empty'} = hotel
// console.log(name, stars, status);

// const { name: hotelName, stars, status: hotelStatus } = hotel;
// console.log(hotelName, stars, hotelStatus)



// const { name, ...rest } = hotel
// console.log(name)
// console.log(rest);



// let option = {
//     size: {
//         height: 150,
//         width: 150
//     },

//     items: ['kiwi', 'apple'],
// }
// const {
//     size: { height, width },
//     items: [itemOne, itemTwo],
//     title = 'menu'
// } = option;

// console.log(title);
// console.log(itemOne);
// console.log(itemTwo);
// console.log(width);
// console.log(height);



// const color = [255, 150, 20];
// const [red, green, blue, alfa = 0.5] = color;
// console.log(red, green, blue, alfa)

// const arr = ['Mykchailo', 'Martsiniv'];
// let [firstname, surname] = arr;
// console.log(firstname)
// console.log(surname);

// let firstName = arr[0];
// let surName = arr[1];
// console.log(firstName);
// console.log(surName);


// function calculateTotalCost(items) {
//     return items.reduce((total, {price, quantity}) => total + price * quantity, 0)
// }

// const items = [
//     { name: 'Футболка', price: 250, quantity: 2 },
//     { name: 'Джинси', price: 800, quantity: 1 },
//     { name: 'Кросівки', price: 1200, quantity: 1 }
// ];

//   console.log(calculateTotalCost(items)); // 250 * 2 + 800 * 1 + 1200 * 1 = 2500



// function calculateAverageGrade({ grades }) {
//     const total = grades.reduse((sum, grade) => sum + grade, 0);
//     return total / grades(length)
// }

// const student = {
//     name: "Bruce",
//     surname: "Lee",
//     grades: [4, 5, 3],
// };

// console.log(calculateAverageGrade(student));



function getAdultUsers({users}) {
    const a = [];

    for (const { name, age } of users)
    {
        if (age > 18) {
            a.push({name, age})
        }
    }
    return a
}

const data = {
    users: [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 17 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 20 }
    ]
};

console.log(getAdultUsers(data)); 