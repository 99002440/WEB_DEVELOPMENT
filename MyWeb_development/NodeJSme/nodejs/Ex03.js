const fs= require('fs')

//const data=fs.readFileSync("market.js","utf-8")

//console.log(data)



fs.readFile("Ex03.js",'utf-8',(err,data)=>{
    if(err!=null) console.log(err.message)
    else
    {
        console.log(data)
    }
})
console.log("file reading is going on")

////writing to file
const filename ="Temp.txt"
const emp=`1,abhi,099093`
fs.writeFileSync(filename,emp, 'utf-8')

const emp2=`125,Abhi,North,454`
fs.appendFileSync(filename,emp2,'utf-8')
