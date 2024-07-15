// create an object for a student
const student = {
    name: 'Vincent',
    class: '3N',
};
console.log(student);

// update student claas to 4H

student.class = '4H';
console.log(student)

// add a key called gpa with a value 5.0
student.gpa = 5.0;
console.log(student)

// delete class key pair
delete student.class;
console.log(student);

// check if property name exists
const checkProperty = (property) => {
    if (student.hasOwnProperty(property))
        console.log("Property present");
    else
        console.log('Property Absent');
}

checkProperty('class');