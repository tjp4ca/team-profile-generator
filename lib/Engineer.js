// engineer’s name, ID, email, and GitHub username

const Employee = require("./Employee");

// child Engineer inherits parent Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        
        // call parent class constructor Employee.js
        super(name, id, email);

        // adding github after inheriting Employee.js
        this.github = github;
    }

    getGithub() {
        return `${this.github}`;
    }

    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;
