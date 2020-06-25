const patients = require("./patients")

//const phoneNumber = process.argv[2]

const patientsPhoneNUmber = patients.map(function(patients){
return patients.phoneNumber
})

console.log(patientsPhoneNUmber)