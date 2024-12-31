class Account{
    constructor({login, email}) {
        this.login = login;
        this.email = email;
    }
    getInfo() {
        return `login: ${this.login}, email: ${this.email}`
    }
}


const mangoOne = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});

console.log(mangoOne.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const polyOne = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});

console.log(polyOne.getInfo()); // Login: Poly, Email: poly@mail.com





class User{
    constructor({ name, age, folowers }) {
        this.name = name;
        this.age = age;
        this.followers = folowers;
    }
    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} folowers`;
    }
}

const mangoTwo = new User({
    name: "Mango",
    age: 2,
    followers: 20,
});

console.log(mangoTwo.getInfo()) // User Mango is 2 years old and has 20 followers

const polyTwo = new User({
    name: "Poly",
    age: 3,
    followers: 17,
});

console.log(polyTwo.getInfo());
// User Poly is 3 years old and has 17 followers





class Storage {
    constructor(items) {
        this.items = items
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        return this.items.push(item);
    }
    removeItem(item) {
        const itemIndex = this.items.indexOf(item);
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
        }
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]






class StringBuilder{
    constructor(str) {
        this._value = str
    }


    get value() {
        return this._value
    }
    append(str) { this._value += str; }
    prepend(str) { this._value = str + this._value; }
    pad(str) { this._value = str + this._value + str; }
    
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='




