toDoApp.controller('ToDoController', ['ToDoService', 'ToDoFactory', function(ToDoService, ToDoFactory) {
  var self = this;

  ToDoService.getAll().then(function(todos) {
    self.todos = todos;
  });

  self.addToDo = function(todoText) {
    self.todos.push(new ToDoFactory(todoText));
  };

  self.removeToDo = function() {
    self.todos.pop();
  };

  self.remaining = function() {
    var count = 0;
    angular.forEach(self.todos, function(todo) {
      count += todo.completed ? 0 : 1;
    });

    return count;

    };

}]);
