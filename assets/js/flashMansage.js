document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    let alerts = document.querySelectorAll(".fade-out");
    alerts.forEach(function (alert) {
      alert.style.transition = "opacity 0.5s ease";
      alert.style.opacity = "0";
      setTimeout(() => alert.remove(), 500);
    });
  }, 2000);
});
