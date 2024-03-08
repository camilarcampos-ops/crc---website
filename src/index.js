function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

new Typewriter("#titleHero", {
  strings: ["Hi there, I’m <br/ > Camila Rodrigues Campos"],
  autoStart: true,
  cursor: null,
  delay: 50,
});
