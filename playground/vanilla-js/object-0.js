// create an object pen
var pen = {
    "brand": "bic",
    "color": 'black',
    "quantity": 2
}
console.log(pen);

// add a value price to pen
pen.price = "KSH 20";
console.log(pen)

// delete quantity value pair
delete pen.quantity
console.log(pen)

// Check if price value exists
if (pen.hasOwnProperty("price")){
    console.log("Price is present")
} else {
    console.log("Price is absent")
}

// // add an object method write
// pen.write() {
//     return ("writting");
// }

