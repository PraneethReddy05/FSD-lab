const event = require('events');
let myEvents = new event.EventEmitter();
myEvents.on("userDetails",(name,age)=>{
    console.log(`Hello, ${name} you are ${age} years old`);
});
myEvents.emit("userDetails","John",21);