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
// console.log(addAll(2, 2));

// default params
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};
// console.log(sumAll(2, 2));

// Rest params
const total = (...nums: number[]): number => {
  return nums.reduce((a, b) => a + b, 0);
};

// logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

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

// const span = document.getElementById("year") as HTMLSpanElement;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// classes

class Coder {
  // name: string;
  // music: string;
  // age: number;
  // lang: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number, // private - can only be accessed inside this class only
    protected lang: string = "typescript" //protected - can be accessed in this class and other class which extends this class
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return this.age;
  }
}

const arv = new Coder("Arvind", "prog", 30);

// console.log(arv.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return this.lang;
  }
}

const wd = new WebDev("M3pro", "arvind", "music", 30);
// console.log(wd.getLang());

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} is ${action} the ${this.instrument}`;
  }
}

const arvind = new Guitarist("Arvind", "guitar");
// console.log(arvind.play("strumming"));

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count; // can only be called from Peeps class and not from any instance of Peeps
  }
  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
  public getDetails() {
    return `Employee name is ${this.name} and employee id is ${this.id}`;
  }
}

const John = new Peeps("John");
const June = new Peeps("June");
const Mark = new Peeps("Mark");

// console.log(Peeps.count);
// console.log(John.getDetails());
// console.log(Mark.getDetails());
// console.log(June.getDetails());
