// console.log(sum(56, 78));
// console.log(isEven(8)); //true
// console.log(greetings("Mahesh"));

// function sum (a, b){
//     return a + b;
// }

// function isEven (num){
//     return num%2 === 0;
// }

// function greetings (name){
//     return "hello " +name;
// }

// function square (a){
//     return a*a;
// }
// console.log("Square value is:",square(25))

// function cube (x){
//     return x*x*x;
// }
// console.log("Cube value is:",cube(9));

// function sum (a, b){
//     return a * b;
// }
// console.log(sum(12, 12));

// function sum (a, b){
//     return a + b;
// }
// console.log(sum(46, 78));

//function Expressions

// const sum = function (a, b, c){return a + b + c;}
// console.log(sum(12, 14, 15, 16));

// const sum = function (x, y, z){ return x + y + z; }
// console.log(sum(12, 34, 35));

// var total = new Function("a", "b", "return a * b");
// console.log(total(5, 6));

// (function () {
//     var empData = {
//         name: "Mahesh",
//         age: 28,
//         designation: "Developer",
//         salory: 50000
//     };
//     console.log(empData.designation);
//     console.log(empData.name);
// })();
// console.log(empData.name);

// (function(){
// 	console.log(Math.PI);
// })();

// (function (x){
//     console.log(x);
// })("Hello World");

//Arrow function

// const sum = (a, b) => a+b;
// console.log(sum( 5, 6));

// const mul = (a, b) => a*b;
// console.log(mul(14, 12));

// function add (a, b, c = 0){
//     return a + b + c;
// }
// console.log(add(10, 12))

// function myData (x, y){
//     if(y === undefined){
//         y = 1;
//     }
//     return (x + y);
// }
// console.log(myData(45));

// //write a function to find maximum value
// var x = (24, 45, 67, 86, 98, 678, 567, 789);
// function findMax (){
//     var i ;
//     var max = -Infinity;
//     for (i =0; i <arguments.length; i++){
//         if(arguments[i] > max){
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(x));
// //console.log(findMax(24, 45, 67, 87, 76));

// // write a function to sum all numbers
// var x = sumAll(24, 45, 67, 87, 43, 67, 897, 657);
// function sumAll (){
//     var i;
//     var sum = 0;
//     for(i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
// //console.log(sumAll(24, 45, 46, 67, 78));
// console.log(x);

// function div (a, b){
//     return a/b;
// }
// console.log(div(12, 4));

// function myFunction(){
//     return this;
// }
// var x = myFunction();
// console.log(x);

// var stdName = {
//     fName : "Mahesh",
//     lName : "Vadlamudi",
//     fullName : function (){
//         return this.fName +" "+this.lName;
//     }
// }

// console.log(stdName.fullName());

// var myObject = {
//     firstName:"Mahesh",
//     lastName: "Vadlamudi",
//     fullName: function () {
//       return this;
//     }
//   }
//   console.log(myObject.fullName());

// //function constructor
// function myData (arg1, arg2){
//     this.firstName = arg1;
//     this.lastName = arg2; 
// }
// //creating an object for constructor
// var x = new myData ("Mahi", "Chowdary");
// console.log(x.firstName)
// console.log(x.lastName)
// console.log("Full Name:",x.firstName +" "+x.lastName);

// var person = {
//     fullName : function (){
//         return this.firstName +" "+this.lastName;
//     }
// }

// var person1 = {
//     firstName : "Mahesh",
//     lastName : "Chowdary" 
// }
// var person2 = {
//     firstName : "Avinash",
//     lastName : "Varma" 
// }
// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person2));


// var person = {
//     fullName : function (city, state){
//         return this.firstName +" "+this.lastName +", "+ city +", "+ state;
//     }
// }

// var person1 = {
//     firstName : "Mahesh",
//     lastName : "Chowdary"
// }

// console.log(person.fullName.call(person1, "Hyderabad", "TS"));
// var person = {
//     fullName : function (city, state){
//         return this.firstName +" "+this.lastName +", "+ city +", "+ state;
//     }
// }

// var person1 = {
//     firstName : "Mahesh",
//     lastName : "Chowdary"
// }

// console.log(person.fullName.apply(person1, ["Hyderabad", "TS"]));

// var person = {
//     fullName : function (){
//         return this.firstName +" "+this.lastName;
//     }
// }

// var person1 = {
//     firstName : "Mahesh",
//     lastName : "Chowdary"
// }

// console.log(person.fullName.apply(person1));

// console.log(Math.max.apply(null, [24, 45, 69]));

// var counter = 0;

// function add(){
//     var counter = 0;
//     return counter += 1;
// }

// add();
// add();

// console.log(add());

function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  console.log(counter());
  console.log(counter());
  console.log(counter());
