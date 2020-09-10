// The "+" operator can also be used to concatnate strings.

var fname = "Mahesh";
var lname = "Chowdary";
var fname = fname + " "+lname;
console.log(fname);

//we can also use += operator
var txt = "This is concatnate statement.";
txt += "This is second statement";
console.log(txt);

//adding a number and a string will return a string
var a = 5 + "5";
var b = "Mahesh" + 5 + 7;
var c = 6 + 8 + "Mahi";
var d = 6 + 8 + "Mahi" +4 + 4;
console.log("a value is:", a);
console.log("b value is:", b);
console.log("c value is:", c);
console.log("d value is:", d);
