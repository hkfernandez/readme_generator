// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');

const questions = ['Project Title:', 'PRoject Description', 'Installation Instructions', 'Usage - how the app is used', "Contributors", "Testing Instructions"];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function test () {
      inquirer.prompt({
            type: 'input',
            message: questions[i],
            name: 'userInput',
      })
      .then (() => console.log("working"));
            
}
test ();
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     },
//     {
//       type: 'password',
//       message: 'What is your password?',
//       name: 'password',
//     },
//     {
//       type: 'password',
//       message: 'Re-enter password to confirm:',
//       name: 'confirm',
//     },
//   ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );
