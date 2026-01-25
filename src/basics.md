### Type Annotation vs Type Inference

- Type Annotation: Explicitly specifying the type.
- Type Inference: TypeScript automatically determines the type.

Best practice is to rely on inference for simple variables and annotations for function parameters and return types.
```
type annotaion:=>>
let age: number = 21;
let name: string = "Riya";

function greet(name: string): string {
  return `Hello ${name}`;
}

type inference=>>
let age = 21;        // inferred as number
let name = "Riya";  // inferred as string
```

### Union
What is a Union Type?

A union type allows a variable to hold one of several types and uses type narrowing to safely operate on the value.

📌 Syntax uses the pipe (|) symbol.
```
let id: number | string;

id = 101;      // ✅ valid
id = "A102";   // ✅ valid
id = true;     // ❌ error
 
# Union in Function Parameters
 function printId(id: number | string) {
  console.log(id);
}

printId(10);       // ✅
printId("A10");    // ✅

# Union with Type Narrowing (IMPORTANT)

When using union types, you must check the type before using it.

function greet(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}


📌 This is called type narrowing.

# Union with Arrays
Array containing multiple types
let data: (number | string)[] = [1, "two", 3];

Either one type of array
let data: number[] | string[];

data = [1, 2, 3];        // ✅
data = ["a", "b"];  
# Union with Objects
type Success = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = Success | ErrorResponse;


Used heavily in API response handling.
```
### any
👉 What is any?

any tells TypeScript:

“Turn off type checking for this value.”

When you use any, TypeScript behaves like plain JavaScript.
```
let value: any;

value = 10;
value = "hello";
value = true;

value.toUpperCase(); // ✅ no error
value.foo.bar();     // ✅ no error
```
Why any is BAD ❌
let data: any = 10;
console.log(data.toUpperCase()); // 💥 Runtime error


TypeScript did NOT warn you.

👉 This defeats the whole purpose of TypeScript.

### unknown

The `unknown` type is a safer alternative to `any`.
It requires type checking before performing operations.

Always narrow the type before usage.
