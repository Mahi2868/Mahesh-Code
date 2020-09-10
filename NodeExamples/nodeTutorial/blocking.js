var fs = require('fs');

// var data = fs.readFileSync('input.txt');
// console.log("execution started");
// console.log(data.toString());
// console.log("program ended successfully");

// console.log("program started");
// setTimeout(()=>{
//     console.log("printed afted two seconds")
// }, 2000);
// console.log("program ended here");

fs.readFile('input.txt', (err, data) =>{
    if(err)
    console.log("Error:", err);
    console.log(data.toString());
});
console.log("program ended here");