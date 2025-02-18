const event = require('events');
let myEvents = new event.EventEmitter();
myEvents.once("userDetails",(name,age)=>{
    console.log(`Hello, ${name} you are ${age} years old`);
});
myEvents.emit("userDetails","Alice",22);
myEvents.emit("userDetails","John",21);