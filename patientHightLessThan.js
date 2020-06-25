const patients = require ("./patients")

const height = parseFloat(process.argv[2])

const patientsHeightLongerThan = patients.filter(function(patients){
    return patients.height > height

})

console.log(`OUTPUT:`,patientsHeightLongerThan)
console.log(`Total number of patients is : ${patients.length}`)
console.log(`Total of patients taller tahn ${height} is: ${patientsHeightLongerThan.length}`)