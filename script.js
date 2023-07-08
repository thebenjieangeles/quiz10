document.getElementById("replay-btn").addEventListener("click", function () {
  resetAnimation();
});

function resetAnimation() {
  var elements = document.getElementById("banner").getElementsByTagName("*");

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.animation = "none";
    elements[i].offsetHeight;
    elements[i].style.animation = null;
  }
}
