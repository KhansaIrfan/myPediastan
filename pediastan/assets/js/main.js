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


/*code for image carousel*/
let img = document.querySelector(".herosection-column-1");

let slider = [{
    photoURL: "./assets/images/untitled-folder/1586d791-fa72-4df8-ba75-38e36acf1bf2.webp"
  },
  {
    photoURL: "./assets/images/untitled-folder/8be069a9-ff24-4f0a-a80a-177189573e9a.jpeg"
  },
  {
    photoURL: "./assets/images/untitled-folder/533a0f26-e32b-47b8-9023-4c6eef1012e0.jpeg"
  }
];

let id = 0;

function updateSlider() {
  const {
    photoURL
  } = slider[id];
  img.style.backgroundImage = `url(${photoURL})`;

  setTimeout(() => {
    id = (id + 1) % slider.length;
    console.log("I am auto update");
    updateSlider();

    img.style.transition = "all ease-in";
    img.style.backgroundSize = "cover";
  }, 9000);
}

updateSlider();



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
    console.log("Dark is active");
  } else {
    html.setAttribute("data-color-mode", "light");
    moonIcon.classList.add("d-none");
    sunIcon.classList.remove("d-none");
    darkLogos.forEach(logo => logo.classList.add("d-none"));
    lightLogos.forEach(logo => logo.classList.remove("d-none"));
    console.log("Light is active");
  }
});
