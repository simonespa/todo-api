'use strict';

var expect = require('chai').expect;

describe('persistence', function() {

    var persistence = require('../lib/persistence');

    /*
     * This method test the clear() method
     */
    beforeEach(function() {
        persistence.clear();
    });

    describe('create(todo)', function() {

        it('should create a new todo and the empty list should have one element', function() {
            expect(persistence.getAll()).to.have.length(0);
            persistence.create({
                title: 'Title 1',
                content: 'Content 1'
            });
            expect(persistence.getAll()).to.have.length(1);
        });

    });

    describe('getAll()', function() {

        it('should return 0 if no todo has been added yet', function() {
            expect(persistence.getAll()).to.have.length(0);
        });

    });

    describe('delete(todo)', function() {

        it('should delete specified element', function() {
            expect(persistence.getAll()).to.have.length(0);
            var todo = {
                title: 'Example',
                content: 'Content'
            };
            persistence.create(todo);
            expect(persistence.getAll()).to.have.length(1);
            persistence.delete(todo);
            expect(persistence.getAll()).to.have.length(0);
        });

    });

});