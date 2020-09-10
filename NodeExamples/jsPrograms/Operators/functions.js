// function greetings(){
//     console.log("Hello World!!!");
// }
// greetings();

function add(a, b){
    return a + b;
}
var result = add(345, 678);
console.log(result);

function empDetails(firstname, lastname){
    return firstname+" "+lastname;
}
console.log(empDetails("Mahesh", "chowdary"));

function studentDetails(name, age, study){
    return arguments[0]+" "+arguments[1]+" "+arguments[2];

}
console.log(studentDetails("Mahesh", 27, "BTech"));

function contactDetails(){
    return arguments[0] +" "+arguments[1];
}
console.log(contactDetails("mahi.sri2868@gmail.com", "Khammam"));

function printNames(){
    for(var i =0; i<arguments.length; i++){
        console.log(i+". "+arguments[i]);
    }
}
printNames("Mahesh", "Avinash", "Kittu", "Tison");

//function expressions
var mul =function multi (a, b){
           return a * b;
        }
        console.log(mul(12, 14));
//anonymous function
var greet = function (name){
    console.log("hello " +name);
}
greet("Mahesh");