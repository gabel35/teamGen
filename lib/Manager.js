const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, role, id, email, office){
        super(name, role, id, email);
        this.office= office;
    }

    getRole(){
        return this.role;
    }

    getOffice(){
        return this.office;
    }
}

module.exports = Manager;