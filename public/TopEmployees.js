function TopEmployees(containerId, employees){
  var container = $(containerId);
  if(employees.length){
    var employeeNames = employees.map(function(employee){
      return employee.name;
    });
    container.html(`
        <div class='well'>
          Top Employees: ${employeeNames.join(', ')}
        </div>
     `);
  }
  else {
    container.empty();
  }
};
