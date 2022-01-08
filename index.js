//constants used to make inquirer work and generate markdown
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown');

//Questions to be answered
const  inquiries = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide your badge links.",
        validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project.",
        validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
    },
    {
        type: "input",
        name: "installation",
        message: "Please include installation instructions here.",
        validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
    },
    {
        type: "input",
        name: "usage",
        message: "How is your project used?",
        validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
    },
    {
        type: "input",
        name: "licence",
        message: "What licences do you have / or are using for this project?",
        validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
    },
    {
        type: "input",
        name: "contributing",
        message: "Please list the contributers of this project.",
        validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
    },
    {
        type: "input",
        name: "test",
        message: "Please provide all tests for this project.",
        validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?",
        validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
    },
    {
        type: "input",
        name: "repo",
        message: "Please provide link to your repo.",
        validate: (value) =>{if(value){return true} else {return "Please input value to continue"}},
    },
];

//The goodstuff to make it work

inquirer
.prompt (inquiries)
.then(function(data){

const queryUrl = "https://api.github.com/users/${data.username}";

axios.get(queryUrl).then(function(res) {
    const githubInformation = {
        githubImage: res.data.avatar_url,
        profile: res.data.html_url,
        email: res.data.email,
        name: res.data.name
    };

    fs.writeFile("README.md", generate(data, githubInformation), function(err){
        if(err){
            throw err;
        };
        console.log("ReadME Created");
    });
});

});
function init() {

}

init();