document.addEventListener("DOMContentLoaded", function () {
  let title = document.getElementById("task_title");

  if (!title) {
    console.error("Element #task_title not found");
    return;
  }

  let tasks = JSON.parse(sessionStorage.getItem("TaksTitles") || "[]");

  console.log("Titles:", tasks);

  title.addEventListener("change", function () {
    console.log("new title:", title.value);

    if (tasks.includes(title.value)) {
      console.warn("Le titre '" + title.value + "' a déjà été utilisé !");
    }
  });
});
