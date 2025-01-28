function fetchData(url){
    return new Promise((resolve,reject)=>{
        if(url.includes("error")){
            reject("error");
        }else{
            resolve("Data fetched successfully");
        }
    })
}
let promise = fetchData("erradsfdfor");
promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

// let promise = fetchData("https://meowfacts.herokuapp.com/");
// promise.then((res)=>{
//     console.log("Data fetched successfully "+res);
// }).catch((err)=>{
//     console.log("error :"+err);
// })