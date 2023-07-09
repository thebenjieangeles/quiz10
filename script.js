document.addEventListener("DOMContentLoaded", function () {
  var femaleImage = document.getElementById("femaleImage");
  var headline1 = document.getElementById("headline1");
  var headline2 = document.getElementById("headline2");
  var subheadline = document.getElementById("subheadline");
  var LearnMorebtn = document.getElementById("LearnMorebtn");
  var logo = document.getElementById("logo");
  var replay = document.getElementById("replay");

  femaleImage.style.display = "block";
  headline1.style.display = "block";

  setTimeout(function () {
    headline1.style.animationName = "slide-in";

    setTimeout(function () {
      femaleImage.style.animationName = "fade-out";

      setTimeout(function () {
        headline1.style.animationName = "slide-to-top-right";
        headline2.style.animationName = "slide-to-left";

        setTimeout(function () {
          headline1.style.display = "none";
          subheadline.style.display = "block";
          headline2.style.display = "block";

          setTimeout(function () {
            LearnMorebtn.style.display = "block";

            setTimeout(function () {
              logo.style.display = "block";

              setTimeout(function () {
                replay.style.display = "block";
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
