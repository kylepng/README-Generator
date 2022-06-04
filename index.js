const inquirer = require('inquirer')
const fs = require('fs')

const questionnaire = [
    {
        message: 'type the name of your project', 
        type: 'input',
        name: 'name of the project:'
    },
    {
        message: 'provide an accurate description of your project ', 
        type: 'input',
        name: 'description of the project: '
    },
    {
        message: 'what are the installation procedures for this project?', 
        type: 'input',
        name: 'installation process: '
    },
    {
        message: 'what licenses does your project have?', 
        type: 'input',
        name: 'title'
    },
    {
        message: 'what usages does your project provide?', 
        type: 'input',
        name: 'usability'
    },
    {
        message: 'what licenses does your project have?', 
        type: 'list',
        choices: ['MIT', 'APACHE 2.0' , 'GPL 3.0', 'BSD 3', 'NONE' ],
        name: 'license(s):'
    },
    {
        message: 'what are the testing/contributing guidelines that your project has?', 
        type: 'input',
        name: 'contributing guidelines:'
    },
    {
        message: 'what is your github username? ', 
        type: 'input',
        name: 'github username:',  
    },
    {
        message: 'what is your email?', 
        type: 'input',
        name: 'Email:',  
    },
]



inquirer.prompt(questionnaire)
.then(response => {
    console.log(response)
})
.catch(err => console.log (err))
