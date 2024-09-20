// This is a global variable
var x = 10;

function someFunction(a) {
    let x = 15;
    console.log((a + x));
}

console.log(x);
someFunction(10)