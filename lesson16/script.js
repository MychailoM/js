// const baseSalary = 10000;
// const overtime = 8;
// const rate = 10;

// const getWage = (baseSalary, overtime, rate) => {
//     return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);//...



// //ООП

// const employee = {
//     baseSalary: 10000,
//     overtime: 8,
//     rate: 10,
//     getWage() {
//         return this.baseSalary + this.overtime * this.rate;
//     }
// }

// employee.getWage();




// class User{
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
// }
// }

// const bob = new User('Bob', 'bob@ukr.net');
// console.log(bob)

// const alex = new User('Alex', 'alex@ukr.net');
// console.log(alex);



// class User{
//     name;
//     #email;
//     constructor({name, email}) {
//         this.name = name;
//         this.email = email;
//     }
//     getEmail() {
//         return this.email;
//     }
//     changeEmail(newEmail) {
//         this.email = newEmail;
//     }
// }

// const bob = new User(
//     {
//         name: 'Bob',
//         email: 'bob@ukr.net'
//     }
// );
// console.log(bob)









// class User {
//     #email;
//     constructor(email) {
//         this.#email = email;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// class Admin extends User{
//     constructor({ email, posts }) {
//         super(email);
//         this.posts = posts;
//     }
//     addPosts(post) {
//         this.posts.push(post)
//     }
// }

// const admin = new Admin({email: 'admin@ukr.net', posts: []});
// console.log(admin);
// // console.log(admin.email);
// admin.addPosts("newPost2");
// admin.addPosts('newPost');
// console.log(admin.posts);




// class Person{
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new Person("John", "Doe");
// const person2 = new Person("Mychailo", "Martsiniv")
// console.log(person1.getFullName());
// console.log(person2.getFullName());








// class Calculator{
//     add(x, y) {
//         return x + y;
//     };

//     subtract(x, y) {
//         return x - y;
//     }

//     multiply(x, y) {
//         return x * y;
//     }

//     divide(x, y) {
//         if(y === 0){return 'На нуль ділити не можна !!!'}
//         return x / y;
//     }

// }


// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0)); //





// class Animal{
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         return "animal sounds"
//     }
// }

// class Dog extends Animal{
//     constructor(name) {
//         super(name)
//     }
//     speak() {
//         return 'bark'
//     }
// }

// const animal1 = new Animal('Lion');
// console.log(animal1.speak()); // Animal sound

// const dog1 = new Dog('Pug');
// console.log(dog1.speak()); // Bark!






// class Product{
//     constructor(name, price, discount) {
//         this.name = name;
//         this.price = price;
//         this.discount = discount;
//     }

//     getDiscountPrice() {
//         if (this.discount > 0) {
//             return this.price - (this.price * this.discount / 100);
//         } return this.price;
//     }
// }

// const product1 = new Product('Phone', 500, 10);
// console.log(product1.getDiscountPrice()); // 450




class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person{
    constructor(name, age, position) {
        super(name, age);
        this.position = position;     
        
    }
    getInfo() {
        return `${this.name} is a ${this.position} and is ${this.age} years old`;
    }
}

const john = new Employee("John", 32, "programmer");
console.log(john.getInfo()); // "John is a programmer and is 32 years old"