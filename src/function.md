TypeScript Functions – Important Concepts
```
1️⃣ Function with Type Annotations
function add(a: number, b: number): number {
  return a + b;
}

```
Always type parameters

Always mention return type
```
2️⃣ Arrow Functions
const multiply = (a: number, b: number): number => a * b;


Common in React

Shorter syntax
```
```
3️⃣ void Return Type
function logMessage(msg: string): void {
  console.log(msg);
}


Used when function does not return anything
```
```
4️⃣ Optional Parameters (?)
function greet(name: string, age?: number): void {}


Optional parameters must be last
```
```
5️⃣ Default Parameters
function discount(price: number, rate: number = 10): number {
  return price - price * rate / 100;
}
```
```
6️⃣ Union Types in Functions
function printId(id: string | number): void {
  console.log(id);
}
```
```
7️⃣ Type Narrowing Inside Functions ⭐
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toString();
}
```
```
8️⃣ Function Types (Function Signatures)
type Calculator = (a: number, b: number) => number;

const add: Calculator = (x, y) => x + y;
```
```
9️⃣ Rest Parameters (...)
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
```
```
🔟 never Type in Functions
function throwError(msg: string): never {
  throw new Error(msg);
}


Function never finishes

Used for errors / infinite loops
```
```
1️⃣1️⃣ Function Overloads ⭐
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: any, b: any) {
  return a + b;
}
```
```
1️⃣2️⃣ Callback Functions
function process(fn: (msg: string) => void) {
  fn("Hello");
}
```
```
1️⃣3️⃣ Anonymous Functions
setTimeout(function (): void {
  console.log("Done");
}, 1000);