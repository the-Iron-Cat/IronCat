  let started = false;
  function startCounting() {
    const boxes = document.querySelectorAll('.Box');
    boxes.forEach(box => {
      const h3 = box.querySelector('h3');
      const span = h3.querySelector('span');
      const text = h3.childNodes[0].nodeValue.replace(/"/g, "").trim(); 
      const target = parseInt(text);
      let count = 0;
      const increment = target / 200;
      function updateCounter() {
        count += increment;
        if (count < target) {
          h3.childNodes[0].nodeValue = `"${Math.ceil(count)}" `;
          requestAnimationFrame(updateCounter);
        } else {
          h3.childNodes[0].nodeValue = `"${target}" `;
        }
      }
      updateCounter();
    });
  }
  window.addEventListener("scroll", () => {
    const section = document.querySelector(".completion-Continar");
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && !started) {
      started = true;
      startCounting();
    }
  });
const scrollBtn = document.querySelector(".topButton");

  window.onscroll = function () {
    // إذا نزل المستخدم 300 بكسل أو أكثر
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }