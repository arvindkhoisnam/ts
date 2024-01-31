"use strict";
const tool = {
    name: "Tool",
    active: true,
    albums: ["Laterealus", "10,000 days", "Fear Innoculum"],
    genre: "progressive rock",
    grammy: 4,
};
let myName;
let userName;
function logMsg(message) {
    console.log(message);
}
function add(a, b) {
    return a + b;
}
let multuply = (a, b) => a * b;
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
const total = (...nums) => {
    return nums.reduce((a, b) => a + b, 0);
};
const createError = (err) => {
    throw new Error(err);
};
const numOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("this should never happen");
};
let a = "Hi there";
let b = a;
let c = a;
<<<<<<< HEAD
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 3, "add");
let newVal = addOrConcat(2, 3, "add");
console.log(newVal);
console.log(typeof newVal);
=======
class Coder {
    constructor(name, music, age, lang = "typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const arv = new Coder("Arvind", "prog", 30);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return this.lang;
    }
}
const wd = new WebDev("M3pro", "arvind", "music", 30);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is ${action} the ${this.instrument}`;
    }
}
const arvind = new Guitarist("Arvind", "guitar");
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    getDetails() {
        return `Employee name is ${this.name} and employee id is ${this.id}`;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const June = new Peeps("June");
const Mark = new Peeps("Mark");
>>>>>>> 598621279b60242fe0c65ca4e162294831890d50
