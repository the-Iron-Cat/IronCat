const { href } = require("react-router-dom");

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




