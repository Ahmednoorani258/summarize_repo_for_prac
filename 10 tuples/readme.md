# tuples

> In TypeScript, tuples are a type that allows you to express an array where the type of a fixed number of elements is known, but need not be the same. Tuples are similar to arrays but have a fixed number of elements and their types are known in a specific order.

let tuple: [string, number];

// Initialize it
tuple = ["hello", 10]; // Valid
tuple = [10, "hello"]; // Error: Type 'number' is not assignable to type 'string'

// Accessing elements
console.log(tuple[0]); // "hello"
console.log(tuple[1]); // 10


 # Tuple Destructuring:

let tuple: [string, number] = ["Alice", 30];
let [name, age] = tuple;
console.log(name); // "Alice"
console.log(age); // 30

# tuple union

> You can define tuples that allow for multiple possible types at specific positions using union types.

type NameOrAge = [string | number, string | number];

let person1: NameOrAge = ["Alice", 30]; // Valid
let person2: NameOrAge = [25, "Bob"]; // Valid


