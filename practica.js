const nombres = [
    {
        name:'jose', 
        lastName:'rodri',
        age: 34
    },
    {
            name:'cristina',
            lastName:'kruimer',
            age: 30
        }
    ]


nombres.forEach(function(person){
    const {name, lastName} = person
    console.log(`${name} ${lastName}`)
})

const cristina = nombres.find(function(busqueda){
if (busqueda.age === 34){
return true
}
else {
    return false
}
})

console.log(cristina)