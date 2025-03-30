let button = document.querySelectorAll("button");
button.forEach((button) => {
    button.addEventListener("click", function () {
		let emailFormButton = button.value; 
      	console.log(emailFormButton);
		let imputEmail = document.getElementById("task_email");
		imputEmail.value = emailFormButton

    });
  });