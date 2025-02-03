// document.addEventListener("DOMContentLoaded", function () {
//     let projectButtons = document.querySelectorAll(".projectButton");

//     projectButtons.forEach((button) => {
//         button.addEventListener("click", function () {
//             let projectId = button.id;
//             console.log("clicado", projectId);

//             let listRecent = JSON.parse(localStorage.getItem("listRecent")) || [];

//             let oneWeek = 7 * 24 * 60 * 60 * 1000;
//             let now = Date.now();

//             listRecent = listRecent.filter(item => now - item.timestamp < oneWeek);

//             if (!listRecent.some(item => item.id === projectId)) {
//                 listRecent.push({ id: projectId, timestamp: now });
//             }

//             localStorage.setItem("listRecent", JSON.stringify(listRecent));

//             fetch('/save-recent', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ projects: listRecent })
//             }).then(response => response.json())
//               .then(data => console.log("Resposta do servidor:", data));
//         });
//     });
// });
