// Parent class for duplicate codes

class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `${this.name}`;
    }

    getId() {
        return `${this.id}`;
    }

    getEmail() {
        return `${this.email}`;
    }

    getRole() {
        return `Employee`;
    }
}

//const employee = new Employee();
// console.log(employee.name);
// console.log(employee.id);
// console.log(employee.email);

module.exports = Employee;
