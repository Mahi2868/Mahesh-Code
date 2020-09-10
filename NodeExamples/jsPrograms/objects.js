// //using the javascript keyword new

// var person = new Object();
// person.firstName = "Mahesh";
// person.lastName = "Vadlamudi";
// person.age = 27,
// person.eyeColor = "black"
// console.log(person.age);

// //Using an object literal
// var person = {
//     firstName : "Mahesh",
//     lastName : "Chowdary",
//     age : 27,
//     eyeColor : "black",
//     marks : [65, 78, 87, 87, 98, 99],
//     address : {
//         village : "B.R.Puram",
//         mandal : "Enkoor",
//         district : "Khammam",
//         state : "Telangana",
//         pincode : 507168
//     }
// }
// //add new property
// person.nationality = "Indian";

// console.log(person.firstName + " is " + person.nationality);

// //delete property
// delete person.eyeColor;
// console.log(person.eyeColor);

//console.log(person.firstName + " is " + person.age + " years old.");

// //JavaScript for...in Loop
// var txt = " ";
// for (x in person){
//    txt += person[x] + " "; 
// }
// console.log(txt);

// console.log(person.firstName +" "+person.lastName);
// console.log(person["age"] +" "+person["eyeColor"]);
// console.log(person.address.village);
// console.log(person.marks);
// console.log(person.marks[0]);

// //javascript objects are mutable:
// var x = person;
// x.age = 10;

// console.log(person.age);

// var student = {
//     firstName : "Mahesh",
//     lastName : "Chowdary",
//     id : 1234,
//     school : "ZPHSchool",
//     fullName : function (){
//         return this.firstName +" "+this.lastName;
//     }
// }

// console.log(student.fullName());

// var msg = "hello world!"

// var x = msg.toUpperCase();
// console.log(x);

// var person = {
//     firstName : "Mahesh",
//     lastName : "Vadlamudi",
//     id : 1234
// };
//  person.name = function (){
//      return this.firstName +" "+this.lastName;
//  }

// console.log(person.name());
// console.log(person)

// var person = {
//     name : "Mahesh",
//     age : 27,
//     city: "Khammam",
//     today : new Date()
// }
// //displaying object properties:
// console.log(person.name +" is "+ person.age + " years Old and living in " +person.city);

// //displaying in loops:
// var x, txt = "";
// for(x in person){
//     txt += person[x] + " ";
// }
// console.log(txt);

// //using Object.values():
// var myArr = Object.values(person);
// console.log(myArr);

// //using JSON.stringfy():
// var myStr = JSON.stringify(person);
// console.log(myStr);

// var person = {
//     name : "Mahesh",
//     age: function ( ){return 30;}
// }
// person.age = person.age.toString();
// var myStr = JSON.stringify(person);
// console.log(myStr); //{"name":"Mahesh","age":"function ( ){return 30;}"}

// //stringfy() arrays:
// var arr = ["Mahesh", "Ramesh", "Avinash"];
// var strArr = JSON.stringify(arr);
// console.log(strArr); //["Mahesh","Ramesh","Avinash"]


// //JavaScript Getter (The get Keyword):
// var person = {
//     name : "Mahesh",
//     age : 27,
//     language : "English",
//     get lang() {
//         return this.language.toUpperCase();
//     }
// };

// console.log(person.lang);

// //JavaScript Setter (The set Keyword):

// var person = {
//     name : "Mahesh",
//     age : 27,
//     language : "",
//     set lang (lang){
//         this.language = lang;
//     }
// };
// person.lang = "English";
// console.log(person.language);

// //difference between function and getter:
// var person = {
//     firstName : "Mahesh",
//     lastName  : "Chowdary",
//     fullName : function (){
//         return this.firstName +" "+this.lastName;
//     }
// }
// console.log(person.fullName());

// var student = {
//     fName : "Avinash",
//     lName : "Varma",
//     get name (){
//         return this.fName +" "+ this.lName;
//     }
// };
// console.log(student.name);

// //Dat Quality:
// var person = {
//     name : "Mahesh",
//     language : "english",
//     get lang (){
//         return this.language.toUpperCase();
//     }
// }
// console.log(person.lang);

// var student = {
//     name : "mahesh",
//     language : "",
//     set lang (lang){
//         this.language = lang.toUpperCase();
//     }
// };
// student.lang = "Telugu";
// console.log(student.language);

//JavaScript Object Constructors:

// function Person (first, last, age, gender, eye){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.gender = gender;
//     this.eyeColor = eye,
//     this.nationality = "Indian" ,
//     this.changeName = function (name){
//         this.lastName = name;
//     };

// };
// Person.prototype.religion = "Hindu";
// var myFather = new Person("Mahesh", "Chowdary", 27, "Male", "Black");
// var myMother = new Person("xxxx", "yyyy", 25, "Female", "blue");
// myMother.changeName("John");
// console.log(myFather);
// // console.log(myFather.name());
// console.log(myMother);
// console.log(myMother.religion);
// Person.prototype.name = function (){
//     return this.firstName +" "+this.lastName;
// }

