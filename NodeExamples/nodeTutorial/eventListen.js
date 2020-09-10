var events = require('events');

var eventEmitter = new events.EventEmitter();

//listener-1
var listener1 = function listener1 (){
    console.log("listener1 executed");
};

//listener-2
var listener2 = function listener2 (){
    console.log("listener2 executed");
};

//bind the connection

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

//fire the connection event
eventEmitter.emit('connection');

//remove listener
eventEmitter.removeListener('connection', listener1);
console.log("listener1 will not listen now");

eventEmitter.emit('connection');

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

console.log('program ended');