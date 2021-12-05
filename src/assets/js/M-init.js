
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {

  });
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {

  });
});



function InitSelects() {
  alert("hola");
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {
  });
}

function InitSelects(selectId) {
    var elems = document.querySelectorAll('#'+ selectId);
    var instances = M.FormSelect.init(elems, {});
}