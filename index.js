// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdownFile = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // {
    //     type: 'input',
    //     message: "Write your github username",
    //     name: 'githubUsername'
    // },
    // {
    //     type: 'input',
    //     message: "Write your email address",
    //     name: 'email'
    // },
    // {
    //     type: 'input',
    //     message: 'Write the title of your project',
    //     name: 'title'
    // },
    // {
    //     type: 'input',
    //     message: 'Write the description:',
    //     name: 'description'
    // },
    // {
    //     type: 'input',
    //     message: "What are the steps required to install your project?",
    //     name: 'installation'
    // },
    // {
    //    type: 'input' ,
    //    message: "Provide instructions for use",
    //    name: 'usage'
    // },
    // {
    //     type: 'confirm',
    //     message: "Do you wish to use the default contribution guidelines?",
    //     name: 'contribution',
    //     default: 'false',
    // },
    // {
    //     type: 'confirm',
    //     message: "Would you like to use the default test instructions?",
    //     name: 'tests',
    //     default: 'false'
    // },
    {
        type: 'list',
        message: "What license do you want to use? Choose from the list",
        name: 'license',
        choices: ["MIT License", "Apache License 2.0", "GNU GPLv.3.0"],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function handleResponse(response){
    console.log(response.license);
    generateMarkdownFile.generateMarkdown(response);
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then(handleResponse);
}

// Function call to initialize app
init();


// async function callInquirers(){
//     const inq1 = await askTitle();
//     const inq2 = await askUser();
//     return{
//         title: inq1.title,
//         description: inq1.description,
//         step: inq2.step,
//     }
// }
// callInquirers().then(handleResponse);