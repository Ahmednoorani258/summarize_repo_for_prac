# what is objects ?
>In TypeScript, an object refers to a specific instance of a type that typically contains properties and methods.

# optional property
>In TypeScript, an optional property in object is one that may or may not be present when creating an object based on that interface or type.

interface Person {
  name: string;
  age?: number; // Optional property
}

let person1: Person = { name: "Alice" }; // Valid
let person2: Person = { name: "Bob", age: 30 }; // Valid
let person3: Person = { age: 25 }; // Error: 'name' is required

# readonly property

>In TypeScript, a readonly property is one that can only be initialized once and cannot be changed afterwards.

# index singnature

>In TypeScript, an index signature allows objects or arrays to have flexible property names that are not known at compile-time. It defines the types for the keys (indices) and their corresponding values.

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Hello", "World"];
let firstItem: string = myArray[0]; // "Hello"


interface Dictionary {
  [key: string]: number;
}

let ages: Dictionary = {
  "Alice": 30,
  "Bob": 25,
};
let aliceAge: number = ages["Alice"]; // 30

# nested objects

> Nested objects in TypeScript refer to objects that are properties of another object. This allows for hierarchical structuring of data.

interface Address {
  street: string;
  city: string;
}

interface Person {
  name: string;
  age: number;
  address: Address; // Nested object
}

let person: Person = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};

console.log(person.address.city); // Outputs: Anytown
