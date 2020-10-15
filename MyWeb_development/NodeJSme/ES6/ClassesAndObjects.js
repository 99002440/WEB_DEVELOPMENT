class employee{
    constructor(id, name,address){
        this.id=id
        this.name=name
        this.address=address

    }
    display(){
        const data = `The Name: ${this.name}
        The Address is : ${this.address} 
        The Id : ${this.id} `
        console.log(data)

    }
}
const obj= new employee(123,"abhishek","mysore")
obj.display()
export{employee}