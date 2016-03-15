'use strict';

var db = require('../persistence');

module.exports = function(app) {

    /**
     * Get all todos
     */
    app.get('/api/todos', function(request, response) {
        response.json(db.getAll());
    });

    /**
     * Create a new todo
     */
    app.post('/api/todos', function(request, response) {
        var todo = request.body;
        var resp = todo;
        resp.created = db.create(todo);
        response.json(resp);
    });

    app.delete('/api/todos/:id', function(request, response) {
        for (var i = 0; i < todos.length; i++) {
            var todo = todos[i];
            if (todo.id == request.params.id) {
                todos.splice(i, 1);
                response.json(todo)
            }
        }
        response.status(404);
        response.json({
            error: '404 - Item Not Found'
        });
    });

    app.get('*', function(request, response) {
        response.status(404);
        response.json({
            error: '404 - Page Not Found'
        });
    });

};