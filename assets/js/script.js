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

document.addEventListener("DOMContentLoaded", function () {
    var links = sidenav.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            event.stopPropagation(); loin
            closeNav();
        });
    }
});

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
  fadeIns.forEach(fadeIn => {
    if(fadeIn.getBoundingClientRect().top < window.innerHeight / 1.3) {
      fadeIn.classList.add('active');
    }
  });
});
