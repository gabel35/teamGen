const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");


const employees = [];

function genDir() {
    var topHTML = `
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
        <title>Team Profile Generator</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Employee Directory</h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
    `
    var bottomHTML = `
            </div>
        </div>
    </body>
    </html>
    `
    let bodiesHTML = ""
    employees.map(function (response) {
        if (response.role === "manager") {
            bodiesHTML += `
                <div class= "col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title"> Name: ${response.name}</h2>
                            <p class="card-text"> ${response.role}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${response.id}</li>
                            <li class="list-group-item">Email:<a href="mailto:${response.email}" target="_blank">${response.email}</a></li>
                            <li class="list-group-item">Office Number: ${response.office} </li>
                        </ul>
                    </div>
                </div>
            `;
        } else if (response.role === "intern") {
            bodiesHTML += `
                <div class= "col-md-4">
                    <div class="card" >
                        <div class="card-body">
                        <h2 class="card-title">Name:${response.name}</h2>
                            <p class="card-text"> ${response.role} </p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${response.id}</li>
                            <li class="list-group-item">Email: <a href="${response.email}" target="_blank">${response.email}</a></li>
                            <li class="list-group-item">School: ${response.school}</li>
                        </ul>
                    </div>
                </div>
            `;
        } else if (response.role === "engineer") {
            bodiesHTML += `
                <div class= "col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title"> Name: ${response.name}</h2>
                            <p class="card-text"> ${response.role} </p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID:  ${response.id}</li>
                            <li class="list-group-item">Email: <a href="${response.email}">${response.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${response.github}" target="_blank">${response.github}</a></li>
                        </ul>
                    </div>
                </div>
            `;
        }
    });
    var content = (topHTML + bodiesHTML + bottomHTML);
    fs.writeFile("./dist/Directory.html", content, (err) => {
        err ? console.log(err) : console.log("Content has been generated")
    });
};

const askQuestions = async () => {
    const questions = [
        {
            type: "input",
            name: "name",
            message: "What is this employee's name?",
        },
        {
            type: "list",
            name: "role",
            choices: ["manager", "engineer", "intern"],
            message: "Which is this employee's role?",
        },
        {
            type: "number",
            name: "id",
            message: "Please enter this employee's ID number."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter this employee's email address."
        },
        {
            type: "input",
            name: "office",
            message: "Where is there office? (office number)",
            when: (response) => response.role === "manager"
        },
        {
            type: "input",
            name: "github",
            message: "What is this employee's github username?",
            when: (response) => response.role === "engineer"
        },
        {
            type: "input",
            name: "school",
            message: "Where does this employee go to school?",
            when: (response) => response.role === "intern"
        },
        {
            type: "confirm",
            name: "another",
            message: "Would you like to add another employee?",
            default: false
        }
    ]
    
    const { another, ...response } = await
        inquirer.prompt(questions);
        switch (response.role) {
            case "manager":
                const newManager = new Manager(response.name, response.id, response.email, response.office)
                employees.push(newManager);
                console.log(employees);
                break;
            case "engineer":
                const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
                employees.push(newEngineer);
                console.log(employees)
                break;
            case "intern":
                const newIntern = new Intern(response.name, response.id, response.email, response.school);
                employees.push(newIntern);
                console.log(employees);
                break;
            default:
                console.log("generating directory")
                break;
        }
        return another ? askQuestions(employees) : employees
};

   

const init = async () => {
    await askQuestions();
    await genDir(employees);
}
    
init();