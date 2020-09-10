//setTimeout() function :It is used to execute a one-time callback after delay milliseconds.

// setTimeout(function (){
//     console.log("It will execute oe time only after delay in milliseconds");
// }, 1000);


var recursive = function (){
console.log("print after every one second.");
setTimeout(recursive, 1000);
}
recursive();