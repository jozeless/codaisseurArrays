const patients = require("./patients");

//console.log(patients);

function calculateBMI(height, weight) {
  return Math.round(weight / (height * height));
}

const bmis = patients.map(function(patient) {
  //console.log("WHAT IS PATIENT?", patient);
let BMI = calculateBMI(patient.height,patient.weight)

  return BMI
});

console.log(bmis);