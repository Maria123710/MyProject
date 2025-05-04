var typed = new Typed('.text', {
  strings: ["Full Stack Developer","Web Developer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true
});

const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
  let dots = parseInt(elem.getAttribute("data-dots"), 10);
  let marked = parseInt(elem.getAttribute("data-percent"), 10);
  let percent = Math.floor((dots * marked) / 100);
  let points = "";
  let rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate * i}deg"></div>`;
  }

  elem.innerHTML += points;

  const pointsMarked = elem.querySelectorAll('.points');
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add('marked');
  }
});


var mixer = mixitup('.portfolio-gallary');

let menuLi = document.querySelectorAll('header nav a');
let section = document.querySelectorAll('section');

function activeMenu(){

  let len = section.length;
  while(--len && window.scrollY +97 < section[len].offsetTop){}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add('active')
}

activeMenu();
window.addEventListener("scroll", activeMenu);

let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.onclick = () => {
  menuicon.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};