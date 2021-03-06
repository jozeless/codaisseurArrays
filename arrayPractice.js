// arrayPractice.js
const patients = require("./patients");

// accesing elements in an array
const firstPatient = patients[0];

console.log(firstPatient);

// which element to access can also be dependent on a variable
const whichElementOfArray = 9;
const tenthPatient = patients[whichElementOfArray];
// const tenthPatient = patients[9];

console.log(tenthPatient);

// DIY
const secondPatient = patients[1];
console.log(secondPatient)
const lastInput = patients.length - 1
const lastPatient = patients[lastInput]
console.log(lastPatient)
// - console.log the second patient from the array
// - console.log the last patient from the array

function  greet(patientName) {
    console.log(`hello dear ${}`)
}

patients.forEach(greet);