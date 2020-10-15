////Event Emitter module is used to create events for ur components this will help ur programs to create callback functions. 
//events are actions performed by the user on the object. Typically an object can have properties(charecteristics of the object), functions(operations of the objects), events(Actions performed on the object)
const events = require('events').EventEmitter;

let button = new events();

//UR Event: click
//on function is used to handle the event...
button.on("click", ()=>{
    console.log("The object was clicked");
})

button.on("dblClick", (arg)=>{
    console.log("The Event is handed on " + arg);
})

button.emit("click");//emit is used to raise the event. emit performs the action on the object which will trigger the function associated with on function
button.emit("dblClick", "Button1");

