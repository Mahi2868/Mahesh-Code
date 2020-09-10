// typeof operator to find the data type of variable

// console.log("Type of Mahesh is:", typeof "Mahesh");
// console.log("Type of 123 is:", typeof 123);
// console.log("Type of Nan is:", typeof NaN);
// console.log("Type of false is:", typeof false);
// console.log("Type of [1, 2, 3, 4] is:", typeof [1, 2, 3, 4]);
// console.log("Type of {name : 'Mahesh', age : 34} is:", typeof {name : 'Mahesh', age : 34});
// console.log("Type of mycar is:", typeof mycar);
// console.log("Type of undefined is:", typeof undefined);
// console.log("Type of null is:", typeof null); 
// console.log("Type of function is:", typeof function () {});
// console.log("Type of new Date is:", typeof new Date());  

// //constructor property
// console.log("constructor of Mahesh is:", "Mahesh".constructor);
// console.log("Constructor of 123 is:",(123).constructor);
// console.log("Constructor of Nan is:",  NaN.constructor);
// console.log("Constructor of false is:", false.constructor);
// console.log("Constructor of [1, 2, 3, 4] is:", [1, 2, 3, 4].constructor);
// console.log("Constructor of {name : 'Mahesh', age : 34} is:", {name : 'Mahesh', age : 34}.constructor);
// console.log("Constructor of function is:", function () {}.constructor);
// console.log("Constructor of new Date is:", new Date().constructor);  

// var names =[];
// function isArray(myArray){
//     return myArray.constructor.toString().indexOf("Array") > -1;
// }
// console.log(isArray(names));

// var tech = ["javascript", "node.js", "express.js", "mongo.db"];
// function isArray (myArray){
//     return myArray.constructor === Array;
// }
// console.log(isArray(tech));

// var empDetails = {name : "Mahesh", Age : 27, designation : "SoftwareEngineer"};
// function isObject(myObject){
//     return myObject.constructor === Object;
// }
// console.log(isObject(empDetails));

// var myDate = new Date();
// function isDate(myDate){
//     return myDate.constructor === Date;
// }
// console.log(isDate(myDate));

//Type conversion methods: 
//converting numbers to String
//String() method is a global method. it can be used on any type of numbers, literals
// variables, and expressions

// var a = 15;
// console.log(typeof a);
// console.log(String(a));
// console.log(typeof String(a));
// //toString()
// var b = 24;
// console.log(typeof b);
// console.log(b.toString());
// console.log(typeof b.toString());
// // toExponential() method : returns number in exponential form
// var aa = 1219.7689;
// console.log(aa.toExponential(2));
// console.log((123.456789).toExponential(3));
// //toFixed() method: returns number with fixed decimal values
// var bb = 124.56789;
// console.log(bb.toFixed(2));
// console.log(bb.toFixed(4));
// //toPrecision() method: returns number with fixed length
// var aaa = 123.456789
// console.log(aaa.toPrecision(2));
// console.log(aaa.toPrecision(4));
// console.log(aaa.toPrecision(5));
// //valueOf() method: returns number as a number
// var x = 155;
// console.log(x.valueOf());
// console.log((12345).valueOf());
// console.log((123+234).valueOf());

// //Converting variables to numbers:
// //there are three methods to convert variables to numbers
// //Number(), parseInt(), parseFloat()
// //these are not number methods. but global methods of javascript
// console.log(Number("125"));
// console.log(Number("121.456"));
// console.log(Number("125 125"));
// console.log(Number(" 125"));
// console.log(Number("125 "));
// console.log(Number("125, 125"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(new Date("2020-08-16"))); //Number method can also be used on dates
// //parseInt method: parses string and returns whole number, spaces are allowed. it will return only first number
// console.log(parseInt("146.789"));
// console.log(parseInt("123, 146"));
// console.log(parseInt("127 124 125"));
// console.log(parseInt("129 "));
// console.log(parseInt("number 146"));
// console.log(parseInt("10 years"));
// //parseFloat() method: parses string and returns a number
// console.log(parseFloat("14.678"));
// console.log(parseFloat("15"));
// console.log(parseFloat(" 16.678"));
// console.log(parseFloat("17.678, 18, 19"));
// console.log(parseFloat("19 21 23"));
// console.log(parseFloat("24.5 years"));
// console.log(parseFloat("number 149.235"));

// //Number Properties:
// //1.MAX_VALUE
// //2.MIN_VALUE
// //3.POSITIVE_INFINITY
// //4.NEGATIVE_INFINITY
// //5.NaN
// var x = Number.MAX_VALUE;
// console.log(x);
// var y = Number.MIN_VALUE;
// console.log(y);
// var a = 1/0;
// console.log(a);
// var b = -1/0;
// console.log(b);
// var c = 100 / "Mahesh";
// console.log(c);

// //converting boolean to string
// //here we use String() and toString() methods
// console.log(String(true));
// console.log(String(false));
// console.log(typeof String(true));
// console.log(typeof true.toString());

// //converting Dates to String
// //here we use String(), toString() methods
// console.log(String(Date()));
// console.log(Date().toString());
// // we have multiple method to converet date to string
// var date = new Date();
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "october", "november", "Decemeber"];
// var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(month[date.getMonth()])
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getDay());
// console.log(day[date.getDay()]);
// console.log(date.getTime());
// console.log(date);
// console.log(date.getUTCDay());

// //Converting string to numbers
// //we have three methods to convert String to numbers
// console.log(Number("14"));
// console.log(Number("14.678"));
// console.log(Number("15 16"));
// console.log(Number("17, 18, 18"));
// console.log(Number("14 years"));
// console.log(Number( 1234));
// console.log(Number(1234 ));

// console.log(parseInt("46"));
// console.log(parseInt("14.678"));
// console.log(parseInt("21 15"));
// console.log(parseInt("24, 26, 27"));
// console.log(parseInt("28 years"));
// console.log(parseInt("years 14"));

// console.log(parseFloat("34.6789"));
// console.log(parseFloat("36.6789, 35.67"));
// console.log(parseFloat("43.126, 44.789"));
// console.log(parseFloat(" 34.56"));
// console.log(parseFloat("38.6789 "));
// console.log(parseFloat("86.6789 number"));
// console.log(parseFloat("number 34.6789"));

// //The unary + operator can be used to convert a variable to a number
// var a = "67"
// var b = + a;
// console.log(typeof a);
// console.log(typeof b);

// //Converting boolean to number:
// console.log(Number(true));
// console.log(Number(false));

// //converting date to numbers
// var d = new Date();
// console.log(Number(d));
// console.log(d.getTime());

// //Automatic type conversion
// console.log(5 + null);
// console.log("5" + null);
// console.log("5" + 2);
// console.log("5" + 2 + "6");
// console.log("5" - 2);
// console.log("5" * "2");

//Bitwise operators (&,|, ^, ~, <<, >>, >>>)
console.log(5  & 6);






