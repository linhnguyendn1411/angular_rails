'use strict'

angular.module('managerApp').controller('managerTodosController', managerTodosController)

managerTodosController.$inject = ['Flash', 'todoService'];

function managerTodosController(Flash, todoService) {

  var vm = this;

  vm.intData = function(todos){
    vm.todos = todos;
  };

  vm.createTodo = function(){
    console.log(vm.start_date)
    var params = {context: vm.context, place: vm.place, start_date: vm.start_date, end_date: vm.end_date};
    todoService.create(params)
      .then(function(resp){
        vm.todos.push(resp.data);
        Flash.create('success', 'thanh cong');
        vm.context = '';
        vm.place = '';
        vm.start_date = '';
        vm.end_date = '';
      })
      .catch(function(err){
        Flash.create('danger', err)
      })
  }
  vm.destroyTodo = function(todoId){
    console.log(todoId);
    var todoId = todoId;
    todoService.destroy(todoId)
      .then(function(response){
        var index = vm.todos.indexOf(response.data);
        vm.todos.splice(index, 1);
      })
  }
};
