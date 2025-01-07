const product = {id: 101, name: "Laptop", price: 1000,category:"Electronics"}
function updateProductInfo(arg){
    let obj = {...arg};
    obj.discount = 10;
    obj.inStock = true;
    console.log(obj);
}
updateProductInfo({id:product.id,name:product.name});