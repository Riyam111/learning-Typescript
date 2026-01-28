/*What is an interface? (in plain words)

An interface is a blueprint / contract for an object.

It tells TypeScript:

“If something claims to follow this interface, it MUST have these properties with these types.” */


/*type chai={
    name:string
    sugar:number

}

class serve implements chai{
    name="adrakchai"
    sugar=1
}*/

//here we can also use interfaces
interface chai{
name:string
sugar:number
}
class serve implements chai{
    name="adrakchai"
    sugar=12
}
/**
 Basic interface example
interface User {
  name: string;
  age: number;
  isLoggedIn: boolean;
}

const user1: User = {
  name: "Riya",
  age: 20,
  isLoggedIn: true
};


If you miss a property or give wrong type → ❌ TypeScript error.

Optional properties (?)

Use ? when a property is not compulsory.

interface User {
  name: string;
  age?: number;
}

const u1: User = { name: "Cupcake" }; // valid

Readonly properties 🔒

Use readonly when value should not change.

interface Product {
  readonly id: number;
  name: string;
}

const p1: Product = {
  id: 101,
  name: "Laptop"
};

// p1.id = 202 ❌ Error
 */

//merging two property
type tea={
    adrak:string
}
type coffe={
    expresso:string
}
type bevrage=tea & coffe
const drink:bevrage={
    adrak:"kadak",
    expresso:"starbucks"
    
}


