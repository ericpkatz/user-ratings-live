function EmployeeLister(containerId, employees, onAddRatingFor, onRemoveRatingFor){
  var container = $(containerId);
  container.empty();
  var ul = $(`<ul class='list-group'></ul>`);
  var lis = employees.forEach(function(employee){
    ul.append(EmployeeView(employee, onAddRatingFor, onRemoveRatingFor));
  });
  container.append(ul);
}
