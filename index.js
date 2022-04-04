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
    name: "description"
},{
    type: "input",
    message: "What is your GitHub username?",
    name: "userName",
}, {
    type: "input",
    message:"What is your email?",
    name: "email"
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


