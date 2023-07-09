document.addEventListener("DOMContentLoaded", function () {
  var femaleImage = document.getElementById("femaleImage");
  var headline1 = document.getElementById("headline1");
  var headline2 = document.getElementById("headline2");
  var subheadline = document.getElementById("subheadline");
  var LearnMorebtn = document.getElementById("LearnMorebtn");
  var logo = document.getElementById("logo");
  var replay = document.getElementById("replay");

  femaleImage.style.display = "block"; // Show the female image (fade-in animation)
  headline1.style.display = "block"; // Show the first headline (hidden)

  setTimeout(function () {
    headline1.style.animationName = "slide-in"; // Slide in the first headline from the left

    setTimeout(function () {
      femaleImage.style.animationName = "fade-out"; // Fade out the female image

      setTimeout(function () {
        headline1.style.animationName = "slide-to-top-right"; // Slide out the first headline to the right
        headline2.style.animationName = "slide-to-left";

        setTimeout(function () {
          headline1.style.display = "none"; // Hide the first headline
          subheadline.style.display = "block"; // Show the second headline (hidden)
          headline2.style.display = "block"; // Show the second headline (hidden)

          setTimeout(function () {
            LearnMorebtn.style.display = "block"; // Show the Learn More button (hidden)

            setTimeout(function () {
              logo.style.display = "block"; // Show the logo (hidden)

              setTimeout(function () {
                replay.style.display = "block"; // Show the logo (hidden)
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000); // Wait for fade-out and slide-out animations to complete before hiding the first headline
      }, 1000); // Wait for the slide-in animation to complete before fading out the female image and sliding out the first headline
    }, 1000); // Wait for the slide-in animation to complete before fading out the female image and sliding out the first headline
  }, 1000); // Wait for 2 seconds after page load before starting the animations
});
