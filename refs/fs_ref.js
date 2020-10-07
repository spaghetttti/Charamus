const fs = require("fs")
const path = require("path")
// File system
fs.mkdir(path.join(__dirname, "notes"), err => {
  if (err) { throw new Error(err)}

  console.log('folder has been created');
})
