// var myName = "Vincent";
// console.log(myName);

// var a = 3;
// var b = 5;
// var result = a + b;
// console.log(result) // will log 8

// var name = "John";
// var greeting = "Good Evening,";
// var welcome = greeting + " " + name + ".";

// console.log(welcome);
// console.log("Length of string = ", welcome.length);

// console.log(name[0]);
// console.log(name[2]);

// var str = "This is a string";
// console.log(str.length);
// console.log(str[15]);

// var shopping = ["Mangoes", 4, "Tissue"];
// console.log(shopping);

// console.log(shopping[0]);
// console.log(shopping[0 + 1]);

// shopping[1] = 7;
// console.log(shopping);

// shopping -= shopping[1] //doesnt work, trying to remove a value from an array
// console.log(shopping)

// var ingredients = [["Flour", "Sugar", "Cinnamon"], ["milk", "butter", "eggs"]];
// console.log(ingredients);
// console.log(ingredients[0])
// ingredients[0][1] = "salt";
// console.log(ingredients)

// var colors = ["Red", "Blue", "Orange"];
// console.log(colors);

// colors.push("Green");
// console.log(colors)

// removedcolor = colors.pop();
// console.log(colors);
// console.log(removedcolor);

// var numbers = [1, 2, 3, 4, 5];
// removedNumber = numbers.shift();
// console.log(numbers);
// console.log(removedNumber);

// numbers.unshift(0);
// console.log(numbers);

// function greeting(){
//     console.log("Hello, there!");
// }

// greeting();

// function add(a, b){
//     console.log(a + b);
// }

// add(2, 3);

// function squareRoot(x){
//     return x * x
// }

// console.log(squareRoot(8));

// function hi(){
//     return("Hi");
// }

// console.log(hi());

// var numbers = [1, 2, 3, 4];
// console.log(numbers);
// //create a function that adds data at the begging of the array
// function addNumber(newNumber){
//     numbers.unshift(newNumber);
//     console.log("Added", newNumber);
// }

// addNumber(0);
// console.log(numbers);

// var number = 20;
// if (number < 10){
//     console.log("True");
// }
// else {
//     console.log("False");
// }

// var number = 5;
// if (number > 3) {
//     console.log("Greater than 3");
// } else if (number == 3) {
//     console.log("The number is 5");
// } else {
//     console.log("The number is not greator than 3 and is not 5")
// }


// var student0 = {
//     "name": "John",
//     "age": 8
// }

// var student1 = {
//     "name": "Mary",
//     "age": 10
// }
// var students = [student0, student1];
// console.log(students[0])
// console.log(student0.age)


// var Mercedes = {
//     "type": "C200",
//     "seats": 4,
//     "color": "black"
// }

// Mercedes.type = "C300"
// console.log(Mercedes.type)

// var Mercedes = {
//     "type": "C200",
//     "seats": 4,
//     "color": "black"
// }

// Mercedes["max speed"] = "350 Km/hr";
// Mercedes.origin = "Germany"
// console.log(Mercedes)

// //deleting properties
// delete Mercedes["max speed"];
// console.log(Mercedes);


// //Checking for object properties
// var Mercedes = {
//     "type": "C200",
//     "seats": 4,
//     "color": "black"
// }

// function checkMercProperty(property) {
//     if (Mercedes.hasOwnProperty(property)){
//         console.log("Property present");
//     } else {
//         console.log("Property Absent");
//     }
// }

// checkMercProperty("speed");

// var pen = {
//     "brand": "speedo",
//     "color": "black",
//     "price": 20
// }

// function checkPenProperties(property) {
//     if (pen.hasOwnProperty(property)) {
//         console.log("Property Present");
//     } else {
//         console.log("Property Absent");
//     }
// };

// checkPenProperties("color");



//switch statement

// var number = 5;
// if (number == 10) {
//     console.log("Number is 10");
// } else if (number == 8) {
//     console.log("number is 8");
// } else if (number == 6) {
//     console.log("number is 6");
// } else if (number == 5) {
//     console.log("number is 5");
// } else {
//     console.log(number);
// }


// switch (number == 5) {
//     case 5:
//         console.log("number is 5")
// }




