cheat sheet of types and interface link:

           ||
           ||
          \\//
           \/  
https://www.typescriptlang.org/cheatsheets/


## type inference

> WHEN TYPESCRIPT UNDERSTAND CARIABLE TYPES DYNAMICALLY ITS CALLED  TYPE INFERENCE.
let a = 'ahmed

## TYPE ANNOTATION __or__ strongly typed syntax

> WHEN WE GIVE ASSIGN THE TYPE TO VARIABLE IS CALLED TYPE ANNOTATION.
let a: string = 'ahmed

## string
> it contain data with quotation e.g  'a'  ,  "b" , `c`.

## number
> it contain numbers

## boolean
> it contains only true & False.

## bigint
> "TypeScript's bigint type represents integers of arbitrary precision, useful for handling large numbers beyond the capabilities of the number type
let bigNumber: bigint = 9007199254740991n;


## null
> TypeScript's null type represents a value that is typically used to denote the intentional absence of any object value."
let nullValue: null = null;


## undefined
> "TypeScript's undefined type represents a value that is typically used to denote the absence or uninitialized state of a variable."
let undefinedValue: undefined = undefined;


## Symbol
> In TypeScript, the symbol type represents unique, immutable values often used as object keys to avoid property name conflicts.
let mySymbol: symbol = Symbol('myUniqueSymbol');
console.log(mySymbol); // Symbol(myUniqueSymbol)

## Unknown
> "TypeScript's unknown type represents values that can be of any type, requiring type checks or assertions for safe usage."
let userInput: unknown = 10;

let doubleValue = userInput * 2; // Error: Object is of type 'unknown'.

## Never
> TypeScript's never type represents values that never occur, used for functions that never return or variables that cannot be assigned any value.
function throwError(message: string): never { throw new Error(message); }

## Readonly
> "TypeScript's readonly type modifier indicates that a property or array cannot be reassigned a new value after its initial assignment."
interface Point {
    readonly x: number;
    readonly y: number;
}

let p: Point = { x: 10, y: 20 };
// p.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.


## any
>"TypeScript's any type represents values of any type, allowing for dynamic and flexible programming but sacrificing type safety."

let dynamicValue: any = 42;
dynamicValue = "Hello, TypeScript!";

## Void
> void: Represents the absence of a value, often used as the return type of functions that do not return a value.
