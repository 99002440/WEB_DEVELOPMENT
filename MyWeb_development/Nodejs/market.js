//In Nodejs, when we distribute the programs or functions in the form of modules. Modules are based on Commonjs, a framework for JS to create modules. modules are self contained components that will have classes, methods and data. It would a conceptual grouping for exporting UR Programs. 
module.exports = (function(){
    const cart = [];
    //variables and functions created in the module are private. 
    add = (item) => cart.push(item);

    remove = (id) => {
        let rec = cart.find((e)=>e.id == id);
        let index = cart.indexOf(rec);
        cart.splice(index, 1);
    }

    getAll = () =>  cart; 

    return {
        addRecord : add,
        getAll : getAll,
        delete : remove
    }
});
