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

  




 const slider2 = document.getElementById('slider2');

  slider2.innerHTML += slider2.innerHTML;

  let position2 = 0;
  let speed2 = 0.5; 

  let animationId;

  function step() {
    position2 -= speed2;

    const maxScroll = slider2.scrollWidth / 2;

    if (Math.abs(position) >= maxScroll) {
      position2 = 0;
    }

    slider2.style.transform = `translateX(${position2}px)`;

    animationId = requestAnimationFrame(step);
  }

  step();

  slider2.addEventListener('mouseenter', () => {
    cancelAnimationFrame(animationId);
  });

  // استئناف الحركة عند خروج الماوس
  slider2.addEventListener('mouseleave', () => {
    step();
  });



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



 const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahrain", "Bangladesh", "Belarus", "Belgium", "Belize",
    "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cambodia", "Cameroon", "Canada", "Chad", "Chile",
    "China", "Colombia", "Comoros", "Costa Rica", "Croatia",
    "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
    "Dominican Republic", "DR Congo", "Ecuador", "Egypt", "El Salvador",
    "Estonia", "Ethiopia", "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Guatemala", "Guinea", "Haiti", "Honduras",
    "Hungary", "Iceland", "India", "Indonesia", "Iran",
    "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar",
    "Malaysia", "Maldives", "Mali", "Malta", "Mauritania",
    "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palestine", "Panama", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia",
    "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Singapore",
    "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea",
    "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland",
    "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
    "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine",
    "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  const selectElement = document.getElementById("countrySelect");

  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    selectElement.appendChild(option);
  });