const inquirer = require('inquirer');
const fs = require("fs");

const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const Employee = ('./lib/Employee')
const Engineer = ('./lib/Engineer');
const Inter = ('./lib/Intern');
const Manager = ('./lib/Manager');


const promptUser = () => {
    return inquirer.prompt([
    //   {
    //     type: 'input',
    //     name: 'name',
    //     message: 'What is your name? (Required)',
    //     validate: nameInput => {
    //       if (nameInput) {
    //         return true;
    //       } else {
    //         console.log('Please enter your name!');
    //         return false;
    //       }
    //     }
    //   },
      {
        type: 'list',
        name: 'member',
        message: 'Add an engineer or an intern?',
        choices: ['Engineer', 'Intern']
    },
    ]);
  };

promptUser()
.then(promptProject)
.then(portfolioData => {
  return generatePage(portfolioData);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
  return copyFile();
})
.then(copyFileResponse => {
  console.log(copyFileResponse);
})
.catch(err => {
  console.log(err);
});














// fs.writeFileSync("team-profile-generator.html", HTML, (err) => {
//     if (err)
// })


// // Create a function to write README file
// function writeToFile(fileName, data) {
//     console.log(data)
//     fs.writeFile('team-profile-generator.html', data, err =>
//     err ? console.log(err) : console.log('Success!'));
// }

// // Create a function to initialize app
// function init() {
//     return inquirer.prompt(questions)
//     .then(answers => {
//         return generateMarkdown.generateMarkdown(answers)})
//     .then((data) => {
//         // console.log(answers)
//         // return answers
//         writeToFile('team-profile-generator.html', data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }

// // Initialize app
// init();