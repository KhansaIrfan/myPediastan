let toggleButton = document.querySelector('.mobile-menu-button');
let sidebar = document.querySelector('.sidebar-nav');
let rightSideBar = document.querySelector('.right-sidebar');

toggleButton.addEventListener('click', function () {
  sidebar.classList.toggle('active');
  rightSideBar.classList.toggle('active');
  document.body.style.overflow = 'hidden';
});

rightSideBar.addEventListener('click', function () {
  if (toggleButton) {
    sidebar.classList.remove('active');
    rightSideBar.classList.remove('active');
    document.body.style.overflow = '';
  }
})


/* Theme color setting*/

let themeButton = document.querySelector(".theme");
let sunIcon = document.querySelector(".fa-sun");
let moonIcon = document.querySelector(".fa-moon");
let darkLogos = document.querySelectorAll(".dark-logo");
let lightLogos = document.querySelectorAll(".light-logo");
let html = document.documentElement; // <html> element

let isDark = false;

// Initial Setup
html.setAttribute("data-color-mode", "light");
moonIcon.classList.add("d-none");
sunIcon.classList.remove("d-none");
darkLogos.forEach(logo => logo.classList.add("d-none"));
lightLogos.forEach(logo => logo.classList.remove("d-none"));
themeButton.addEventListener('click', () => {
  isDark = !isDark;

  if (isDark) {
    html.setAttribute("data-color-mode", "dark");
    sunIcon.classList.add("d-none");
    moonIcon.classList.remove("d-none");
    darkLogos.forEach(logo => logo.classList.remove("d-none"));
    lightLogos.forEach(logo => logo.classList.add("d-none"));
    
  } else {
    html.setAttribute("data-color-mode", "light");
    moonIcon.classList.add("d-none");
    sunIcon.classList.remove("d-none");
    darkLogos.forEach(logo => logo.classList.add("d-none"));
    lightLogos.forEach(logo => logo.classList.remove("d-none"));
    
  }
});



