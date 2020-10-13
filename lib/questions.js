// prompt questions for team

const questions = 
[
    {
        type: "input",
        name: "name",
        message: "What's the employee's full name?"
    },
    {
        type: "input",
        name: "id",
        message: "What's the employee's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What's the employee's email?"
    },
    {
        type: "list",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role",
        message: "What's the employee's role?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What's the manager's office number?",
        when: (answer) => answer.role === "Manager"
    },
    {
        type: "input",
        name: "github",
        message: "What's the engineer's Github username?",
        when: (answer) => answer.role === "Engineer"
    },
    {
        type: "input",
        name: "school",
        message: "What's the intern's school?",
        when: (answer) => answer.role === "Intern"
    },
    {
        type: "confirm",
        name: "continue",
        message: "Would you like to add another employee?"
    }
];

module.exports = questions;