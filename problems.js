const person = {
    name: "hasibul",
    address: "dhaka"
}

function createEmail(info){
    const result = info.name+"@"+info.address+".com";
    return result;
}

console.log(createEmail(person));
