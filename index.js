$(function () {
  var scroll = new SmoothScroll('a[href*="#"]');
});

// Slider

$(document).ready(function () {
  var noOfProduct = $("#main ul li").length;
  var totalProductWidth = 0;
  for (var i = 0; i < noOfProduct; i++) {
    var productWidth = $("#main ul li").eq(i).outerWidth(true);
    totalProductWidth = totalProductWidth + productWidth;
  }

  $("#slider").css("width", totalProductWidth + "px");

  var speed = 1;
  animateProducts();

  function animateProducts() {
    $("#slider li")
      .eq(0)
      .animate(
        {
          marginLeft: "-=" + speed + "px",
        },
        1,
        function () {
          var animProductWidth = $(this).outerWidth(true);

          if (speed >= animProductWidth) {
            $(this).parent().append($(this));
            $(this).removeAttr("style");
          }

          aninInterval = setTimeout(function () {
            animateProducts();
          });
        }
      );
  }

  $("#slider").hover(
    function () {
      clearTimeout(aninInterval);
      $("#slider li").eq(0).stop();
    },
    function () {
      animateProducts();
    }
  );

  $(".notifyBtn").on("click", function () {
    $("#wait-list").css({ display: "block" });
  });
});

// Payment Count down

let count = new Date("december 26,2020 00:01:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let d = count - now;

  let days = Math.floor(d / (1000 * 60 * 60 * 24));
  // let days = Math.floor(d / (1000 * 60 * 60 * 24));
  // let hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // let minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
  // let seconds = Math.floor((d % (1000 * 60)) / 1000);

  document.getElementById("eventDays").innerHTML = days;

  // document.getElementById("days").innerHTML = days;
  // document.getElementById("hours").innerHTML = hours;
  // document.getElementById("minutes").innerHTML = minutes;
  // document.getElementById("seconds").innerHTML = seconds;

  if (d <= 0) {
    clearInterval(x);
  }
}, 1000);
