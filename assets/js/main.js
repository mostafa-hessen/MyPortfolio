// "use strict"
/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 70;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", ".skillInfo", { interval: 200 });
sr.reveal(
  ".skills__data,home__social-icon, .skillInfoHeader,.work__img,.contact__input",
  { interval: 200 }
);
sr.reveal(".skillImageIcon,.porotflio__container", { interval: 150 });

/*=====work section shuffle =====*/

let li = Array.from(document.querySelectorAll("#work ul li"));
let portflioCard = Array.from(
  document.querySelectorAll("#work .porotflio__container")
);
function checkFunction() {
  portflioCard.forEach((ele) => {
    this.addEventListener("click", () => {
      li.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });

    if (ele.classList.contains(this.getAttribute("data-index"))) {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  });
}
li.forEach((ele) => ele.addEventListener("click", checkFunction));



/*=====My services 3d Effect=====*/

let card=Array.from(document.querySelectorAll('.box .card '))
let box=document.querySelector('.box')
let cardPra= Array.from(document.querySelectorAll('.box .card p'))
// console.log(cardContent);
card.forEach(ele=>{
    ele.addEventListener('mousemove',e=>{
        console.log(e.pageX/20);
        console.log(cardPra[1]);
        
        
        cardPra[1].style.transform=`translateZ(150px) `

        
        ele.style.transform=`rotateY(${-e.pageY/100}deg) rotateX(${e.pageX/20}deg)`
    })


    ele.addEventListener('mouseleave',e=>{
        console.log(e.pageX);
        ele.style.transform=`rotateY(${0}deg)`
        cardPra[1].style.transform=`translateZ(0px) `

        
    })
})


