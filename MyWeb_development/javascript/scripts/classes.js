// classes and objects
/*var emp={}
emp.empId=123
emp.empName="Abhishek"
emp.empAddress="Mysore"
emp.empSalary=65000;

console.log(emp)
console.log(emp.empName)
console.log(emp.empAddress)
console.log(emp.empSalary)


var emp2=emp// copy in singleton objects
emp2.empName="Anshu"
console.log(emp.empName)*/
let employee=function(id,name,address){
    
    this.empId=id;
    this.empName=name;
    this.empAddress=address;
    
    this.display=function(){
    
    console.log("The Name is ",+ this.empName)
    console.log("The address is ",+ this.empAddress)
    console.log("The Id is ", + this.empId)
    }
}
let emp1=new employee(123, "Abhishek" ,"Mysore")
let emp2= new employee(456, "vinod" , "ara")
let emp3= new employee(789, "aditya", "hydrabad")

emp1.display()
emp2.display()
emp3.display()
console.log("The data :" + emp2.empName)