var fs = require('fs');

var data = fs.readFile("text.txt", function (err, data){
    if(err)
    console.error(err);
    console.log(data.toString());

    setTimeout(() =>{
        console.log("This code executed after 2 seconds");
    }, 2000);
});
console.log("here code executed in non-blocking way");