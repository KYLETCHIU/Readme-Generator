//constants used to make inquirer work and generate markdown
const inquirer = require("inquirer");
const fs = require("fs");
const generateMD = require('./utils/generateMarkdown.js');

//Questions to be answered
const questions = () => {
    
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is your github username?",
            validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email address.",
            validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
            validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
        },
        {
            type: "input",
            name: "description",
            message: "How would you describe your project?",
            validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
        },
        {
            type: "input",
            name: "license",
            message: "Please provide all licenses for your project.",
            validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
        },
        {
            type: "input",
            name: "installation",
            message: "What is required to install your project?",
            validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
        },
        {
            type: "input",
            name: "usage",
            message: "How is the project meant to be used?",
            validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide all tests for this project.",
            validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
        },
        {
            type: "input",
            name: "contributors",
            message: "Who contributed to your project?",
            validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
        },
        {
            type: "input",
            name: "repo",
            message: "Please provide link to your repo.",
            validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
        },
]);
};

// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("README Created")
        }
    })
}; 

// function call to initialize program
questions()
.then(answers => {
    return generateMD(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})
