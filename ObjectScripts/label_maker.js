let person = {
    name: "Naj",
    address: "96 Rhode Island Ave",
    city: "Bay Shore",
    state: "New York",
    zip: "11706"
};

function printContact() {
    console.log(person.name);
    console.log(person.address);
    console.log(person.city + ", " + person.state + " " + person.zip);
}

printContact(person);