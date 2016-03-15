var Person = require('./person');

var Worker = function(firstName, lastName, jobTitle) {
    Person.call(this, firstName, lastName);
    this.jobTitle = jobTitle;
};

Worker.prototype = Object.call(Person.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.getJobTitle = function() {
    return this.jobTitle;
};