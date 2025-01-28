function add(num){
    return num + 10;
}
function sub(num){
    return num - 3;
}
function mul(num){
    return num * 2;
}
function calculate(num){
    return add(sub(mul(num)));
}
console.log(calculate(10));

