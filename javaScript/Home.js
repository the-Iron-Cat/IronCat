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

// Events
let RedServesis = document.querySelector(".cta1");
RedServesis.addEventListener("click" ,  () => {
  window.location.href = "Services.html";
})





  const slider = document.getElementById("slider");


  slider.innerHTML += slider.innerHTML;

  let position = 0;

  function animate() {
    position -= 1; 
    if (Math.abs(position) >= slider.scrollWidth / 2) {
      position = 0;  
    }
    slider.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();