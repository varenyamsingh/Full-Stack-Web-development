console.log("Hey this is variables, data types session")
//var a =5; //Instead of var we will use let
let a = 5; //using let makes it global variable
let b = 6;
let c = "Tony";

// console.log(a + b + 5)//we can add numbers directly by just adding the numbers without declaring the value
// console.log(typeof a, typeof b, typeof c)
{
    let a = 55;
    console.log(a)
}
console.log(a)
// const a1  = 1;//const or constant ki value hum change nhi kar sakte
// a1 = a1 + 1; //not allowed

//There are 7 primitive datatypes in javascript
//Null, Number, String, Undefined, Boolean, Symbol, Big Int

let x = "hello bro";
let y = 24;
let z = 3.45;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let o = {
    name: "Tony",
    "Job Role": 5600
}
console.log(o)
//yaha pe humne o naam ka object banaya usem information store kar sakte hai
o.salary = "10crore"
console.log(o)
o.salary = "100crore"
console.log(o);