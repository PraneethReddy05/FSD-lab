const f1 = require('os');

setInterval(()=>{
    const tot = f1.totalmem()/(1024**3);
    const free = f1.freemem()/(1024**3);
    const used = (tot - free);

    console.log("used memeory",used);
    console.log("free memeory",free);
},5000);