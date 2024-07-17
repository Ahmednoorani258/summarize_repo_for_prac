let a:unknown = "string"
console.log((a as string).length);// 6
console.log((<string>a).length);// 6 //another way
a= 14
a = true

console.log((a as string).length);//undefined bcs we change the data inside this variable
console.log((<string>a).length);//undefined bcs we change the data inside this variable
