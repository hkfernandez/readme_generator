// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');

const questions = [
      {type: 'input', message: 'Project Title:', name: 'title'}, 
      {type: 'input', message: 'Project Description', name: 'description'},
      {type: 'input', message: 'Installation Instructions', name: 'installation'},
      {type: 'input', message: 'Usage - how the app is used', name: 'usage'},
      {type: 'input', message: "Contributors", name: 'contributors'},
      {type: 'input', message: "Testing Instructions", name: 'testing'}
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

inquirer.prompt(questions)
      .then ((response) => {
            fs.writeFile ('readme.md', `### ${response.title}` , (err) =>
            err ? console.error (err) : console.log ('Success')
            );
            fs.appendFile ('readme.md', `\n## Description\n${response.description}`, (err) =>
            err ? console.error (err) : console.log ('Success'))
      });     


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
