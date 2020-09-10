//setTimeout()
//setTimeout() can be used to schedule code execution after a designated amount of 
//milliseconds.
function square (a, b){
    console.log(a ** b);
}
setTimeout(square, 1000, 14, 2);

function multi(a, b, c){
    console.log(a*b*c);
}
setTimeout(multi, 1000, 12, 14, 16);

setTimeout(() =>console.log("hai"), 0);

function add (a, b){
    console.log(a+b);
}
setTimeout(add, 1000, 1345, 4567);


function hello(arg){
    console.log(`hello: ${arg}`);
}
setTimeout(hello, 1000, "Mahesh");

//setImmediate()
//setImmediate() will execute code at the end of the current event loop cycle. 
//This code will execute after any I/O operations in the current event loop and 
//before any timers scheduled for the next event loop.

setImmediate( (arg) =>{
    console.log(`This is First: ${arg}`);
}, 'SetImmediate');

setImmediate(function concat(arg1, arg2){
    console.log(arg1 + arg2);
}, 'Mahesh ', 'Chowdary');

//process.nextTick() will run before any Immediates that are set as well as before 
//any scheduled I/O. The second is that process.nextTick() is non-clearable, 
//meaning once code has been scheduled to execute with process.nextTick(), 
//the execution cannot be stopped, just like with a normal function.

Promise.resolve().then(() => console.log("promise1 callback"));
Promise.resolve().then(() => {
console.log("promise2 callback");
process.nextTick(() => console.log("next tick inside promise2"));
});
setImmediate(() => console.log("immediate1 callback"));
setImmediate(() => console.log("immediate2 callback"));
process.nextTick(() => console.log("next tick1 callback"));
process.nextTick(() => console.log("next tick2 callback"));
setTimeout(() => console.log("set timeout"), 0);
setImmediate(() => console.log("immediate3 callback"));

//setInterval()
//If there is a block of code that should execute multiple times, setInterval() can 
//be used to execute that code. setInterval() takes a function argument that will 
//run an infinite number of times with a given millisecond delay as the second 
//argument.

function intData(){
    console.log("print data after every one second");
}
setInterval(intData, 1000);

//clearTimeout(), clearImmediate(), clearInterval()
const timeoutObj = setTimeout(()=>{
    console.log("Timeout clear function");
}, 1000);

const immediateObj = setImmediate(() =>{
    console.log("Immediate clear function");
});

const intervalObj = setInterval(() =>{
    console.log("interval clear function");
}, 1000);

clearTimeout(timeoutObj);
clearInterval(intervalObj);
clearImmediate(immediateObj);

//setImmediate() is designed to execute a script once the current poll phase 
//completes.
//setTimeout() schedules a script to be run after a minimum threshold in ms 
//has elapsed.

//the poll phase controls when timers are executed.

