const inquirer = require('inquirer');
const fs = require("fs");

const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const console = require('console');

const employees = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Name of Manager:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the name of the manager.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Manager's ID:",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Please enter the manger's ID");
                    return false;
                } else {
                    return true;
                } 
            }
        },
        {
            type: "input",
            name: "email",
            message: "Manager's email:",
            validate: emailInput => {
                valid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter a valid email');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Manager's office number:",
            validate: officeNumberInput => {
                if (isNaN(officeNumberInput)) {
                    console.log ('Please input an office number.');
                    return false
                } else {
                    return true
                }
            }
        },
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id , email, officeNumber);

        employees.push(manager);
    })
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Engineer or Intern",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Name of Employee:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the name of the Employee.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Employee ID:",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Please enter valid ID");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Employee's Email:",
            validate: emailInput => {
                valid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Employee's GitHub:",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter employee's github");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'school',
            message: "Intern's School:",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter intern's school");
                    return false;
                }
            }
        }, 
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'More team members?',
            default: false
        }
    ])
    .then(employeeData => {
        var { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        var employee;

        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);
            
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

        }

        employees.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(employees);
        } else {
            return employees;
        }
    })
};

