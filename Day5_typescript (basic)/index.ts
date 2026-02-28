//import (add) from "./index"
//console.log(add(2, 3))

//import { teacher } from "./index"
//console.log(teacher)
//t.display()
//console.log(t.display())

//import { teacher as t } from "./index"
//console.log(t)
//t.display()
//console.log(t.display())




//asynchronous programming
//console.log("Start")
//setTimeout(() => console.log("This is a message"), 2000)
//console.log("End")
//timer functions: setTimeout, setInterval, clearTimeout, clearInterval

//console.log("Start")
//setInterval(() => console.log("This is a message"), 2000)
//console.log("End")
//console.log("Start")
//const intervalId = setInterval(() => console.log("This is a message"), 2000)
//clearInterval(intervalId)
//console.log("End")
//console.log("Start")
//const timeoutId = setTimeout(() => console.log("This is a message"), 2000)
//clearTimeout(timeoutId)
//console.log("End")
//Promises
//const promise = new Promise((resolve, reject) => {
//    setTimeout(() => resolve("This is a message"), 2000)  

// //promises 
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("This is a message"), 2000)  
// }
// )
// promise.then(message => console.log(message))

let promise = new Promise<number>((resolve) => {
     resolve(42);  
})
promise.then(num => {
    const result = num + 10;
    console.log("Result of addition:", result);
})
promise.then(num => {
    const result = num * 2;
    console.log("Result of multiplication:", result);
})
promise.then(num => {
    const result = num - 5;
    console.log("Result of subtraction:", result);
})