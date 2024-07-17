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
//************ */
//Union Types
//************ */
var str;
// The solution is to narrow the union with code, the same as you would in JavaScript without type annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
// For example, TypeScript knows that only a string value will have a typeof value "string":
function printId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
// Try
// Another example is to use a function like Array.isArray:
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople(['ahmed', 'obaid', 'owais']);
