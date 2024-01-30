type method = "add" | "sub" | "mul" | "div";
function cal(a: number, b: number, type: method): number {
  //   if (type === "add") return a + b;
  //   if (type === "sub") return a - b;
  //   if (type === "mul") return a * b;
  //   if (type === "div") return a / b;
  switch (type) {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      return a / b;
    default:
      throw new Error("Invalid type");
  }
}
// console.log(cal(2, 3, "add"));

interface PersonGenderPropersties {
  gender: string;
  orinetation: string;
  pronouns: string;
}
interface PersonInterface extends PersonGenderPropersties {
  name: string;
  age: number;
}

function greet(person: PersonInterface): string {
  return `Hi ${person.name}, you are a ${person.age} year old ${person.orinetation} ${person.gender} and your pronouns are ${person.pronouns}.`;
}

console.log(
  greet({
    name: "arvind",
    age: 30,
    gender: "male",
    orinetation: "straight",
    pronouns: "he/him",
  })
);

// class Person implements PersonInterface {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     return `Hi ${this.name}`;
//   }
// }
// const arv = new Person("arvind", 30);
// console.log(arv.greet());

enum Arithmatic {
  Add,
  Sub,
  Div,
  Mul,
}

function calculate(a: number, b: number, type: Arithmatic) {
  console.log(type);
  return 1;
}

calculate(2, 3, Arithmatic.Div);
