// const hotel = {
//     name: 'Hilton',
//     stars: 4,
//     capacity: 150,
// };

// console.log(hotel);
// console.log(hotel.name);
// console.log(hotel['stars']);

// hotel.name = 'Hilton Resort';
// console.log(hotel.name);

// hotel.address = 'NY';
// console.log(hotel);

// delete hotel.stars;
// console.log(hotel);

// console.log(hotel.pool);


// let name = "Hilton Resort";
// let stars = 4;

// const hotelOld = {
//     name: name,
//     stars: stars,
//     capacity: 150,
// }

// console.log(hotelOld);

// const hotelNew = {
//     name,
//     stars,
//     capacity: 200,
// };

// console.log(hotelNew);

// const key = 'user';
// const obj = {};
// obj[key] = 'Bob';
// console.log(obj)


// const key = "user";
// const getKey = function () {
//     return 'age';
// }

// const obj = {
//     [key]: 'Bob',
//     [getKey()]: 20,
// }

// console.log(obj)


// const hotel = {
//     name: 'Hilton',
//     stars: 4,
//     capacity: 150,
//     getMassage6() {
//         console.log('hallo!')
//     },

//     getMassage5: function () {
//         console.log('hello');
//     }
// };

// hotel.getMassage6();
// hotel.getMassage5();


// const hotel = {
//     name: 'Hilton',
//     stars: 4,
//     capacity: 150,
//     showName() {
//         console.log(this.name);
//     }
// }
// hotel.showName();



// const person = {
//     name: 'Misha',
//     age: 15,
//     gender: 'boy',
//     displayInfo() {
//         console.log(`name: ${person.name}, age: ${this.age}, gender: ${person.gender}`);
//     }
// }; person.displayInfo();

// const students = [
//     {
//         name: 'David',
//         age: 15,
//         gender: 'Body',
//         grade: 9,
//     },
//     {
//         name: 'Misha',
//         age: 15,
//         gender: 'Body',
//         grade: 10,
//     },
//     {
//         name: 'Roman',
//         age: 17,
//         gender: 'Body',
//         grade: 10,
//     },
// ];
// function calculate(students) {
//     let total = 0;
//     for (let i = 0; i < students.length; i += 1) {
//         total += students[i].grade;
//     }
//     const midle = total / students.length;
//     return midle;
// }
// const total = calculate(students)
// console.log(`середній бал групи ${total}`)

const resturant = {
    name: 'забігаловка',
    cuisine: 'фастфуд',
    address: 'м.Київ',
    rating: 7,
    update(newAddress, newRating) {
        if (newAddress) {
            this.address = newAddress;
        }

        if (newRating !== undefined && newRating >= 0 && newRating <= 10) {
            this.rating = newRating;
        }
    }
}
console.log(`до оновлення: ${resturant.address}, ${resturant.rating}`);
resturant.update('м.Львів', 7.5);
console.log(`після оновлення: ${resturant.address}, ${resturant.rating}`);