var flipkart = require("./market")();

flipkart.addRecord({"id": 111, "name" : "Nokia 1122", "price" : 4500});
flipkart.addRecord({"id": 112, "name" : "Samsung Note 10", "price" : 44500});
flipkart.addRecord({"id": 113, "name" : "Samsung M31", "price" : 14500});
flipkart.addRecord({"id": 114, "name" : "Mi Note 10", "price" : 15000});

const data = flipkart.getAll();
for (const iterator of data) {
    console.log(iterator);
}
