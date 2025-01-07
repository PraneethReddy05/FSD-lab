function sum(...nums){
    return nums.reduce((a,b) => a + b, 0);
    
}
console.log(sum(10,20,30,40));