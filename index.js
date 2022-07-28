const inquirer = require('inquirer');
    // to check if inquirer package works
    // console.log('inquirer working');

const fs = require("fs");

// template to generate index.html
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./utils/generate-site');

const {pageTemplate} = require('./src/page-template');

// const Employee = ('./lib/Employee')
// const Engineer = ('./lib/Engineer');
// const Inter = ('./lib/Intern');
// const Manager = ('./lib/Manager');


// const promptQuestions = () => {
//     return inquirer
//         .prompt([
//             // {
//             // type: 'input',
//             // name: 'name',
//             // message: 'What is your name? (Required)',
//             // validate: nameInput => {
//             //     if (nameInput) {
//             //     return true;
//             //     } else {
//             //     console.log('Please enter your name!');
//             //     return false;
//             //     }
//             // }
//             // },
//             {
//                 type: 'list',
//                 name: 'member',
//                 message: 'Add an engineer or an intern?',
//                 choices: ['Engineer', 'Intern']
//             },
//         ]);
// };


// function promptQuestions() {
    
// }


// promptQuestions()
// .then(promptProject)
// .then(portfolioData => {
//   return generatePage(portfolioData);
// })
// .then(pageHTML => {
//   return writeFile(pageHTML);
// })
// .then(writeFileResponse => {
//   console.log(writeFileResponse);
//   return copyFile();
// })
// .then(copyFileResponse => {
//   console.log(copyFileResponse);
// })
// .catch(err => {
//   console.log(err);
// });



const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your managers name? (Required)',
        validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('Please enter your managers name!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your managers id? (Required)',
        validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('Please enter your managers id!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your managers email? (Required)',
        validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('Please enter your managers email!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is your managers office number? (Required)',
        validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('Please enter your managers office number!');
              return false;
            }
          }
    },
    {
        type: 'list',
        name: 'add',
        message: 'Add an engineer or an intern?',
        choices: ['Engineer', 'Intern', 'No, create team']
    },
]

// function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const gen = pageTemplate(answers);
        console.log(gen)
        fs.writeFile('./dist/index.html', gen, err =>
        err ? console.log(err) : console.log('Success!'));
        // return answers
    })
    .catch((error) => {
        console.log(error)
    })
}

// Initialize app
init();





// fs.writeFileSync("index.html", HTML, (err) => {
//     if (err)
// })


// // Create a function to write README file
// function writeToFile(fileName, data) {
//     console.log(data)
//     fs.writeFile('index.html', data, err =>
//     err ? console.log(err) : console.log('Success!'));
// }

