$(document).ready(function(){
  let currentIndex = 0;
  const slides = $(".slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.removeClass("active").fadeOut(500);
    slides.eq(index).addClass("active").fadeIn(500);
  }

  $(".next").click(function(){
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  });

  $(".prev").click(function(){
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  });

  setInterval(function(){
    $(".next").click();
  }, 3000);
});
