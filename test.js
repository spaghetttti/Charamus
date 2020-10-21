console.log("Plant maize");

setTimeout( () => {
  console.log("Water plant")
},4000);

console.log("Add fertilizer");

const list    = ['man', 'woman', 'child']

// create a new array
// loop over the array and map the data to new content
const newList = list.map(function(val) {
  return val + " kind";
})

console.log(newList)