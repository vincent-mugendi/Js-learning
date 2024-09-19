// declare an array called list
let list = [];
console.log(list);

// add valuse to the array
list = [
    'wakeup',
    'brush',
    'breakfast'
];
console.log(list);

// nest an array
let nestedArray = [
    [list],
    ['flour', 'sugar', 'salt']
];

console.log(nestedArray)

// access the 2nd element in the array list
console.log(list[1]);

// replace the last element in list with shower
console.log(list.length);
list[2] = 'shower';

console.log(list[2])

// remove the last element in list
list.pop()
console.log(list)

// remove the first element of list
list.shift()
console.log(list);

// add alarm at the beginnining of list
list.unshift('alarm');
console.log(list)

