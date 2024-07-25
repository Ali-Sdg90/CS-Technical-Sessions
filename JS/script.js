console.log("Hi");

// function Person(name, lastname, birthday) {
//     this.Name = name;
//     this.Lastname = lastname;
//     this.Birthday = birthday;

//     console.log(Person.prototype);

//     Person.prototype.test = function () {
//         return " for  test";
//     };
// }

// let user1 = new Person("zara", "mohammadi", 1999);

// let user2 = new Person("sara", "nab", 2002);

// console.log(user2.test());

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak1() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        super.speak1();
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog("Buddy", "Golden Retriever");
dog.speak();
