const createPerson = firstName => {
    return {firstName}
}

const greet = person => {
    console.log(`${person.firstName} says hi`)
}

module.exports = {createPerson , greet};