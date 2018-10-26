const proj_form = document.getElementById("add_proj_form");
const closeButton = document.getElementById("close_form_button");
const form = document.getElementsByClassName("whitening_bg")[0];
const buttonUp = document.getElementById("button_up");
const buttonDown = document.getElementById("button_down");
const body = document.getElementById("overflow");

function closeForm (event) {
  proj_form.classList.add("display_none");
  body.classList.remove("overflow");

}

function openForm (event) {
  proj_form.classList.remove("display_none");
  body.classList.add("overflow");
}

buttonUp.addEventListener('click', openForm);
buttonDown.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);



