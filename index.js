// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
   inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message:  'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                    } else {
                        console.log("Please provide a name for your project.");
                        return false;
                    }   
                }
        },
        {
            type: 'input',
            name: 'description',
            message:  'What is the description of your project? (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                    } else {
                        console.log("Please provide a quick description of your project.");
                        return false;
                    }   
                }
        },
        {
            type: "input",
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: "input",
            name: 'usage',
            message: 'Provide instructions and example of how to use your application?'
        },
        {
            type: "list",
            name: 'license',
            message: 'What type of license do you want to use?',
            choices: ['MIT', 'GNU', 'Apache', 'Other']
        },
        {
            type: "input",
            name: 'contributing',
            message: 'Guidelines on how other users can contribute to your project?'
        },
        {
            type: "input",
            name: 'test',
            message: 'Write test for your application and provide examples on how to run them.'
        },
        {
            type: "input",
            name: 'questions',
            message: 'Instructions on how to reach the developer with additional questions.'
        },
        {
            type: "input",
            name: 'githubUser',
            message: 'Please provide your GitHub username (Required)',
            validate: githubUserInput => {
                if (githubUserInput) {
                    return true;
                } else {
                    console.log("Please provide your GitHub username.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'githubLink',
            message: 'Please provide your GitHub link (Required)',
            validate: githubLinkInput => {
                if (githubLinkInput) {
                    return true;
                } else {
                    console.log("Please provide your GitHub link.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'email',
            message: 'Please provide your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please provide your email address.");
                    return false;
                }
            }
        }

    ])
    .then(function(data) {
        var markdown = generateMarkdown(data);
        writeToFile("newreadme.md", markdown);
    });

        

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err)
            return;
        }
        console.log("You have successfully created your README.md file.");
    });
}



