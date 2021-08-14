
(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
function manage(txt) {
  var bt = document.getElementById('submit');
  var ele = document.getElementsByTagName('input');

  // Loop through each element.
  for (i = 0; i < ele.length; i++) {

    // Check the element type
    if (ele[i].type == 'text' && ele[i].value == '') {
      bt.disabled = true;    // Disable the button.
      return false;
    }
    else {
      bt.disabled = false;   // Enable the button.
    }
  }
}