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
    message: "What is your username?",
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
    type: "input",
    message: "Describe your repository",
    name: "description"
}

]

