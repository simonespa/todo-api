var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Person.prototype.getFirstName = function() {
    return this.firstName;
};

Person.prototype.getLastName = function() {
    return this.lastName;
};

Person.prototype.copy = function() {
    return new this.constructor(this.firstName, this.lastName);
};

module.exports = Person;