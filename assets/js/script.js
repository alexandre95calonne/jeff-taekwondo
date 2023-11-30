var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    openNav();
});

closeBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    closeNav();
});

function openNav() {
    sidenav.classList.add("active");
}

function closeNav() {
    sidenav.classList.remove("active");
}

document.addEventListener('click', function(event) {
    var isActive = sidenav.classList.contains("active");

    if (isActive) {
        closeNav();
    }
});

function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('thanks-modal').style.display = 'block';
            form.reset();
        } else {
            alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
        }
    }).catch(error => {
        console.error('Error:', error);
        alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
    });

    return false;
}

function closeModal() {
    document.getElementById('thanks-modal').style.display = 'none';
}

var slides = document.querySelectorAll('.carousel__slide');
var currentSlide = 0;

setInterval(function() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].classList.add('active');
}, 5000);

const fadeIns = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  const isSmallScreen = window.matchMedia("(max-width: 650px)").matches;

  fadeIns.forEach(fadeIn => {
    // Ne pas appliquer l'animation si l'écran est petit et c'est la section à désactiver
    if(isSmallScreen && fadeIn.classList.contains('disable-section')) {
      return;
    }

    if(fadeIn.getBoundingClientRect().top < window.innerHeight / 1.3) {
      fadeIn.classList.add('active');
    }
  });
});


