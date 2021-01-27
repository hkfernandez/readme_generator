// inquirer package - provides command line prompts
const inquirer = require ('inquirer');
// fs module - allows creation of external files
const fs = require ('fs');
// custom package that holds copy and badges for licenses
const licenseInfo  = require ('./utils/licenseTypes.js');

// questions passed into the inquirer
const questions = [
      {type: 'input', message: 'Project Title', name: 'title'}, 
      {type: 'input', message: 'Project Description', name: 'description'},
      {type: 'input', message: 'Installation Instructions', name: 'installation'},
      {type: 'input', message: 'Usage - how the app is used', name: 'usage'},
      {type: 'input', message: "Contributors", name: 'contributors'},
      {type: 'input', message: "Testing Instructions", name: 'testing'},
      {type: 'input', message: "GitHub Username", name: 'github'},
      {type: 'input', message: "Email Address", name: 'email'},
      {type: 'list', message: "License Type", name: 'license', choices: ['MIT', 'Apache', 'GPL', 'BSD_2_Clause', 'BSD_3_Clause', 'BSD_4_Clause']}
];

function init() {
// inquirer loop 
      inquirer.prompt(questions)
      .then ((response) => {
// creates readme file in root folder and appends info
            fs.appendFile ('./output/readme.md', 
            `${licenseInfo.licenseInfo.licenseBadges[response.license]}
            \n# ${response.title}
            \n\n## Description\n${response.description}
            \n\n## Installation Instructions\n${response.installation}
            \n\n## Usage\n${response.usage}
            \n\n## Contributors\n${response.contributors}
            \n\n## Testing\n${response.testing}
            \n\n ## License\n${response.license}
            \n\n ## Questions\nYou can find the repo at [${response.github}](https://github.com/${response.github}).
            \n\ You can always send me a question at ${response.email}.
            \n\ Thanks for having a look!
            `,
            (err) => err ? console.error (err) : console.log ('Success')
            );
// creates license.md in root folder
            fs.writeFile ('./output/license.md', licenseInfo.licenseInfo.licenseText[response.license] , (err) =>
            err ? console.error (err) : console.log ('Success')
            );
      });     
}

init();


