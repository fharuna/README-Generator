var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require("inquirer");

//questions array

let questions = [
{
    type: "input",
    message: "What is your repository title?",
    name: "title"
},{
    type: "input",
    message: "Describe your repository",
    name: "Description"
},{
    type: "input",
    message:"How can users install this app?",
    name: "Installation"
},{
    type: "input",
    message:"How is this application used?",
    name: "Usage"
},{
    type: "input",
    message:"Who can contribute to your project?",
    name: "Contributing"
},{
    type: "input",
    message:"What are instructions to test this project?",
    name: "Tests"
},{
    type: "input",
    message: "What is your GitHub username?",
    name: "userName",
},{
    type: "input",
    message:"What is your email?",
    name: "Email"
},{
    type: "input",
    message:"What is your GitHub link?",
    name: "GitHub"
},{
    type: "list",
    message: "What type of License will you use?",
    name: "License",
    choices: [
        "APACHE 2.O",
        "BSD 3",
        "GVL-GPL 3.0",
        "MIT",
        "None"
    ]
}

];

// To write README file

inquirer.prompt(questions)
.then(function(response){
    console.log(response);
    
    var content = fileGenerator(response);
    
    fs.writeFile("./README.md", content, function(err){
        console.log("complete");
    });
});


