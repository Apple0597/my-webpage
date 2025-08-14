// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("clickMeBtn");

  button.addEventListener("click", function () {
    alert("Hello! You clicked the button.");
  });
});
