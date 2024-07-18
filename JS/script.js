console.log("Hi");

function Me() {
    this.name = "zara";
    this.age = 25;
}

const person = new Me();

console.log(person); // آبجکت ساخته می شود

// class CoolGuy {
//     specialTrick = nothing;

//     CoolGuy(trick) {
//         specialTrick = trick;
//     }

//     showOff() {
//         output("Here's my trick: ", specialTrick);
//     }
// }

class Person {
    constructor(nameFA, nameEN, nameLA, age, favorite) {
        this.nameFA = nameFA;
        this.nameEN = nameEN;
        this.nameLA = nameLA;
        this.age = age;
        this.favorite = favorite;
    }

    output() {
        console.log(this.nameFA, this.nameEN, this.nameLA);
    }
}

const person1 = new Person("پروفسور", "serjio", "professor", "32", true);

person1.output();

// const person2 = new Person("Bob", 25);

console.log(person1);
// console.log(person2);
