## Generics in TypeScript

Generics allow us to create reusable, type-safe components by passing a type as a parameter.

👉 Instead of fixing a type (number, string), we use a placeholder type like T.

Why Generics?
```
❌ Problem (without generics):

function identity(value: any) {
  return value
}


Loses type safety

No auto-completion
```
## ✅ Solution (with generics):
```
function identity<T>(value: T): T {
  return value
}


Type safe

Keeps original type
```

### Generic Function
```
function printValue<T>(value: T): T {
  return value
}

printValue<string>("chai")
printValue<number>(10)


TypeScript can also infer the type:

printValue("tea")
```

### Generic with Multiple Types
```
function pair<T, U>(a: T, b: U) {
  return [a, b]
}

pair<number, string>(1, "hello")

Generic Interface
interface ApiResponse<T> {
  status: number
  data: T
}

const userResponse: ApiResponse<string> = {
  status: 200,
  data: "Success"
}

Generic Type (Alternative)
type Box<T> = {
  value: T
}

const box1: Box<number> = { value: 100 }

Generic with Array
function getFirst<T>(arr: T[]): T {
  return arr[0]
}

getFirst([1, 2, 3])
getFirst(["a", "b"])
```
Generic Constraints (extends)

Limit the allowed types 👇

function getLength<T extends { length: number }>(item: T): number {
  return item.length
}

getLength("hello")
getLength([1, 2, 3])


❌ Error:

getLength(10)

Generic Class
class Storage<T> {
  private data: T[] = []

  add(item: T) {
    this.data.push(item)
  }

  getAll(): T[] {
    return this.data
  }
}

const numStore = new Storage<number>()
numStore.add(1)

Default Generic Type
interface Result<T = string> {
  value: T
}

const r1: Result = { value: "ok" }
const r2: Result<number> = { value: 200 }
