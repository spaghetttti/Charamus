const path = require("path")

console.log(path.basename(__filename));
console.log(__dirname);
console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.join(__dirname, "sett", "бабаяга.html"));

console.log(path.resolve(__dirname, "test" , "./бабаяга.html"));

console.log(__dirname);