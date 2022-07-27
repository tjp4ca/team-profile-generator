// // intern’s name, ID, email, and school

// child Engineer inherits parent Employee
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        
        // call parent class constructor Employee.js
        super(name, id, email);

        // add school after inheriting Employee.js
        this.school = school;
    }

    getSchool() {
        return `${this.school}`;
    }

    getRole() {
        return `Intern`;
    }
}

module.exports = Intern;