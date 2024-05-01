// 1. Title
// 2. Description
// 3. Table of Contents -> anchor links
// 4. Installation
// 5. Usage
// 6. License [list of options] -> badge for that license is added and a notice
// 7. Contributing
// 8. Tests
// 9. Questions -> github username | email address

const inquirer = require('inquirer');

function handleResponse(response) {
    const steps = parseInt(response.installationSteps);
    askInstallationStep(response, steps);
}

function askInstallationStep(response, stepsLeft) {
    if (stepsLeft === 0) {
        console.log(JSON.stringify(response));
        return;
    }

    inquirer.prompt([
        {
            type: "input",
            message: `Provide the step description of how to get the development environment running`,
            name: "installation",
        }
    ]).then((answer) => {
        response.installation = answer.installation;
        askInstallationStep(response, stepsLeft - 1);
    });
}

function askUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Title of your project:",
            name: "title",
        },
        {
            type: "input",
            message: "Provide a short description explaining the what, why, and how of your project:",
            name: "description",
        },
        {
            type: "input",
            message: "How many steps are required to install your project?",
            name: "installationSteps",
        },
    ]);
}

askUser().then(handleResponse);


// Ask for the number of steps to loop until that number is met
