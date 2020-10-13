const os = require('os')
// Platform recognition 
console.log(os.platform());
// Architecture 
console.log(os.arch());

// Info
console.log(os.cpus());
console.log(typeof(os.cpus()));

// Free storage 
console.log(os.freemem());

// Overall storage
console.log(os.totalmem());

// Main directory 
console.log(os.homedir());

// Work time
console.log(os.uptime());

