const navSlide = () => {
  const barsButton = document.getElementById("menu-btn");
  const nav = document.getElementById("nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const closebutton = document.getElementById("nav-close");

  barsButton.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;

      link.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link) => {
          link.style.animation = "";
        });
      });
    });
  });

  closebutton.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link) => {
      link.style.animation = "";
    });
  });
};

const app = () => {
  navSlide();
};

app();
