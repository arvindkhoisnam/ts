function add(a: number, b: number): number {
  return a + b;
}

const result = add(2, 9);
console.log(result);

type band = {
  name: string;
  active: boolean;
  albums: string[];
  genre: string;
  grammy: number | boolean;
};

const tool: band = {
  name: "Tool",
  active: true,
  albums: ["Laterealus", "10,000 days", "Fear Innoculum"],
  genre: "progressive rock",
  grammy: 4,
};

console.log(tool);
