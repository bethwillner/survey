(async () => {

const { prompt } = require('enquirer');

const questions = require('./questions.json');

console.log(await prompt(questions));

})()