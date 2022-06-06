const inquirer = require('inquirer')
const fs = require('fs')

const questionnaire = [
    {
        message: 'type the name of your project', 
        type: 'input',
        name: 'name'
    },
    {
        message: 'provide an accurate description of your project ', 
        type: 'input',
        name: 'description'
    },
    {
        message: 'what are the installation procedures for this project?', 
        type: 'input',
        name: 'installation'
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
        name: 'license'
    },
    {
        message: 'what are the contributing guidelines that your project has?', 
        type: 'input',
        name: 'contribution'
    },
    {
        message: 'what are the testing guidelines that your project has?', 
        type: 'input',
        name: 'testing'
    },
    {
        message: 'what is your github username? ', 
        type: 'input',
        name: 'github',  
    },
    {
        message: 'what is your email?', 
        type: 'input',
        name: 'email',  
    },
]



inquirer.prompt(questionnaire)
.then(answers => {
    console.log(answers)
    let readMeElem = ` 
    <img src='https://img.shields.io/badge/${answers.license}-blue.svg'>
<h1> ${answers.title} </h1>
<h2> ${answers.description} </h2>
<h2> table of contents</h2>
<details open='open'> 
<summary> Table of Contents
</summary>
<ol>
<li><a href= "#installation"> Installation
</li></ol></details>

<h3 id='installation'> Installation </h3> 
<p> ${answers.installation}</p>

<h3 id='usage'> Usage </h3> 
<p>${answers.usability} </p>

<h3 id='contributions'> Contributions </h3> 
<p> ${answers.contribution}</p>

<h3 id='tests'> Tests </h3> 
<p>${answers.testing}</p>

<h3 id='questions'> Questions </h3> 
<p> if you have any questions please reach out to me on github at ${answers.username} or email me at ${answers.email} </p>
    
    `



    fs.writeFile('newReadMe.md', readMeElem, err => console.log(err))
})
.catch(err => console.log (err))