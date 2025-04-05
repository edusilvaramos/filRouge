document.addEventListener("DOMContentLoaded", function () {
  let button = document.querySelectorAll("button");
  if (button === null) {
    return;
  }
  button.forEach((button) => {
    button.addEventListener("click", function () {
      let emailFormButton = button.value;
	  if (emailFormButton == null) {
		  return
	  }
      let inputEmail = document.getElementById("task_email");
	  if (!inputEmail) {
        return;
      }
      inputEmail.value = emailFormButton;
    });
  });
});
