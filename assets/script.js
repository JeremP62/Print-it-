const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//Sélections
let currentIndex = 0;

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

//dots dynamique

slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("dot_selected");
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

//Fonction d'affichage

function showSlide(index) {
  const slide = slides[index];
  bannerImg.src = "./assets/images/slideshow/" + slide.image;
  bannerText.innerHTML = slide.tagLine;


dots.forEach((dot, i) => {
    dot.classList.remove("dot_selected");
    if (i === index) {
      dot.classList.add("dot_selected");
    }
  });
}

  // flèches

  document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// initial ===
showSlide(currentIndex);