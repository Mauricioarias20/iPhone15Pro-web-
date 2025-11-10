const phone = document.querySelector(".phone");
const hero = document.querySelector(".hero-apple");
const heroTitle = hero.querySelector("h1");
const originalHeroSrc = phone.src;

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  phone.style.transform = `rotateX(${-y * 18}deg) rotateY(${x * 18}deg) scale(1.04)`;
  phone.style.animation = "none";
});

hero.addEventListener("mouseleave", () => {
  phone.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  phone.style.animation = "float 3.8s ease-in-out infinite";
});

const boton = document.querySelector(".boton");
boton.addEventListener("click", () => {
  document.querySelector("#detalles").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

const colores = document.querySelectorAll(".color");
const phoneImage = document.querySelector(".hero-apple .phone");

colores.forEach(c => {
  c.addEventListener("click", () => {
    colores.forEach(el => el.classList.remove("activo"));
    c.classList.add("activo");
    const imgSrc = c.getAttribute("data-img");

    phoneImage.style.transition = "transform 0.6s ease, opacity 0.9s ease";
    phoneImage.style.transform = "rotateY(200deg)";
    phoneImage.style.opacity = "0";

    setTimeout(() => {
      phoneImage.src = imgSrc;
      phoneImage.style.transform = "rotateY(0deg)";
      phoneImage.style.opacity = "1";
    }, 300);
  });
});

heroTitle.addEventListener("click", () => {
  colores.forEach(el => el.classList.remove("activo"));
  phoneImage.style.transition = "opacity 0.35s ease";
  phoneImage.style.opacity = "0";
  setTimeout(() => {
    phoneImage.src = originalHeroSrc;
    phoneImage.style.opacity = "1";
  }, 200);
});

const specsSection = document.querySelector(".specs");
const observerSpecs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) specsSection.classList.add("visible");
  });
}, { threshold: 0.2 });
observerSpecs.observe(specsSection);

(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

document.querySelectorAll('.spec-item, .modelo-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });
});

const revealElements = document.querySelectorAll('.reveal-advanced');

function handleScrollReveal() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollReveal);
window.addEventListener('load', handleScrollReveal);

const advancedSections = document.querySelectorAll('.reveal-advanced');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.25 });

advancedSections.forEach(section => revealObserver.observe(section));