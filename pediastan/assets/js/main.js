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
let accessKey = "hsUnn4EcKnH88irrTEpnnz6cHrjJcDLEXxJW-99mHic";
const query = "Pakistan";

let slider = [];
let id = 0;

fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=5&client_id=${accessKey}`)
.then(res => res.json())
.then(data => {
  slider = data.results.map(img => img.urls.full);
  img.style.backgroundImage = `url(${slider[0]})`;
  setInterval(() => {
    id = (id + 1) % slider.length;
    img.style.backgroundImage = `url(${slider[id]})`;
  }, 9000);
})
.catch(err => console.error("Error fetching images:", err));



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

/* Current Date Code */

let dateElement = document.querySelector("#date");

let today = new Date();

let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

let formattedDate = today.toLocaleDateString("en-US", options);

dateElement.innerHTML = `${formattedDate} &nbsp; - &nbsp;`;


/* API code for images */



fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
            
