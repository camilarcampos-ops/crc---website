function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

new Typewriter("#titleHero", {
  strings: "Hi there, I’m <br/ > Camila Rodrigues Campos",
  autoStart: true,
  cursor: null,
  delay: 50,
});

function initAnimation(id, animationClass) {
  const minWidthForAnimation = 768;

  if (window.innerWidth >= minWidthForAnimation) {
    const element = document.querySelector(id);

    if (element) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(animationClass);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px",
          threshold: 0.1,
        }
      );

      observer.observe(element);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initAnimation("#slideLeft", "slide-in-left");
  initAnimation("#slideRight", "slide-in-right");
});
