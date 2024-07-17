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
									



// function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
// 	return firstName + " " + restOfName.join(" ");
// }

// var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

// console.log(employeeName);



// //anonymous function type with Rest parameters
// var buildNameFun: (fname: string, ...rest: string[])=>string =
// function (firstName: string, ...restOfName: string[]) {
// 	return firstName + " " + restOfName.join(" ");
// }

// //Note: Rest, optional and default parameters can only
// // be at the end of the parameter list
											
						
// function myCallBack(text: string) {
//     console.log("inside myCallback " + text);
// }

// function callingFunction(initialText: string, callback: (text: string) => void)
// {
//     callback(initialText);
// }

// callingFunction("myText", myCallBack);
						





// function delay(milliseconds: number): Promise<void> {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, milliseconds);
//     });
//   }
  
//   //Using `then`, `catch`, and `finally`:
//   delay(1000)
//     .then(() => {
//       console.log('The delay is over');
//     })
//     .catch((error) => {
//       console.error('Something went wrong:', error);
//     })
//     .finally(() => {
//       console.log('This is always executed');
//     });
  
  
//   //Using `async/await`:  
//   try {
//       await delay(1000);
//       console.log('Await: The delay is over');
//   } catch (error) {
//       console.error('Await: Something went wrong:', error);
//   } finally {
//       console.log('Await: This is always executed');
//   }
  
  //Now Do Coding from the following Article
  //https://blog.logrocket.com/async-await-in-typescript/
  
  
  //Review the tutorial and convert the code in TypeScript
  //https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript  
    
    
  // I send a request to the company. This is synchronous
// company replies with a promise
// const angelMowersPromise = new Promise<string>((resolve, reject) => {
//     // a resolved promise after certain hours
//     setTimeout(() => {
//         resolve('We finished mowing the lawn')
//     }, 100000) // resolves after 100,000ms
//     reject("We couldn't mow the lawn")
// })

// const myPaymentPromise = new Promise<Record<string, number | string>>((resolve, reject) => {
//     // a resolved promise with  an object of 1000 Euro payment
//     // and a thank you message
//     setTimeout(() => {
//         resolve({
//             amount: 1000,
//             note: 'Thank You',
//         })
//     }, 100000)
//     // reject with 0 Euro and an unstatisfatory note
//     reject({
//         amount: 0,
//         note: 'Sorry Lawn was not properly Mowed',
//     })
// })

    

// interface Employee {
//     id: number;
//     employee_name: string;
//     employee_salary: number;
//     employee_age: number;
//     profile_image: string;
// }

// // Async function to fetch employee data
// async function fetchEmployees(apiUrl: string): Promise<Employee[]> {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return data;
// }

// // Wrapped version of fetchEmployees using the higher-order function
// const safeFetchEmployees = (url: string) => handleAsyncErrors(fetchEmployees, url);

// // Example API URL
// const api = 'http://dummy.restapiexample.com/api/v1/employees';

// // Using the wrapped function to fetch employees
// safeFetchEmployees(api)
//     .then(data => {
//         if (data) {
//             console.log("Fetched employee data:", data);
//         } else {
//             console.log("Failed to fetch employee data.");
//         }
//     })
//     .catch(err => {
//         // This catch block might be redundant, depending on your error handling strategy within the higher-order function
//         console.error("Error in safeFetchEmployees:", err);
//     });											
// const baseApi = 'https://reqres.in/api/users?page=1'
// const userApi = 'https://reqres.in/api/user'

// const fetchAllEmployees = async (url: string): Promise<Employee[]> => {
//     const response = await fetch(url)
//     const { data } = await response.json()
//     return data
// }

// const fetchEmployee = async (url: string, id: number): Promise<Record<string, string>> => {
//     const response = await fetch(`${url}/${id}`)
//     const { data } = await response.json()
//     return data
// }
// const generateEmail = (name: string): string => {
//     return `${name.split(' ').join('.')}@company.com`
// }

// const runAsyncFunctions = async () => {
//     try {
//         const employees = await fetchAllEmployees(baseApi)
//         Promise.all(
//             employees.map(async user => {
//                 const userName = await fetchEmployee(userApi, user.id)
//                 const emails = generateEmail(userName.name)
//                 return emails
//             })
//         )
//     } catch (error) {
//         console.log(error)
//     }
// }
// runAsyncFunctions()						


//overloads give us type-checked calls

// //its customary to order overloads from most specific to least specific
// function add(arg1: string, arg2: string): string;//option 1
// function add(arg1: number, arg2: number): number;//option 2
// function add(arg1: boolean, arg2: boolean): boolean;//option 3
// //this is not part of the overload list, 
// //so it has only three overloads
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }

// //Calling 'add' with any other parameter types would cause an error except for the three options
// console.log(add(1, 2));
// console.log(add("Hello", "World"));
// console.log(add(true, false));