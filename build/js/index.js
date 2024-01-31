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
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 3, "add");
let newVal = addOrConcat(2, 3, "add");
console.log(newVal);
console.log(typeof newVal);
