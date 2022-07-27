// // intern’s name, ID, email, and school

const Employee = require("./Employee");

class Intern extends Employee {
    constructor({name, id, email, school}) {
        
        // inherit Employee
        // this.name = name;
        // this.id = id;
        // this.email = email;


        this.school = school;
    }

    getSchool() {
        return ` ${this.school} `;
    }
}

module.exports = Intern;