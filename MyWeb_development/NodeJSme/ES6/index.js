import {employee} from './ClassesAndObjects'
var temp


var fruit ="Apple"

function addFruit(fname){
    var fruit=fname
    console.log(fruit)
}
/*addFruit("Mango")
console.log("The old fruit  ",+fruit)
*/
const data="Welcome 123"
console.log(data)
let array=[12,345,67,78,78,89]
for(const element of array){
    console.log(element)
}
// for of works similar to foreach where U will never go out of bounds of the array
/////default parameters in functions/////////
/*function addFunc(v1,v2){
    var res=v1+v2
    console.log("the addes value=" +res)
}
function subFunc(v1,v2){
    var res=v1-v2
    console.log("the addes value=" +res)
}
// caller of the function could either pass the second parameter
function getEmployee(name){
    return `${name}`
}

/*const getName=function(name){
     return `${name}`
}*/
const getName=(name)=> `${name}`
console.log(getName("somename"))

const addFunc =(v1,v2) => v1+v2;
const subFunc =(v1,v2) => v1-v2;
console.log(addFunc(123,44))
console.log(subFunc(123,23))

let strValue=`Hello this is Abhishek
I belongs to ics group of ltts
I currently live in Mysore `
console.log(strValue)

/// Destructuring data in ES6
function emp(name,address){
    this.name=name;
    this.address=address
}
let{name,address}=new emp('ABhishek',"Bangalore")
console.log(`${name} comes from ${address}`)