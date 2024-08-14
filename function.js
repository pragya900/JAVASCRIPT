function square(num){
    return num*num;
}
let result = square(4);
console.log(`the square is: ${result}`);

// DEFAULT PARAMETERS

function greet(name ='priya'){
    console.log(`hello , ${name}`);
}
greet();
greet("john");

// arrow function 
const myfunction=(a,b) => a*b;
console.log(myfunction(5,23));