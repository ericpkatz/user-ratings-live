function EmployeeView(employee, onAddRatingFor, onRemoveRatingFor){
    var options = function(rating){
      return [1, 2, 3, 4, 5].map(function(_rating){
        if(_rating === rating)
          return `
            <option selected value='${_rating}'>${_rating}</option>
            `;
        return `
          <option value='${_rating}'>${_rating}</option>
          `;
      });
    };
    var listItem = $(`
      <li class='list-group-item'>
        ${employee.name }
        <div class='form-group'>
        <select class='form-control'>${options(employee.rating).join('')}</select>
        </div>
        <button class='btn btn-danger'>Remove</button>
      </li>
      `);
    $('select', listItem).on('change', function(){
      var rating = $(this).val();
      onAddRatingFor(employee, rating);
    });
    $('.btn-danger', listItem).on('click', function(){
      onRemoveRatingFor(employee);
    });
    return listItem;
}
