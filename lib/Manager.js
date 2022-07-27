// manager's name, employee ID, email address, and office number

const Employee = require("./Employee");

class Manager extends Employee {
    constructor({name, id, email, office}) {
        
        // inherit Employee
        // this.name = name;
        // this.id = id;
        // this.email = email;


        this.office = office;
    }

    getOffice() {
        return ` ${this.office} `;
    }
}

module.exports = Manager;