var flipkart = require("./market")()
 
flipkart.addRecord({"id" : 111 , "name" : "note 5" ,"price" : 12000})
flipkart.addRecord({"id" : 112 , "name" : "one + 7" ,"price" : 30000})
flipkart.addRecord({"id" : 113 , "name" : "apple 10" ,"price" : 80000})
flipkart.addRecord({"id" : 114 , "name" : "note 10" ,"price" : 15000})
 
const data = flipkart.getAll();
for (const iterator of data) {
    console.log(iterator)
}