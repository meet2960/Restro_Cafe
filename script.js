// $(document). ready(function(){ alert("Welcome to Foxerestro!"); });
// Slider Script Starts Here
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Slider Script Ends Here

//On Scroll Button Visibile Script Starts
const showOnPx = 1000;
// console.log(showOnPx)
const backToTopButton = document.querySelector(".bottomup");
const scrollContainer = () => document.documentElement || document.body;
document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});
//On Scroll Button Visibile Script Ends

/*Navigation Class Toggle Script Starts Here */
function heroHeight() {
  let heroHeight = $(".backimg").outerHeight()-70;
  var header = $(".navigation");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= heroHeight) {
      header.removeClass("navigation").addClass("navigation-toggle");
    } else {
      header.removeClass("navigation-toggle").addClass("navigation");
    }
  });
}
heroHeight();
$(window).resize(function () {
  heroHeight();
});
/*Navigation Class Toggle Script Starts Here */
