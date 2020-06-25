const patients = require("./patients");
// hardcoding id 4212 for now, we can make this dynamic later
const id = parseInt(process.argv[2])

const specificPatient = patients.find(function(patient) {
 return id === patient.id
});

//console.log("OUTPUT:", specificPatient);

if (specificPatient !== undefined) {
console.log("OUTPUT:", specificPatient)
}
else {
console.log(`Patient with id: ${id}, not found`);
}