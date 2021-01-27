// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const licenseInfo  = require ('./utils/licenseTypes.js');

// questions passed into the inquirer
const questions = [
      {type: 'input', message: 'Project Title:', name: 'title'}, 
      {type: 'input', message: 'Project Description', name: 'description'},
      {type: 'input', message: 'Installation Instructions', name: 'installation'},
      {type: 'input', message: 'Usage - how the app is used', name: 'usage'},
      {type: 'input', message: "Contributors", name: 'contributors'},
      {type: 'input', message: "Testing Instructions", name: 'testing'},
      {type: 'list', message: "License Type", name: 'license', choices: ['MIT', 'Apache', 'GPL', 'BSD_2_Clause', 'BSD_3_Clause', 'BSD_4_Clause']}
];

// inquirer loop - then write readme
inquirer.prompt(questions)
      .then ((response) => {
            fs.writeFile ('readme.md', licenseInfo.licenseInfo.licenseBadges[response.license] , (err) =>
            err ? console.error (err) : console.log ('Success')
            );
            fs.appendFile ('readme.md', 
            `\n# ${response.title}
            \n\n## Description\n{response.description}
            \n\n## Installation Instructions\n${response.installation}
            \n\n## Usage\n${response.usage}
            \n\n## Contributors\n${response.contributors}
            \n\n## Testing\n${response.testing}
            \n\n ## License\n${response.license}
            \n\n ## Questions\nYou can find the repo at [hkferandez](https://github.com/hkfernandez).
            \n\ You can always send me a question at hkfernandezdev.gmail.com.
            \n\ Thanks for having a look!
            `,
             (err) =>
            err ? console.error (err) : console.log ('Success'))
      });     


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
