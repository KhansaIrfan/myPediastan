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
let news = document.querySelector(".hero-section");
const apiKey = "200edffdfb4c4b91a6d36bd7d427ea3d";
let imgAccessKey = "hsUnn4EcKnH88irrTEpnnz6cHrjJcDLEXxJW-99mHic";
let newsTitle = document.querySelectorAll("#hero-section-link");
let img1 = document.querySelector(".herosection-column-1");
let img2 = document.querySelector(".herosection-col-2-row-1-col-1");
let query2 = "Lahore";
let query = "Karachi";

async function fetchNews() {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    const data = await response.json();

    if (data.articles && data.articles.length > 0) {
      let newsHTML = "";

      data.articles.slice(0, 1).forEach(article => {
        newsHTML += `
          <div class="col-lg-6 col-6 col-md-12 col-12">
            <a href="${article.url}" title="${article.title}" target="_blank">
              <div class="herosection-column-1">
                <div class="content">
                  <div class="above-category">
                    <a href="" class="text-capitalize" id="hero-section-link" target="_blank">
                      <span>
                        cricket
                      </span>
                    </a>
                  </div>
                  <div class="hero-section-title">
                    <h3>
                      <a href="${article.url}" title="${article.title}" target="_blank" id="hero-section-link">
                        ${article.title}
                      </a>
                    </h3>
                  </div>
                  <div class="date">
                    <div class="date-bg">
                      June 26, 2025
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-6 col-md-12 col-12 herosection-col-2">
            <div class="d-flex flex-wrap gx-0 row-gap-1">
              <div class="d-flex column-gap-1">
                <div class="herosection-col-2-row-1-col-1">
                  <div class="col-2-content">
                    <div class="hero-section-right-title">
                      <h3>
                        <a href="${article.url}" title="${article.title}" id="hero-section-link">
                        ${article.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="herosection-col-2-row-1-col-1">
                  <div class="col-2-content">
                    <div class="hero-section-right-title">
                      <h3>
                        <a href="${article.url}" title="${article.title}" id="hero-section-link">
                        ${article.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex column-gap-1">
                <div class="herosection-col-2-row-1-col-1">
                  <div class="col-2-content">
                    <div class="hero-section-right-title">
                      <h3>
                        <a href="${article.url}" title="${article.title}"  id="hero-section-link">
                        ${article.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
    
                <div class="herosection-col-2-row-1-col-1">
                  <div class="col-2-content">
                    <div class="hero-section-right-title">
                      <h3>
                        <a href="${article.url}" title="${article.title}" id="hero-section-link">
                        ${article.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        `;
      });


      news.innerHTML = newsHTML;
      fetchImages();
    } else {
      news.innerHTML = "<p>No news found.</p>";
    }


  } catch (error) {
    console.error("Error fetching news:", error);
    news.innerHTML = "<p>Failed to load news.</p>";
  }
}





function fetchImages() {
  let img1 = document.querySelector(".herosection-column-1");
  let img2 = document.querySelectorAll(".herosection-col-2-row-1-col-1");
  let img3 = document.querySelector(".herosection-col-2-row-1-col-2");
  let img4 = document.querySelector(".herosection-col-2-row-2-col-1");
  let img5 = document.querySelector(".herosection-col-2-row-2-col-2");
  let query1 = "Karachi";
  let query2 = "Islamabad"
  let query3 = "Lahore"
  let query4 = "Faisalabad"
  let query5 = "Rahimyarkhan"

  fetch(`https://api.unsplash.com/search/photos?query=${query1}&per_page=5&client_id=${imgAccessKey}`)
    .then(res => res.json())
    .then(data => {
      let lahoreSlider = data.results.map(img => img.urls.full);
      if (img1) {
        img1.style.backgroundImage = `url(${lahoreSlider[0]})`;
        let lahoreIndex = 0;
        setInterval(() => {
          lahoreIndex = (lahoreIndex + 1) % lahoreSlider.length;
          img1.style.backgroundImage = `url(${lahoreSlider[lahoreIndex]})`;
        }, 7000);
      }
    })
    .catch(err => console.error("Error fetching Lahore images:", err));

  fetch(`https://api.unsplash.com/search/photos?query=${query2}&per_page=5&client_id=${imgAccessKey}`)

    .then(res => res.json())
    .then(data => {
      let karachiSlider = data.results.map(img => img.urls.full);
      for (let key in img2) {
        if (img2[key]) {
          let karachiIndex = 0;
          img2[key].style.backgroundImage = `url(${karachiSlider[karachiIndex]})`;
          img2[key].style.backgroundSize = "cover";
          img2[key].style.display = "flex";
          img2[key].style.alignItems = "flex-end";
          img2[key].style.backgroundPosition = "bottom";
          img2[key].style.height = "228px";
          img2[key].style.overFlow = "hidden";

          setInterval(() => {
            karachiIndex = (karachiIndex + 1) % karachiSlider.length;
            img2[key].style.backgroundImage = `url(${karachiSlider[karachiIndex]})`;
          }, 7000);
        }

      }
    })
    .catch(err => console.error("Error", err));


  fetch(`https://api.unsplash.com/search/photos?query=${query3}&per_page=5&client_id=${imgAccessKey}`)
    .then(res => res.json())
    .then(data => {
      let islamabadSlider = data.results.map(img => img.urls.full);
      if (img3) {
        let islamabadIndex = 0;
        img3.style.backgroundImage = `url(${islamabadSlider[islamabadIndex]})`;

        setInterval(() => {
          islamabadIndex = (islamabadIndex + 1) % islamabadSlider.length;
          img3.style.backgroundImage = `url(${islamabadSlider[islamabadIndex]})`;
        }, 7000);
      }
    })
    .catch(err => console.error("Error", err));



  fetch(`https://api.unsplash.com/search/photos?query=${query4}&per_page=5&client_id=${imgAccessKey}`)
    .then(res => res.json())
    .then(data => {
      let faisalAbadSlider = data.results.map(img => img.urls.full);
      if (img4) {
        let faisalAbadIndex = 0;
        img4.style.backgroundImage = `url(${faisalAbadSlider[faisalAbadIndex]})`;

        setInterval(() => {
          faisalAbadIndex = (faisalAbadIndex + 1) % faisalAbadSlider.length;
          img4.style.backgroundImage = `url(${faisalAbadSlider[faisalAbadIndex]})`;
        }, 7000);
      }
    })
    .catch(err => console.error("Error", err));

  fetch(`https://api.unsplash.com/search/photos?query=${query5}&per_page=5&client_id=${imgAccessKey}`)
    .then(res => res.json())
    .then(data => {
      let islamabadSlider = data.results.map(img => img.urls.full);
      if (img5) {
        let islamabadIndex = 0;
        img5.style.backgroundImage = `url(${islamabadSlider[islamabadIndex]})`;

        setInterval(() => {
          islamabadIndex = (islamabadIndex + 1) % islamabadSlider.length;
          img5.style.backgroundImage = `url(${islamabadSlider[islamabadIndex]})`;
        }, 7000);
      }
    })
    .catch(err => console.error("Error", err));

}

fetchNews();




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



