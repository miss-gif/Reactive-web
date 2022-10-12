// 내비게이션 접기 버튼, 토글 기능
const navBtn = document.querySelector(".title .btn");

navBtn.addEventListener("click", function (e) {
  const nav = document.querySelector(".nav");
  e.preventDefault();
  nav.classList.toggle("hidden");
  navBtn.classList.toggle("rotate");
});


// 스와이퍼 슬라이드

var swiper = new Swiper(".swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});