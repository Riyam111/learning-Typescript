## Interface in TypeScript

An interface is used to define the structure (shape) of an object.
It tells TypeScript what properties and methods an object should have.

👉 Interfaces are only for type-checking and do not exist at runtime.

Basic Interface Example
```
interface User {
  name: string
  age: number
}

const user1: User = {
  name: "Riya",
  age: 21
}


✔ Object must match the interface exactly
```

### Optional Properties (?)
```
interface Student {
  name: string
  rollNo: number
  grade?: string
}

const s1: Student = {
  name: "Aman",
  rollNo: 12
}


grade is optional.
```

### Readonly Properties
```
interface Product {
  readonly id: number
  name: string
  price: number
}

const item: Product = {
  id: 101,
  name: "Notebook",
  price: 50
}

// item.id = 102 ❌ Error


readonly → cannot be changed after initialization.
```

### Interface with Functions (Methods)
```
interface Calculator {
  add(a: number, b: number): number
}

const calc: Calculator = {
  add(a, b) {
    return a + b
  }
}
```
### Interface for Function Type
```
interface Greet {
  (name: string): string
}

const greet: Greet = (name) => {
  return `Hello ${name}`
}
```

### Extending Interface (Inheritance)
```
interface Person {
  name: string
}

interface Employee extends Person {
  empId: number
}

const emp: Employee = {
  name: "Riya",
  empId: 123
}
```
Interface vs Type (Important Point ✨)
Feature	      interface	              type
Object structure	✅	            ✅
Extendable	✅ (extends)	✅ (&)
Declaration merging	✅	❌
Union types	❌	✅

### Declaration Merging (Interface Special Power)
```
interface Car {
  brand: string
}

interface Car {
  price: number
}

const myCar: Car = {
  brand: "Tesla",
  price: 5000000
}


TypeScript merges both interfaces 🔥
```
### Interface with Array
```
interface StringArray {
  [index: number]: string
}

const arr: StringArray = ["chai", "coffee"]
```