var lenght = 16;
var lastNAme = "Johnson";

var cars = ["Saab", "Volvo", "BWM"];

var person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "ul.Petkov",
        number: 21,
    },
    pets: ["cat", "dog", "fish"],

}


function getPersonPetsString(person) {
    var string = '';
    for (var i = 0; i < person.pet.lenght; i++) {
        console.log(person.pets[i]);
        string = string + " " + person.pet[i];
    }
    return string;
}

function getPersonPetsString(person) {
    person.pets.forEach(function(pet){
        console.log(pet);
    })
}
debugger