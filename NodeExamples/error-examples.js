const nodemon = require("nodemon");

// node.js application generally face four type of errors
// 1. standard javascript errors (eval errors, reference errors, range errors, type errors, URI errors)
// 2. system errors
// 3. user-specified errors
// 4. assertion errors

// reference error because b is not defined
// try{
//     const a =10;
//     const c = a + b;
// }catch (err){
//     console.log(err);
// }

var fs = require('fs');

function nodeCallback(err, data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
}
fs.readFile('test.txt', nodeCallback);

