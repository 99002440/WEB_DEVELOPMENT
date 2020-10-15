//Using readLine module for taking inputs from the user. This is available since nodejs 7.0
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout    
// });

// //typical prompt function: here the question is displayed on the cmd...

// readline.question("What is UR Name?", answer =>{
//   console.log(answer);  
//   readline.close();
// })
////////////////////Get info about the OS//////////////////
const os = require('os');
//extract info about the os where the nodejs is running. It can extract info like Os type, running time, last logoff time, processor info, and manymore. 
console.log(os.hostname());//Name of the machine..
console.log(os.version());
console.log(os.type());
console.log("The machine is running since " + os.uptime()/3600 + " hrs");

//table expects an array of objects
console.table([
    { Name : "Phaniraj", Address: "Bangalore", State: "Karnataka"},
    { Name: "Gopal", Address: "Mysore", State: "Karnataka"},
    { Name: "Sushanth", Address: "Ananthapuram", State: "AP"},
    { Name: "JoyDip", Address: "Kolkata", State: "West Bengal"},    
])


