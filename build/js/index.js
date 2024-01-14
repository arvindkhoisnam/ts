"use strict";
const tool = {
    name: "Tool",
    active: true,
    albums: ["Laterealus", "10,000 days", "Fear Innoculum"],
    genre: "progressive rock",
    grammy: 4,
};
// console.log(tool.albums);
/////////////////////////////////////////////////////////////////////////
// Literal types
let myName;
let userName;
/////////////////////////////////////////////////////////////////////////
//functions
// functions that do not return anything implicitly returns a void
function logMsg(message) {
    console.log(message);
}
function add(a, b) {
    return a + b;
}
// interface mathFunc {
//   (a: number, b: number): number;
// }
let multuply = (a, b) => a * b;
// optional params
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
console.log(addAll(2, 2));
// default params
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
console.log(sumAll(2, 2));
// Rest params
const total = (...nums) => {
    return nums.reduce((a, b) => a + b, 0);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// never type
// function createError(err: string): never {
//   throw new Error(err);
// }
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
