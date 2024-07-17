// //strongly typed syntax
// let a : string = "Pakistan";
// a = "USA";
// let b : number = 9;
// let c : boolean = true;

// //type inference
// let e = "USA";
// let f = 10.9;
// f = 22;
// let g = false;
// g = true;


//type annotation

let nAme: string = 'ahmed'
//when we describe type of variable this is called type annotation

//***************************************************************** */

//type inference

let nAme1 = 'ahmed'
//when we don't describe type of variable this is called type inference

//***************************************************************** */

//union type

let nAme2: string | number = 'ahmed'

//***************************************************************** */

//literal type

let nAme3: 'ahmed' = 'ahmed'

//***************************************************************** */

//array type

let nAme4: number[] = [1, 2, 3]

//***************************************************************** */

//tuple type

let nAme5: [number, string] = [1, 'ahmed']

//***************************************************************** */

//enum type

enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Red

//***************************************************************** */

//any type

let nAme6: any = 1

//***************************************************************** */

//void type

let nAme7: void = undefined

//***************************************************************** */

//never type

let nAme8: never ;

//***************************************************************** */

//object type

let nAme9: object = {name: 'ahmed'}

//***************************************************************** */

//function type

let nAme10: (a: number, b: number) => number = (a, b) => a + b

//***************************************************************** */

//class type

class Person {}
let nAme11: Person = new Person()

//***************************************************************** */

//interface type

interface Person1 {
    name: string
}
let nAme12: Person1 = {name: 'ahmed'}

//***************************************************************** */

//type alias type

type Person2 = {
    name: string
}
let nAme13: Person2 = {name: 'ahmed'}

//***************************************************************** */

//union type with function type

let nAme14: (a: number, b: number) => number | string = (a, b) => a + b

//***************************************************************** */

//intersection type

let nAme18: Person1 & Person2 = {name: 'ahmed'}

//***************************************************************** */

//type assertion

let nAme19 = 'ahmed' as unknown as Person1

//***************************************************************** */

//type guard

function isPerson(obj: Person1 | Person2): obj is Person1 {
    return (obj as Person1).name !== undefined
}





//all about types

// function types (a:number):number{return 20}
// //    func name parameter type, return type

//************ */
// Anonymous Functions
//************ */


// const names = ["Alice", "Bob", "Eve"];
 
// // Contextual typing for function - parameter s inferred to have type string
// names.forEach(function (s) {
//   console.log(s.toUpperCase());
// });
 
// // Contextual typing also applies to arrow functions
// names.forEach((s) => {
//   console.log(s.toUpperCase());
// });

// // Even though the parameter s didn’t have a type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type s will have.

// // This process is called contextual typing because the context that the function occurred within informs what type it should have.


//************ */
//Object Types
//************ */


// // The parameter's type annotation is an object type
// function printCoord(pt: { x: number; y: number }) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
//   printCoord({ x: 3, y: 7 });

// //easy example with optional parameer
// function userObjPrint(user:{name:string,age?:number}){
//     console.log(`Name : ${user.name}`);
//     console.log(`Age : ${user.age}`);   
// }

// userObjPrint({name:"ahmed",age:19})
// userObjPrint({name:"ahmed"})


// type obj{
//     name:string;
//     age:number;
// }


// // function obj(a:obj) {
// // }

// let a = {
//     a:"ahmed",
//     b:{
//         a:"pib",
//         b: 1205
//     }
// }
// function obj2(a:{a:string,b?:{a:string,b:number}}) {
//     console.log(a.b?.b)
// }

// obj2(a)



//************ */
//Union Types
//************ */


// let str:number| string;

// // The solution is to narrow the union with code, the same as you would in JavaScript without type annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.

// // For example, TypeScript knows that only a string value will have a typeof value "string":

// function printId(id: number | string) {
//   if (typeof id === "string") {
//     // In this branch, id is of type 'string'
//     console.log(id.toUpperCase());
//   } else {
//     // Here, id is of type 'number'
//     console.log(id);
//   }
// }
// // Try
// // Another example is to use a function like Array.isArray:

// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     // Here: 'x' is 'string[]'
//     console.log("Hello, " + x.join(" and "));
//   } else {
//     // Here: 'x' is 'string'
//     console.log("Welcome lone traveler " + x);
//   }
// }

// welcomePeople(['ahmed','obaid','owais'])

//************ */
//Type Aliases
//************ */

// type Point = {
//     x: number;
//     y: number;
//   };
   
//   // Exactly the same as the earlier example
//   function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
   
//   printCoord({ x: 100, y: 100 });


//************ */
//Interfaces
//************ */
// interface Point {
//     x: number;
//     y: number;
//   }
   
//   function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
   
//   printCoord({ x: 100, y: 100 });

// // Differences Between Type Aliases and Interfaces
// // Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.


// let a = "a";a as string
//************ */
//Literal Types
//************ */

// let a:"h" = "h"
// let b: "h"|"a" = "a"





//************ */
//Enums
//************ */



// Numeric enums
// String enums
// Heterogeneous enums
// Computed and constant members
// Union enums and enum member types
// Enums at runtime
// Enums at compile time
// Reverse mappings
// const enums
// Ambient enums
// Objects vs Enums

// https://www.typescriptlang.org/docs/handbook/enums.html