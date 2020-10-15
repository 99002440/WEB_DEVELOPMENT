module.exports = (function(){
    const cart = [];
    add = (item) => cart.push(item);
    remove = (id) => {
        let rec = cart.find((e) => e.id == id)
        let index = cart.indexOf(rec)
        cart.splice(index,1)
    }
    getAll = () => cart;
    return{
        addRecord : add,
        getAll : getAll,
        delete : remove
    }
})