///taking input using readline
/*
const { read } = require('fs')

const readline=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("what is UR Name?",answer=>{
    console.log(answer)
    readline.close()
})*/
const os=require('os')
console.log(os.hostname)
console.log(os.version)
console.log(os.type)
console.log("The machine is running since" + os.uptime()/3600+ "hrs");
console.table([
    {Name : "Abhishek", Address: "Mysore", state:"karanataka"},
    {Name : "Anand", Address: "Banglore", state:"karanataka"},
    {Name : "Ankit", Address: "Ara", state:"Bihar"},
    {Name : "Ashish", Address: "Buxar", state:"Bihar"},




])
