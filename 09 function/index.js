// //Note: All parameters are required
// //Named function
// function add(x: number, y: number): number {
//     return x+y;
// }
// //Anonymous function
// let myAdd1 = function(x: number, y: number): number { 
// 				return x+y; 
// };
// //Anonymous function with explict type
// let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
// 												return x+y; 
// 											};
// //type names dont matter
// let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
// 																return x+y; 
// 															};
// //Lambda functions															
// let myAdd4 = (a : number, b : number) => a + b;
// //output will be: var myAdd4 = function(a : number, b : number) {return a + b};
// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
// 	//....
// }
// //Named function with optional parameters
// function buildName(firstName: string, lastName?: string) : string {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
// let result1 = buildName("Bob");  //ok
// let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
// var result3 = buildName("Bob", "Adams");  //also ok
// //anonymous function type with optional parameters
// var buildName1 : (firstName: string, lastName?: string) => string = 
// function(firstName: string, lastName?: string) : string {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
// //Named function with optional and default parameters
// //(Note that the parameter type will be optional when used with default value)
// function buildName(firstName: string, lastName = "Khan") : string {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
// let result1 = buildName("Bob");  //works correctly because last parameter is optional
// let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
// let result3 = buildName("Bob", "Adams");  //correct
// //anonymous function type with defult parameters 
// //(Note that the parameter type will be optional when used with defult value)
// let buildName1 : (firstName: string, lastName?: string) => string = 
// function(firstName: string, lastName = "Khan") : string {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
//anonymous function type with Rest parameters
var buildNameFun = function (firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
};
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
