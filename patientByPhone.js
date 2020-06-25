const patients = require("./patients");


const phone = process.argv[2];

const specificPatient = patients.find(function(patient){
return phone === patient.phoneNumber
})
if (specificPatient !== undefined) {
console.log(specificPatient)
}
else {
    console.log(`phone: ${phone} not found`)
}