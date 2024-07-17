# Array

> In TypeScript, an array is a special type of object used to store multiple values of the same type sequentially.

# Array Type Assertions:

let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;


# Spread Operator (for Arrays):

let fruits: string[] = ["Apple", "Banana"];
let moreFruits: string[] = ["Orange", "Mango"];

let allFruits: string[] = [...fruits, ...moreFruits];
// allFruits is ["Apple", "Banana", "Orange", "Mango"]



# Array Destructuring:

let fruits: string[] = ["Apple", "Banana", "Orange"];
let [firstFruit, secondFruit] = fruits;
// firstFruit is "Apple", secondFruit is "Banana"


# Array of Custom Types

interface Person {
  name: string;
  age: number;
}

let people: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
