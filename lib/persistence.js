'use strict';

var todos = [];

module.exports = {

    /**
     * Creates a new object unless it already exists.
     * The primary key is the title.
     *
     * @param todo the todo object
     */
    create: function (todo) {
        if (this.getByTitle(todo.title) === null) {
            todos.push(todo);
            return true;
        }
        return false;
    },

    /**
     * Gets a todo from the list by title.
     *
     * @param title the todo's title
     * @returns the todo or null
     */
    getByTitle: function (title) {
        for (var i = 0; i < todos.length; i++) {
            var todo = todos[i];
            if (todo.title === title) {
                return todo;
            }
        }
        return null;
    },

    /**
     * Gets a list of unique todos.
     *
     * @returns {Array}
     */
    getAll: function () {
        return todos;
    },

    /**
     * Updates an existing todo in the list.
     *
     * @param todo the todo object
     */
    update: function (todo) {
        var toUpdate = this.getByTitle(todo.title);
        if (toUpdate !== null) {
            toUpdate.content = todo.content;
            return true;
        }
        return false;
    },

    /**
     * Deletes an existing todo in the list
     * @param todo
     */
    delete: function (todo) {
        for (var i = 0; i < todos.length; i++) {
            var toDelete = todos[i];
            if (toDelete.title == todo.title) {
                todos.splice(i, 1);
                return true;
            }
        }
        return false;
    },

    /**
     * Clears the list.
     */
    clear: function () {
        todos = [];
    }
};