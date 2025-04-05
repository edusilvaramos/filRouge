document.addEventListener("DOMContentLoaded", function () {

let button = document.querySelectorAll("button");
if (button === null) {
	return;
}
button.forEach((button) => {
    button.addEventListener("click", function () {
		let emailFormButton = button.value; 
      	console.log(emailFormButton);
		let imputEmail = document.getElementById("task_email");
		imputEmail.value = emailFormButton

    });
  });
});