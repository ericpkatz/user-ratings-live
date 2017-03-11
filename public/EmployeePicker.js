function EmployeePicker(containerId, employees, onSelect){
  var container = $(containerId);
  container.empty();
  var options = employees.map(function(employee){
    return `<option value=${employee.id}>${employee.name}</option>`;
  });
  var button = '';
  if(employees.length){
    button = `<button class='btn btn-primary'>Add Rating For Employee</button>`;
  }
  var html = $(`
    <form class='form'>
      <div class='form-group'>
        <select class='form-control'>
          ${options}
        </select>
      </div>
      ${button}
     </form>
     `);
  html.on('click', '.btn', function(ev){
    ev.preventDefault();
    var select = $('select', $(this).parents('form'));
    var employee = employees.filter(function(employee){
      return employee.id === select.val()*1;
    })[0];
    onSelect(employee);
  });
  container.append(html);
}
