var state = {
  employees: [
    {
      name: 'Moe',
      id: 1
    },
    {
      name: 'Larry',
      id: 2
    },
    {
      name: 'Curly',
      id: 3,
      rating: 5
    }
  ]
};

var stateChangers = {
  addRatingFor: function(employee, rating){
    employee.rating = !rating ? 2: rating*1;
    renderEmployeePicker();
    renderEmployeeLister();
    renderTopEmployees();
  },
  removeRatingFor: function(employee){
    delete employee.rating;
    renderEmployeePicker();
    renderEmployeeLister();
    renderTopEmployees();
  }
};

var renderEmployeePicker = function(){
  EmployeePicker('#employeePicker', state.employees.filter(function(employee){ 
    return !employee.rating;
  }), stateChangers.addRatingFor);
};

var renderEmployeeLister = function(){
  EmployeeLister('#employeeLister', state.employees.filter(function(employee){ 
    return employee.rating;
  }), stateChangers.addRatingFor, stateChangers.removeRatingFor);
}

var renderTopEmployees = function(){
  TopEmployees('#topEmployees', state.employees.filter(function(employee){ 
    return employee.rating === 5;
  }));
}

function init(){
  renderEmployeePicker();
  renderEmployeeLister();
  renderTopEmployees();
}
init();
