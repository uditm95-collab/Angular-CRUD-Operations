angular.module('employeeApp')
  .controller('EmployeeController', function($scope, EmployeeService) {

    $scope.employees = EmployeeService.getEmployees();
    $scope.newEmployee = {};
    $scope.editMode = false;

    $scope.addEmployee = function() {
      if($scope.newEmployee.name && $scope.newEmployee.email && $scope.newEmployee.role){
        EmployeeService.addEmployee($scope.newEmployee);
        $scope.newEmployee = {};
      }
    };

    $scope.editEmployee = function(employee) {
      $scope.editMode = true;
      $scope.editableEmployee = {...employee};
    };

    $scope.updateEmployee = function() {
      EmployeeService.updateEmployee($scope.editableEmployee);
      $scope.editMode = false;
      $scope.editableEmployee = {};
    };

    $scope.cancelEdit = function() {
      $scope.editMode = false;
      $scope.editableEmployee = {};
    };

    $scope.deleteEmployee = function(id) {
      EmployeeService.deleteEmployee(id);
    };
  });
