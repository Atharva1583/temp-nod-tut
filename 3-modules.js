// console.log(__dirname)
// setInterval(()=>{
//     console.log('hello world')
// },1000)

// Modules
const names = require("./4-names");
const sayHi = require("./5-utils");

const data = require("./6-alternative-flavor");
require("./7-mind-grenade"); // if we make a function in any module and we invoked it there there is no need to make new variable and invoke that variable
console.log(data);

sayHi("Atharva");
sayHi(names.atharva);
