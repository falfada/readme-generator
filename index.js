const inquirer = require('inquirer');

function handleResponse(response){
    console.log(JSON.stringify(response));
}

function askTitle(){
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Whats your title?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Write your description:',
            name: 'description',
        },
    ]);
}
function askUser(){
    const steps = [];
    
    inquirer.prompt([
        {
            type: 'input',
            message: 'Provide the step description of how to get the development environment running.',
            name: 'step',
        },
        {
            type: 'confirm',
            message: 'Do you want to add another step?',
            name: 'addAnother',
            default: 'false',
        },
    ]);
}
async function callInquirers(){
    const inq1 = await askTitle();
    const inq2 = await askUser();
    return{
        title: inq1.title,
        description: inq1.description,
        step: inq2.step,
    }
}
callInquirers().then(handleResponse);