//type aliases
type numOrBool = number | boolean;
type stringOrNum = string | number;

type userId = stringOrNum;

type Band = {
  name: string;
  active: boolean;
  albums: string[];
  genre: string;
  grammy: numOrBool;
};

const tool: Band = {
  name: "Tool",
  active: true,
  albums: ["Laterealus", "10,000 days", "Fear Innoculum"],
  genre: "progressive rock",
  grammy: 4,
};

// console.log(tool.albums);
/////////////////////////////////////////////////////////////////////////

// Literal types

let myName: "John";
let userName: "John" | "Amy" | "Karl";

/////////////////////////////////////////////////////////////////////////

//functions

// functions that do not return anything implicitly returns a void
function logMsg(message: any) {
  console.log(message);
}

function add(a: number, b: number): number {
  return a + b;
}

type mathFunc = (a: number, b: number) => number;

// interface mathFunc {
//   (a: number, b: number): number;
// }

let multuply: mathFunc = (a, b) => a * b;

// optional params
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") return a + b + c;
  return a + b;
};
console.log(addAll(2, 2));

// default params
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};
console.log(sumAll(2, 2));

// Rest params
const total = (...nums: number[]): number => {
  return nums.reduce((a, b) => a + b, 0);
};

logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// never type

const createError = (err: string) => {
  throw new Error(err);
};

// function createError(err: string): never {
//   throw new Error(err);
// }

const numOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("this should never happen");
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// assertions

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific

let a: One = "Hi there";
let b = a as Two; // less specific
let c = a as Three; // more speific
