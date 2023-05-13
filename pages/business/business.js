var nn = document.querySelector(".myClass").innerHTML = " ©  " + new Date().getFullYear() + " Copyright";


// Responsive Navigation Bar
// Start:

const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

// End of Responsive nav bar


// Fetching Data from API and displaying on Screen
// Start
var dataFetching = fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e2e97461c7ca44e0bea49ee9e4e24ad4")
  .then((promise) => {
    return promise.json();
  }).then((promiseTwo) => {
    console.log(promiseTwo);
    for (var i = 0; i < promiseTwo.articles.length; i++) {
      var CardData = `<div class="max-w-sm rounded overflow-hidden shadow-lg m-auto mt-4 Image-hover lg:block card-main">
        <img
          class="w-full"
          src = "${promiseTwo.articles[i].urlToImage}"
          alt="${promiseTwo.articles[i].author}"
        />
        <div class="px-6 py-4">
          <div class="firstDiv font-bold text-xl mb-2">
          ${promiseTwo.articles[i].title}
          </div>
          <p class="text-gray-700 text-base">
          ${promiseTwo.articles[i].description}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        </div>
        <div class="knowMore text-end text-gray-700 my-4 w-full">
          <button
            class="bg-gray-200 py-2 px-4 mx-4 text-xs rounded-lg font-semibold"
          >
          <a href =${promiseTwo.articles[i].url} >
          Know More &rarr;
            </a>
          </button>
        </div>
      </div >`
      document.querySelector(".card-container").insertAdjacentHTML("beforeend", CardData);
    }
  });
  // End