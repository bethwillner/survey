const colors = require('ansi-colors');

console.log(colors.red('red text'));

const testString = require('./test');
// "./" means in current folder

console.log(testString);


const { prompt } = require('enquirer')

const questions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'What is your first name?'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'What is your last name?'
    }
]

prompt(questions).then(answers => console.log(answers))

const Person = require('./testclass');

const beth = new Person('Beth');
//create new class to call it using beth as parameter

beth.greet();
//after calling person class, then call the function greet

const functions = require('./testfunction');

const beth2 = functions.createPerson('Beth');
functions.greet(beth2);