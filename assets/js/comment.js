document.addEventListener("DOMContentLoaded", function () {

  // {# para fazer o scroll automatico no modal direto pro final #}
  const commentsModal = document.getElementById("commentsModal");
  if (!commentsModal) {
    return;
  }

  commentsModal.addEventListener("shown.bs.modal", function () {
    let commentsContainer = document.getElementById("content-comments");
    if (!commentsContainer) {
      return;
    }
    commentsContainer.scrollTop = commentsContainer.scrollHeight;
  });
  document
    .getElementById("commentButton")
    .addEventListener("click", function () {
      let commentContent = document.getElementById("comment").value.trim(); // pegar e limpar

      if (commentContent === "") {
        alert("Le commentaire ne peut pas être vide !");
        return;
      }
      //route
      fetch("/comment/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // enviando um JSON :)
          "X-Requested-With": "XMLHttpRequest", // AJAX !!!!!!!
        },
        credentials: "include", // cookies de autenticação user
        body: JSON.stringify({ content: commentContent }),
      })
        // minha resposta, definida no meu controller
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur de requête : " + response.status);
          }
          return response.json(); // convertendo pra JSON
        })
        // tratamento/criaçao dos dados para apresentar aos users de maneira dinamica, espelho do code ja randerizado no twig
        .then((data) => {
          if (data.success) {
            let commentsContainer = document.getElementById("content-comments");
            commentsContainer.scrollTop = commentsContainer.scrollHeight;

            let newComment = document.createElement("div");
            newComment.classList.add(
              "m-2",
              "text-end",
              "d-flex",
              "flex-column"
            );

            let img = document.createElement("img");
            img.src = data.photoUrl;
            img.classList.add("img-fluid", "rounded-circle", "align-self-end");
            img.style.width = "60px";
            img.style.height = "60px";
            img.style.objectFit = "cover";

            let label = document.createElement("label");
            label.textContent = data.username;

            let commentBox = document.createElement("div");
            commentBox.classList.add(
              "bg-light",
              "border",
              "p-2",
              "rounded",
              "flex-row-reverse",
              "w-50",
              "align-self-end"
            );

            let commentText = document.createElement("p");
            commentText.classList.add("p-2", "text-end");
            commentText.textContent = data.content;

            let commentDate = document.createElement("span");
            commentDate.classList.add("fs-6", "text-muted");
            commentDate.textContent = data.date;

            // add no DOM e depois devolver o imput para o user vazio
            newComment.appendChild(img);
            newComment.appendChild(label);
            commentBox.appendChild(commentText);
            commentBox.appendChild(commentDate);
            commentsContainer.scrollTop = commentsContainer.scrollHeight;

            commentsContainer.appendChild(newComment);
            commentsContainer.appendChild(commentBox);
            document.getElementById("comment").value = "";
          } else {
            alert("Une erreur est survenue : " + data.message);
          }
        })
        .catch((error) => {
          alert("Erreur : " + error.message);
        });
    });
});
