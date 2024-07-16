// create an object called dog
dog = {
    name: "Skippy"
}

// add a method to dog called bark

dog.bark = function () {
    console.log('woof');
}

console.log(dog)

// add another method called sit
dog.sit = function() {
    console.log("Sitted")
}

console.log(dog)

// call sit method
console.log(dog.sit)

