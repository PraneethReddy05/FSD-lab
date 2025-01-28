function delayedMessage(message,delay,callback){
    setTimeout(()=>{
        console.log(message);
    },delay);
    callback();
}
delayedMessage("Hello!",1000,()=>{
    console.log("Callback executed");
});
