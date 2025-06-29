  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = end; 
      }
    };
    window.requestAnimationFrame(step);
  }
  let triggered = false;
  window.addEventListener('scroll', () => {
    const section = document.querySelector('.completion-Continar');
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!triggered && sectionTop < windowHeight) {
      triggered = true;

      const counters = document.querySelectorAll('.Box h3');
      const values = [500, 3, 10, 54];              

      counters.forEach((counter, index) => {
        animateValue(counter, 0, values[index], 1000);
      });
    }
  });
  
  const slider = document.getElementById("slider");
  slider.innerHTML += slider.innerHTML;

  let position = 0;
  const speed = 1;
  const interval = 20;

  function autoScroll() {
    position -= speed;
    if (Math.abs(position) >= slider.scrollWidth / 2) {
      position = 0;
    }
    slider.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(autoScroll);
  }

  autoScroll();


  // UNI Card Slider 
const slider2 = document.getElementById("slider2");
slider2.innerHTML += slider2.innerHTML;

let position2 = 0;
const speed2 = 1;
let isPaused2 = false;

function autoScroll2() {
  if (!isPaused2) {
    position2 -= speed2;
    if (Math.abs(position2) >= slider2.scrollWidth / 2) {
      position2 = 0;
    }
    slider2.style.transform = `translateX(${position2}px)`;
  }
  requestAnimationFrame(autoScroll2);
}

slider2.addEventListener("mouseenter", () => {
  isPaused2 = true;
});

slider2.addEventListener("mouseleave", () => {
  isPaused2 = false;
});

autoScroll2();

  // Events
let RedServesis = document.querySelector(".cta1");
RedServesis.addEventListener("click" ,  () => {
  window.location.href = "Services.html";
});

let toUni = document.getElementById("ScStu");
toUni.addEventListener("click", () => {
      window.location.href = "UNI.html";
});

let ReadMoreStuding = document.querySelector(".cta2");
ReadMoreStuding.addEventListener("click", () => {
      window.location.href = "Studying.html";
});





  // navBar
const navbar = document.querySelector('.navbar-fade');
let isHidden = false;
let showTimeout;

window.addEventListener('scroll', () => {
  if (!isHidden) {
    isHidden = true;
    navbar.classList.add('navbar-hidden');

    clearTimeout(showTimeout); 
    showTimeout = setTimeout(() => {
      navbar.classList.remove('navbar-hidden');
    }, 3000);
  }
});
