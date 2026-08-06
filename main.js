

class Person {
    constructor(firstname, lastname) {
        this._first = firstname;
        this._last = lastname;
    }

    get firstname() {return this._first};
    set firstname(name) {this._first = name};

    get lastname() {return this._last};
    set lastname(name) {this._last = name};

    get fullname() {return `${this._first} ${this._last}`};
    set fullname(name) {
        const fullnameParam = name.trim().split(/\s/g);
        this._first = fullnameParam[0];
        this._last = fullnameParam[1];
    }
}

const person = new Person("Ada", "Lovelace");
console.log(person.fullname);
person.firstname = "Linus";
console.log(person.firstname);
person.lastname = "Torvalds"
console.log(person.lastname);
