// alert("working")

// navbar
var toggle = document.querySelector('#toggle')
var submenu = document.querySelector('.submenu')


toggle.addEventListener('click', function() {
    submenu.classList.toggle('active');
    // toggle.innerHTML = "X"
 });


 var year = new Date().getFullYear()
 document.querySelector("#year").innerHTML=year;

//  slides

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// products button

var productsBtn1 = document.querySelector('#product-option-button-1')
var productsBtn2 = document.querySelector('#product-option-button-2')
var productsBtn3 = document.querySelector('#product-option-button-3')

var wallMounted = document.querySelector('.wall-mounted')
var ceilingMounted = document.querySelector('.ceiling-mounted')
var portable = document.querySelector('.portable')

productsBtn1.addEventListener("click", () =>{
  wallMounted.style.zIndex="1"
  ceilingMounted.style.zIndex="0"
  portable.style.zIndex="0"
})

productsBtn2.addEventListener("click", () =>{
  wallMounted.style.zIndex="0"
  ceilingMounted.style.zIndex="1"
  portable.style.zIndex="0"
})

productsBtn3.addEventListener("click", () =>{
  wallMounted.style.zIndex="0"
  ceilingMounted.style.zIndex="0"
  portable.style.zIndex="1"
})