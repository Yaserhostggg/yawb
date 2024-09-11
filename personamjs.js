
function toggleLanguage() {
    var langButton = document.getElementById("langButton");
    var currentLang = document.documentElement.lang;

    var newLang = currentLang === "en" ? "ar" : "en";
    var newDir = newLang === "ar" ? "rtl" : "ltr";
    var buttonLabel = newLang === "ar" ? "English" : "العربية";

    document.documentElement.lang = newLang;
    langButton.textContent = buttonLabel;

    var elements = document.querySelectorAll("[data-lang-en]");
    elements.forEach(function(element) {
        var text = element.getAttribute("data-lang-" + newLang);
        element.textContent = text;
    });
}

function searchCards() {
    let searchQuery = document.getElementById('searchBar').value.toLowerCase();
    
    let cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        let title = card.querySelector('.project-title span') || card.querySelector('.project-title a');
        if (title && title.textContent.toLowerCase().includes(searchQuery)) {
            card.style.display = "block"; 
        } else {
            card.style.display = "none"; 
        }
    });
}

// عند النقر على الأيقونة، يتم إظهار القائمة وتمويه الخلفية
document.querySelector('.menu-icon').addEventListener('click', function() {
var menuContent = document.querySelector('.menu-content');
var blurBackground = document.querySelector('.blur-background');

if (menuContent.style.display === 'block') {
    menuContent.style.opacity = '0';
    menuContent.style.transform = 'translate(-50%, -50%) scale(0.95)';
    setTimeout(function() {
        menuContent.style.display = 'none';
        blurBackground.style.display = 'none';
    }, 500);
} else {
    blurBackground.style.display = 'block';
    menuContent.style.display = 'block';
    setTimeout(function() {
        menuContent.style.opacity = '1';
        menuContent.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
}
});

window.onclick = function(event) {
if (!event.target.matches('.menu-icon')) {
    var menuContent = document.querySelector('.menu-content');
    var blurBackground = document.querySelector('.blur-background');
    
    if (menuContent.style.display === 'block') {
        menuContent.style.opacity = '0';
        menuContent.style.transform = 'translate(-50%, -50%) scale(0.95)';
        setTimeout(function() {
            menuContent.style.display = 'none';
            blurBackground.style.display = 'none';
        }, 500);
    }
}
};
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slideshow");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // تغيير كل 4 ثوانٍ
}

  