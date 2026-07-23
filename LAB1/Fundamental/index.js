// write a function to take your name and print it with a hello message.

function sayHello(name){
    console.log(`Hello ${name}`);
}

const sayHi = (name) => {
    console.log(`Hi ${name}`);
}

sayHello("Archit Shrivastava");
sayHi("Archit");



//take two arguments and return their sum.

const sum = (a, b) => {         // explicit return
    return a+b;
}

const findSum = (a,b) => a+b;  // implicit return

console.log(sum(5, 10));
console.log(findSum(5, 15));