//comparison operators are used in logical statements to determine equality or difference
var x = 10;
var y = 19;
var age = 22;
//comparison operators (==, ===, !=, !==, >, >=, <, <=, )
console.log(x == 10);
console.log(x == "10");
console.log(x != 10);
console.log(x !== "10")

console.log(x === 10);
console.log(x === "10"); //it will check value type also
if(age<18)
console.log("Too Young...");

//logical operators (&&, ||, !)

if(age>25 && age<40)
console.log("Your age is perfect for marriage...");


if(age<=25 || age>=40)
console.log("Not recommended for marriage")

console.log(!(x === y));
console.log(!(x<y));

//conditional (Ternary operator): 
// (condition) ? value1 : value2
// based on condition it will return the value
var votable = (age<18) ? "Too Young" : "Old Enough"
console.log(votable);