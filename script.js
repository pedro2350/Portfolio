function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // Função para alternar o tema
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme");
}

// Event listener para o botão "Alternar Tema"

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", toggleTheme);


  