var Person = require('./person');

function Student(firstName, lastName, subject) {
    Person.call(this, firstName, lastName);
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getSubject = function() {
    return this.subject;
};

module.exports = Student;