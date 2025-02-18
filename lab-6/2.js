const os = require('os');
let time = os.uptime();
let min = Math.floor(time / 60)%60;
let hour = Math.floor(time / (60 * 60))%24;
let days = Math.floor(time/(60 * 60 * 24));
console.log(`System Uptime: ${days} days, ${hour} hours, ${min} min`);
