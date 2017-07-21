// Initialization of Angualr app
var todo = angular.module('todo', []);

// Head of department
todo.controller('mainController', function($scope) {
	$scope.todo =[
	{

	 title:'do my homework',
	 details:'i must do my homework',
     },
      {
     title:'do my assignment',
     details:'i must do my assignment today',
      },
      {
     title:'submit my projects',
     details:'i must submit my projects',
      },
      {
      title:'wake up early in morning',
      details:'i must wake up early in morning',
      },
      {
      title:'',
      details:'',	
      }
      ];

	$scope.addtodo= function(user) {
		$scope.todo.push(user);

	}

	$scope.deletetodo = function(title,details) {
		var index = $scope.todo.indexOf(title);
		$scope.todo.splice(index, 1);
	}

});