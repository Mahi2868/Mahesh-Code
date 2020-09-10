const express = require('express');
const router = express.Router();
const fs = require('fs');
var users = [];

//get data of all users 
router.get('/', (req, res) =>{
    fs.readFile('c:/MyCode/MyCode/Node-Applications/FS-Node/users.json', 
    'utf8', (err, data) =>{
        console.log(data);
        res.send(data);
    });
});

//get data of particular user
router.get('/:id', (req, res) =>{
    fs.readFile('c:/MyCode/MyCode/Node-Applications/FS-Node/users.json', 
    'utf8', (err, data) =>{
        const users = JSON.parse(data);
        const user = users["user" + req.params.id]
        console.log(user);
        res.send(JSON.stringify(user));
    });
});
 const user = {
      "user4" : {
       "id" : 4,
       "name" : "Manas",
       "age" : 27,
       "profession" : "Developer",
       "salory" : 40000
      },
      "user5" : {
        "id" : 5,
        "name" : "Madhu",
        "age" : 26,
        "profession" : "TL",
        "salory" : 60000
       }
  }
   
 router.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile( 'c:/MyCode/MyCode/Node-Applications/FS-Node/users.json', 
     'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        data["user5"] = user["user5"];
       
         fs.writeFile('./users.json', JSON.stringify(data), (err) =>{
            if(err) throw err;
        });
        console.log( data );
        res.send( JSON.stringify(data));
      
     });
 });

 //delete user
 router.delete('/:id', (req, res) =>{
    fs.readFile('c:/MyCode/MyCode/Node-Applications/FS-Node/users.json', 
    'utf8', (err, data) =>{
        data = JSON.parse(data);
        delete data["user" + req.params.id];
        console.log(data);
        res.send(JSON.stringify(data));
    });
});


module.exports = router;