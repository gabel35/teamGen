const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");


const employees = [];

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
            when: (response) => response.role === "Manager"
        },
        {
            type: "input",
            name: "github",
            message: "What is this employee's github username?",
            when: (response) => response.role === "Engineer"
        },
        {
            type: "input",
            name: "school",
            message: "Where does this employee go to school?",
            when: (response) => response.role === "Intern"
        },
        {
            type: "confirm",
            name: "another",
            message: "Would you like to add another employee?",
            default: true
        }
    ]
    
    const { another, ...response } = await
        inquirer.prompt(questions);
        switch (response.role) {
            case "Manager":
                const newManager = new Manager(response.name, response.id, response.email, response.office)
                employees.push(newManager);
                console.log(employees);
                break;
            case "Engineer":
                const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
                employees.push(newEngineer);
                console.log(employees)
                break;
            case "Intern":
                const newIntern = new Intern(response.name, response.id, response.email, response.school);
                employees.push(newIntern);
                console.log(employees);
                break;
            default:
                console.log("is anyone there?")
                break;
        }
        return another ? askQuestions(employees) : employees
    };

    const init = async () => {
        await askQuestions();
    }
    
    init();