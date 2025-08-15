angular.module('employeeApp')
  .service('EmployeeService', function() {
    let employees = [];
    let nextId = 1;

    this.getEmployees = function() {
      return employees;
    };

    this.addEmployee = function(emp) {
      emp.id = nextId++;
      employees.push({...emp});
    };

    this.updateEmployee = function(emp) {
      const index = employees.findIndex(e => e.id === emp.id);
      if(index !== -1) employees[index] = {...emp};
    };

    this.deleteEmployee = function(id) {
      employees = employees.filter(e => e.id !== id);
    };
  });
