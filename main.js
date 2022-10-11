// 내비게이션 버튼 토글
const navBtn = document.querySelector(".title .btn");

navBtn.addEventListener("click", function () {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("hidden");
  navBtn.classList.toggle("rotate");
});
