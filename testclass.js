class Person {
    firstName

    constructor(firstName){
        this.firstName = firstName;
    }

    greet(){
        console.log(`${this.firstName} says hi!`);
    }
}

module.exports = Person;