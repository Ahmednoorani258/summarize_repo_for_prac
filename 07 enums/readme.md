# enums and const enums

In TypeScript, enum and const enum are both used to define a set of named constants. However, they differ in how they are represented and used by the TypeScript compiler.

>Enum:
An enum in TypeScript is a way to define a collection of related constants.

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let direction: Direction = Direction.Up;
console.log(direction); // Outputs: 0

>Const Enum:

A const enum is a more restricted form of enum that is optimized away during compilation. It does not generate any JavaScript code for the enum itself; instead, it directly substitutes the enum values where they are used in the generated JavaScript.

const enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let direction: Direction = Direction.Up;
console.log(direction); // Outputs: 0


Key Differences:
JavaScript Output:

    Enum: Generates actual JavaScript code for the enum and its values.
    Const Enum: Does not generate JavaScript code for the enum itself; substitutes enum values directly where used.
Usage:

    Enum: Used when you want the enum's structure to be reflected in the generated JavaScript and when you may need to access enum values dynamically.
    Const Enum: Used when you want to optimize away the enum at compile-time and when you have a large number of enum references that can benefit from direct substitution.
Compatibility:

    Enum: Compatible with all TypeScript versions.
    Const Enum: Requires TypeScript 2.4 or later for full support.