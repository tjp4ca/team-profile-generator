// manager's name, employee ID, email address, and office number

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        
        // call parent class constructor Employee.js
        super(name, id, email);

        // add office after inheriting Employee.js
        this.office = office;
    }

    getOffice() {
        return `${this.office}`;
    }

    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;