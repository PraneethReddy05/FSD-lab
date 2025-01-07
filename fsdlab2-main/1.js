function merge(){
    let arr = [];
    for(let i=0;i<arguments.length;i++){
        arr = [...arr,...arguments[i]];
    }
    console.log(arr);
}
merge([1,2],[3,4,5],[6,7,8]);