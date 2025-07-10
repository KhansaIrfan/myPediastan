$(document).ready(function () {
  const pediastan = "https://www.pediastan.com/";

  $.getJSON(pediastan + "articles/wp-json/wp/v2/posts" + "?_embed&_fields=id,title,link,slug,date,excerpt,_embedded,_links&per_page=20", function (data, status) {
    if (status === 'success') {

      $('#news-listing').empty();
      $('#top-listing').empty();
      let dateElement = document.querySelector("#date");
      let sectionDate = document.querySelector(".date");
      let today = new Date();
      let dateFormat1 = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };

      let dateFormat2 = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };


      let formattedDate1 = today.toLocaleDateString("en-US", dateFormat1);
      let formattedDate2 = today.toLocaleDateString("en-US", dateFormat2);

      if (dateElement && sectionDate) {
        dateElement.innerHTML = `${formattedDate1} &nbsp; - &nbsp;`;
        sectionDate.innerHTML = `<div class="date">
                          <div class="date-bg">
                          ${formattedDate2}
                          </div>
                        </div>`
      }


      let html = '';

      const topPosts = data.slice(0, 5); // first 5 posts

      // First post — big one
      const post0 = topPosts[0];
      const image0 = post0._embedded["wp:featuredmedia"] ?. [0] ?.source_url || '';
      html += `
          <div class="col-lg-6 col-md-12 pe-0 mt-0 pt-0">
            <a href="${post0.link}" title="${post0.title.rendered}">
              <div class="herosection-column-1" style="background-image: url('${image0}');">
                <div class="content">
                  <div class="above-category">
                    <span class="text-capitalize">cricket</span>
                  </div>
                  <div class="hero-section-title">
                    <h3>
                     <a href="${post0.link}" id="hero-section-link">${post0.title.rendered}</a>
                    </h3>
                  </div>
                  <div class="date"><div class="date-bg">${formattedDate2}</div></div>
                </div>
              </div>
            </a>
          </div>
        `;

      // Next 4 posts — small columns
      html += `<div class="col-lg-6 col-md-12 herosection-col-2 "><div class="row">`;

      for (let i = 1; i < topPosts.length; i++) {
        const post = topPosts[i];
        const img = post._embedded["wp:featuredmedia"] ?. [0] ?.source_url || '';
        html += `
            <div class="col-lg-6 col-md-6 col-6">
              <a href="${post.link}" title="${post.title.rendered}">
                <div class="herosection-col-2-row-1-col-1" style="background-image: url('${img}'); background-size: cover; background-position: center;">
                  <div class="col-2-content">
                    <div class="hero-section-right-title">
                      <h3><a href="${post.link}" id="hero-section-link">${post.title.rendered}</a></h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          `;
      }

      html += `</div></div>`;

      $('#article-container').html(html);



      //First 2 featured post

      const secondFeaturedPost = data.slice(5, 7); //2nd featured posts

      $('#featured-latest-news').empty();

      let featuredPost = "";
      for (let i = 0; i < secondFeaturedPost.length; i++) {
        const Post = secondFeaturedPost[i];
        const featuredImage = Post._embedded["wp:featuredmedia"] ?. [0] ?.source_url || '';
        featuredPost += ` 
             <div class="d-flex flex-column featured-column">
                  <div class="featured-img">
                    <a href="${Post.link}">
                      <img src="${featuredImage}" alt="" class="w-100">
                    </a>
                  </div>
  
                  <div class="featured-title">
                    <h3>
                      <a href="${Post.link}" title="${Post.title.rendered}">
                        ${Post.title.rendered}
                      </a>
                    </h3>
                  </div>
  
                  <div class="date mb-5">
                    <p>
                     ${formattedDate2}
                    </p>
                  </div>
  
                  <div class="excerpt">
                    <p>
                      ${Post.excerpt.rendered}
                    </p>
                  </div>
  
              </div>`


      }

      $('#featured-latest-news').html(featuredPost);





      let horizontalFeaturedPost = data.slice(7, 19); //3rd horizontal featured post

      $('#horizontal-featured-posts').empty();

      let horizontalFeaturedPosts = "";


      for (let i = 0; i < horizontalFeaturedPost.length; i++) {
        const post = horizontalFeaturedPost[i];
        const postFeaturedImage = post._embedded["wp:featuredmedia"] ?. [0] ?.source_url || '';
        horizontalFeaturedPosts += `
                          <div class="col-lg-6 col-12 mb-30">
                             <div class="d-flex horizontal-featured-news column-gap-3">
                               <div class="featured-image col-3">
                                <a href="${post.link}">
                                 <img src="${postFeaturedImage}" alt="" class="w-100 h-100 object-fit-cover">
                               </a>
                             </div>
  
                            <div class="featured-title">
                             <span>
                               <a href="${post.link}" title="${post.title.rendered}">
                                 ${post.title.rendered}
                               </a>
                             </span>
                             <div class="date">
                              <p>
                               ${formattedDate2}
                              </p>
                            </div>
                           </div>
                         </div>
                        </div>`
      }

      $('#horizontal-featured-posts').html(horizontalFeaturedPosts);


    };
  });




  //API FOR CURRENCY RATES

  $.getJSON(pediastan + "market-rates/api/latest-rates", function (data, status) {
    if (status === 'success') {

      $('.currency-rates').empty();

      let countryCurrency = data.data;

      let forex_rates = "";

      for (let key in countryCurrency.forex_rates) {
          forex_rates +=`
                     <tr>
                       <td class="text-start">${countryCurrency.forex_rates[key].currency}</td>
                       <td>Rs&nbsp;${countryCurrency.forex_rates[key].buying}</td>
                       <td>Rs&nbsp;${countryCurrency.forex_rates[key].selling}</td>
                     </tr>
                   `
                  
      }
      $('.currency-rates').html(forex_rates);
    }
  });


  //API FOR GOLD RATES
  $.getJSON(pediastan + "market-rates/api/latest-rates", function (data, status) {
  if (status === "success") {
    $(".gold-rate").empty();
    let goldRateApi = data.data;
    
    let goldRate = goldRateApi.bullion_rates;

    let goldHtml = "";
      
    goldRate.forEach(rate => {
      goldHtml+=`
              <li class="mb-2">
                <div class="d-flex justify-content-between">
                  <div class="d-flex">
                    <span class="material-symbols-outlined">
                      chevron_forward
                    </span>
                    <a href="https://pediastan.com/market-rates/gold-price">
                         Gold Rate/  ${rate.quantity}
                    </a>
                  </div>
                  <a class="" href="https://pediastan.com/market-rates/gold-price">
                    Rs.&nbsp; ${rate.price}
                  </a>
                </div>
              </li>`
              $(".gold-rate").html(goldHtml);

                                })
                                   }
                                     })

                                        });