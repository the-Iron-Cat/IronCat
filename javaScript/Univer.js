const universities = [
  {
    id: 1,
    country: "istanbul",
    name: "Altınbaş",
    link: "Read More",
    backgroundImage: "../Images/Images2/imgi_53_image.webp",
    logoImage: "../Images/Images2/imgi_54_image.webp"
  },
  {
    id: 2,
    country: "Ankara",
    name: "Ankara Medipol",
    link: "Read More",
    backgroundImage: "../Images/Images2/imgi_20_image.webp",
    logoImage: "../Images/Images2/imgi_21_image.webp"
  },
  {
    id: 3,
    country: "Ankara",
    name: "Atılım",
    link: "Read More",
    backgroundImage: "../Images/Images2/imgi_25_image.webp",
    logoImage: "../Images/Images2/imgi_26_image.png"
  },
  {
    id: 4,
    country: "istanbul",
    name: "Bahçeşehir",
    link: "Read More",
    backgroundImage: "../Images/Images2/imgi_27_image.webp",
    logoImage: "../Images/Images2/imgi_28_image.webp"
  },
  {
    id: 5,
    country: "Ankara",
    name: "Başkent",
    link: "Read More",
    backgroundImage: "../Images/Images2/imgi_33_image.webp",
    logoImage: "../Images/Images2/imgi_34_image.webp"
  },
  {
    id: 6,
    country: "istanbul",
    name: "Beykent",
    link: "Read More",
    backgroundImage: "../Images/Images2/imgi_29_image.webp",
    logoImage: "../Images/Images2/imgi_30_image.webp"
  },
  {
    id: 7,
    country: "istanbul",
    name: "Beykoz",
    link: "Read More",
    backgroundImage: "../Images/Images2/imgi_31_image.webp",
    logoImage: "../Images/Images2/imgi_32_image.webp"
  },
  {
    id: 8,
    country: "Gaziantep",
    name: "Hasan Kalyoncu",
    link: "Read More",
    backgroundImage: "../Images/Images2/imgi_47_image.webp",
    logoImage: "../Images/Images2/imgi_48_image.webp"
  },
  {
    id: 9,
    country: "İzmir",
    name: "Yaşar",
    link: "Read More",
    backgroundImage: "../Images/Images2/imgi_109_image.webp",
    logoImage: "../Images/Images2/imgi_110_image.webp"
  },
  {
    id: 10,
    country: "Bursa",
    name: "Mudanya",
    link: "Read more",
    backgroundImage: "../Images/Images2/imgi_71_image.webp",
    logoImage: "../Images/Images2/imgi_72_image.webp"
  },
  {
    id: 11,
    country: "Kocaeli",
    name: "Kocaeli Sağlık ve Teknoloji",
    link: "Read More",
    backgroundImage: "../Images/Images2/imgi_63_image.webp",
    logoImage: "../Images/Images2/imgi_64_image.webp"
  },
  {
    id: 12,
    country: "Mersin",
    name: "Toros",
    link: "Read More",
    backgroundImage: "../Images/Images2/imgi_103_image.webp",
    logoImage: "../Images/Images2/imgi_104_image.webp"
  }
];

const container = document.getElementById("cardsContainer"); // Parent
const filterButtons = document.querySelectorAll(".Flbtn");

function RenderCard(filter) {
  container.innerHTML = "";
  universities.forEach(e => {
      if(filter === "All" || e.country.toLowerCase() === filter.toLowerCase()) { 
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `  
             <img src="${e.backgroundImage}" class="background-image" alt="Background">
          <div class="image">
            <img src="${e.logoImage}" alt="Profile" />
          </div>
          <div class="card-info">
            <span>${e.name} University</span>
            <p>${e.country}</p>
            <a href="../HTML/Second_Pages/Studying.html" class="button">${e.link}</a>
          </div>
        `;
        container.appendChild(card); 
      }
  });
}

filterButtons.forEach(btn => {
    btn.addEventListener("click" ,() => {
     filterButtons.forEach(btn => btn.classList.remove("active"));
    btn.classList.add("active");
    const selectedFilter = btn.getAttribute("data-filter");
        RenderCard(selectedFilter);
   }
  )
}); 

RenderCard("All"); 