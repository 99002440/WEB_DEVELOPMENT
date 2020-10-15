const events=require('events').EventEmitter

let button=new events ()

//my event : click
button.on("click", ()=>{
    console.log("The object was clicked")
})
button.on("click", (arg)=>{
    console.log("The Event is handed on:- " + arg)
})
button.emit("click")//emit performs the action on the object which will trigger the function associated with on function
button.emit("dbclicck","Button1")