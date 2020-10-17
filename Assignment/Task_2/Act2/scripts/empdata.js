let employee = function(id, name, address){
    this.empId = id;
    this.empName = name;
    this.empAddress = address;
}  

let empManager = function(){
    this.empData = [];  //blank array with no records in it...
    
    this.addEmployee = function(emp){
        this.empData.push(emp);
        //alert("Employee added successfully to the database");
    }

    this.deleteEmployee = function(id){
        let emp = this.empData.find(function(e){
            return e.empId == id
        });
        let index = this.empData.indexOf(emp);
        this.empData.splice(index, 1);
        alert("Employee deleted successfully from the database");        
    }

    this.findEmployee = function(id){
        let emp = this.empData.find(function (e) {
            return e.empId == id
        });
        if(emp == null)
            throw `Employee with ID ${id} not found`;
        return emp;
    }
    this.updateEmployee = function(emp){
        for (let index = 0; index < this.empData.length; index++) {
            let element = this.empData[index];
            if(element.empId == emp.empId){
                element.empName = emp.empName;
                element.empAddress = emp.empAddress;
                return;
            }
        }
        throw "Employee not found to update";        
    }
    this.getAll = function(){
        return this.empData;//returns all the data from the store....
    }
}
