📘 Arrays in TypeScript – Important Concepts
1️⃣ Basic Array Types
```
let nums: number[] = [1, 2, 3];
let names: string[] = ["Riya", "Cupcake"];

2️⃣ Generic Array Syntax
let scores: Array<number> = [10, 20, 30];


Same as number[]

Preferred in generic functions
```
```
3️⃣ Mixed Type Arrays (Union)
let data: (string | number)[] = ["tea", 10];


❌ Wrong:

string[] | number[]
```
4️⃣ Array of Objects
type User = {
  name: string;
  age: number;
};

let users: User[] = [
  { name: "Riya", age: 20 }
];

5️⃣ Readonly Arrays
let prices: readonly number[] = [10, 20];
// prices.push(30); ❌


or

let prices: ReadonlyArray<number> = [10, 20];

6️⃣ Tuples (Fixed Length Arrays)
let user: [string, number] = ["Riya", 20];


Fixed order

Fixed length

7️⃣ Optional Tuple Elements
let product: [string, number?] = ["Tea"];

8️⃣ Rest Elements in Tuples
let rgb: [number, number, ...number[]] = [255, 0, 0, 0.5];