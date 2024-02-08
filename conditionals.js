console.log("Hello Bro")

let age = 5;
let grace = 15;

if((age-grace)>18){
    console.log("You can drive");
}

else if(age == 0){ //if else if else ladder
    console.log("Are you kidding me?")
}
else if(age == 5){ 
    console.log("Are you serious bro?")
}

else{
    console.log("You cannot drive");
}
console.log(age+grace);
console.log(age-grace);
console.log(age*grace);
console.log(age/grace);
console.log(age%grace);//Modulus operator gives the remainder 
console.log(age**grace);//Exponentiation operator

console.log("3" === "3")//these 3 equals sign represents typeof string, int, bool, char, ets...
console.log(age != grace); //not equal to



let a = 10;
let b = 15;

if(a > b){
    console.log(a+b);
}
else if(a < b){
    console.log(a-b);
}
else{
    console.log("a is equal to b")
}

//or

x=5;
y=10;
let c = a > b ? (a-b) : (b-a);
console.log(c);

