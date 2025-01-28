let p1 = new Promise((resolve,reject)=>{
    resolve(5);
});
let p2 = new Promise((resolve,reject)=>{
    resolve(10);
});
let p3 = new Promise((resolve,reject)=>{
    resolve(15);
});
let allP = Promise.allSettled([p1,p2,p3]);
console.log(allP)
let sum = 0;
allP.then((results)=>{
    results.forEach(result => {
        if (result.status === "fulfilled") {
            sum += result.value;
        }
    });
    console.log(sum);
}).catch((err)=>{
    console.log(err);
})
