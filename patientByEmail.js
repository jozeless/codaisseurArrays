// patientByEmail.js
const patients = require("./patients");
const email = process.argv[2];

//console.log(patients);

let specificPatient = patients.find(function(patient){
return email === patient.email
})

//console.log(specificPatient); 

if (specificPatient !== undefinednode){
    console.log('OUTPUT',specificPatient)
}
else{
    console.log(`the email: ${email} dont exist in our data`)
}