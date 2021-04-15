const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, role, id, email, school){
        super(name, role, id, email);
        this.school= school;
    }

    getRole(){
        return this.role;
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;