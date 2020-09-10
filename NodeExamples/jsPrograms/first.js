// //Arithmetic Operators
// var x = 10;

// console.log(10 + 20 * (40-20)/10); //50

// console.log(++x); //11
// console.log(x); //11
// console.log(x++); //11
// console.log(x); //12

// //Assignment Operator
// var a = 15;
// a += 5;
// console.log(a); //20
// a *= 2;
// console.log(a); //40

// String Operator(+)

// var fName = "Mahesh";
// var lName = "Chowdary";

// console.log(fName +" "+ lName);

//  fName += lName;
//  console.log(fName);

//  var x = 5 + 5;
//  var y = "5" + 5;
//  var z = "Mahesh" + 19 + 12;
//  var xx = 12 + 14 + "Mahesh";
//  var yy = "Mahesh" + 34 + 45;
//  var zz = 12 + 24 + "Mahi" + 21 + 23;

//  console.log(x +" "+ y +" "+ z +" "+ xx +" "+ yy +" "+ zz);

// //Comparison Operator

// //Logical Operator

// var x = 10;
// var y = 20;

// if(x<=20 && y >=15){
//     console.log("condition true");
// }

// if(x >= 10 || y <15){
//     console.log("OR condition satisfied");
// }

// if(!(x == y)){
//     console.log("x and y are not equal");
// }

// //ternary operator

// var age = 16;
// var votable = (age < 18)? "Too Young" : "Old Enough";
// console.log(votable);

// //typeof operator

// console.log(typeof 123); //number
// console.log(typeof "Mahesh"); //string
// console.log(typeof NaN); //number
// console.log(typeof [1, 2, 3, 4, 5]); //object
// console.log(typeof {name: "Mahesh", age: 27}); //object
// console.log(typeof null); //object
// console.log(typeof new Date()); //object
// console.log(typeof false); //boolean
// console.log(typeof function () {}); //function
// console.log(typeof myName); //undefined

// //constructor property returns the constructor function for all JavaScript variables

// console.log("Mahesh".constructor); //String
// console.log((123.56).constructor); //Number
// console.log([12, 13, 24, 45].constructor); //Array
// console.log({name: "Mahesh", age: 28}.constructor); //Object
// console.log(false.constructor); //Boolean
// console.log(new Date().constructor); //Date
// console.log(function () {}.constructor); //Function

// function isArray(myArray) {
//     return myArray.constructor.toString().indexOf("Array") > -1;
//   }
//   var fruits = ["banana", "apple", "orange", "popaya"];
//   console.log(isArray(fruits));

// var myDate = new Date();

// function isDate(myDate){
//     return myDate.constructor.toString().indexOf('Date') > -1
// }

// console.log(isDate(myDate));

// var x = 11.6789
// console.log( x.toPrecision(2));
// console.log( x.toPrecision(4));
// //console.log( x.toPrecision(0));
// console.log( x.toPrecision(7));
// console.log( x.toPrecision());

// //Number() method:
// console.log(Number("12")); //12
// console.log(Number(" 12")); //12
// console.log(Number("12 ")); //12
// console.log(Number(false)); //0
// console.log(Number("12.36")); //12.36 
// console.log(Number("12, 13")); //NaN
// console.log(Number("12 33")); //NaN
// console.log(Number("john")); //NaN

// console.log(Number(new Date())) //1598855116646

// //parseInt() method
// console.log(parseInt("14")); //14
// console.log(parseInt("15.678")); //15
// console.log(parseInt("14 15 16")); //14
// console.log(parseInt("14, 16")); //14
// console.log(parseInt("14 years")); //14
// console.log(parseInt("years 14")); //NaN

// //parseFloat() method:
// console.log(parseFloat("14")); //14
// console.log(parseFloat("15.678")); //15.678
// console.log(parseFloat("14 15 16")); //14
// console.log(parseFloat("14, 16")); //14
// console.log(parseFloat("14.5 years")); //14.5
// console.log(parseFloat("years 14")); //NaN

// var x = Number.MAX_VALUE;
// var y = Number.MIN_VALUE;
// var a = Number.POSITIVE_INFINITY;
// var b = Number.NEGATIVE_INFINITY;

// console.log(x); //1.7976931348623157e+308
// console.log(y); //5e-324
// console.log(a); //Infinity
// console.log(b); //-Infinity
// console.log(1/0); //Infinity
// console.log(-1/0); //-Infinity
// console.log(10/"mahesh"); //NaN

// console.log(typeof String(true));
// console.log(typeof false.toString());

// console.log(String(Date()));
// console.log(Date().toString());

// var x = new Date();

// console.log(x.getDate()); //31
// console.log(x.getDay()); //1
// console.log(x.getFullYear()); //2020
// console.log(x.getMonth()); //7
// console.log(x.getHours()); //12
// console.log(x.getMinutes()); //33
// console.log(x.getMilliseconds()); //762
// console.log(x.getTime()); //15988741562

// var months = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var d =  new Date();
// console.log(months[d.getMonth()]);

// var d = new Date()
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satday"];
// console.log(days[d.getDay()]);
