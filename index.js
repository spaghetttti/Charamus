console.log("hello", __filename)
const obj = require("./user")
console.log(obj.user)
console.log(obj.sayHello())
obj.sayHello()
