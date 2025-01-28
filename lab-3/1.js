function greet(name,callback){
    return callback(name);
}
function callback(name){
    return "hello "+name;
}
console.log(greet("Praneeth!",callback));