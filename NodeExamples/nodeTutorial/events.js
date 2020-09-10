var events = require('events');

//create eventEmitter object
var eventEmitter = new events.EventEmitter();

//create handler for connection
var connectHandler = function connected () {
    console.log("Connection successfull");
}
//fire the dataHandler event
eventEmitter.emit('dataShow');

//bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

eventEmitter.on('dataShow', function (){
    console.log("data received successfully");
});
//eventEmitter.emit('dataShow');
eventEmitter.emit('connection');
console.log("program ended");