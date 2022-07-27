// engineer’s name, ID, email, and GitHub username

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor({name, id, email, gitHub}) {
        
        // inherit Employee
        // this.name = name;
        // this.id = id;
        // this.email = email;


        this.gitHub = gitHub;
    }

    getGitHub() {
        return ` ${this.gitHub} `;
    }
}

module.exports = Engineer;
