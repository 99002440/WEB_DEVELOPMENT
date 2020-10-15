function addfun(v1,v2){
    return v1+v2;
}
function subtractfun(v1,v2){
    return v1-v2;
}
function multiplyfun(v1,v2){
    return v1*v2;
}
function Divide(v1,v2){
    return v1/v2;
}
function sqrfun(v1){
    return multiplyfun(v1,v1);
}
function sqrtFunc(v1){
    return Math.sqrt(v1)
}

function performOperation(v1,v2,operation){

    switch(operation){
        case "Add":
            return addfun(v1,v2)
        case "Subtract":
            return subtractfun(v1,v2)
        case "Multiply":
            return multiplyfun(v1,v2)
        case "Divide":
            return Divide(v1,v2)
        case "Square":
            return sqrfun(v1)
        case "Square root":
            return sqrtFunc(v1)
       default :
                alert("Invalid operations")
        }
}