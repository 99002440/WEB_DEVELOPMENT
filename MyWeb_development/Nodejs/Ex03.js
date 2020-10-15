//Using builtin modules of Nodejs....
//Nodejs allows to perform read-write operations both synchronously and asynchronously in ur applications...
const fs = require('fs');//fs is the filesystem package of nodejs which contains APIS to perform File IO operations. 

// const data = fs.readFileSync("market.js", "utf-8");
// console.log(data);//When we use the format as utf-8, it uses the ANSI string format allowing u to read the data without converting it into a string...
//The program will wait till the file reading is complete. 

//In an async operation, ur last parameter will always be a callback function, this function will be invoked once the operation is complete. 
/* fs.readFile("Ex034.js", 'utf-8', (err, data)=>{
    if(err!=null) console.log(err.message);
    else{
        console.log(data);
    }
});
console.log("File reading is going on!!!!"); */
/////////////////Writing to a file/////////////////////////////
const filename ="Temp.txt";
const emp = `123,Phaniraj, Bangalore, 56000`;
fs.writeFileSync(filename, emp, 'utf-8');
//if the file does not exist, it creates a new file and writes to it. Else it would overwrite the contents of the file. 
//To append the contents of a file, U could do  with appendFileSync
const emp2 = `124, Gopal, Mysore, 65000`
fs.appendFileSync(filename, emp2, 'utf-8');
//////////////////////////////////////////////////////////////


