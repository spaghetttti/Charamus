const fs = require("fs")
const path = require("path")
// File system
/*
fs.mkdir(path.join(__dirname, "notes"), err => {
  if (err) { throw new Error(err)}

  console.log('folder has been created');
})
*/

// fs.writeFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'Sritten!',
//   (err) => {
//     if (err) throw err
//     else console.log("file created successfully")
  
//     fs.appendFile(
//         path.join(__dirname, 'notes', 'mynotes.txt' ),
//       'changes from appendFile <3',
//       err => {
//         if(err) throw Error(err)
//         else { console.log('file changed successfully');}
//       })
//       fs.readFile(
//         path.join(__dirname, 'notes', 'mynotes.txt'),
//         'utf-8',
//         (err,data) => {
//           if (err)  throw Error(err)
//           console.log(data);
//         }
//       )
//   })

fs.rename(
  path.join(__dirname,'notes','mynotes.txt'),
  path.join(__dirname,'notes', 'notes.txt'),
  (err) => {
    if(err) throw err
    console.log("file renames successfully  v");
  }
)
 