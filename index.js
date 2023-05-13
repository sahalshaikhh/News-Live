var nn = document.querySelector(".myClass").innerHTML = " ©  " + new Date().getFullYear() + " Copyright";
console.log(nn);


const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
});

var dataFetching_homePage = fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=e2e97461c7ca44e0bea49ee9e4e24ad4")
    .then((promise) => {
        return promise.json();
    }).then((secondP) => {
        for (var i = 0; i <= secondP.articles.length; i++) {
            var CardBody = `<div class="max-w-sm rounded overflow-hidden shadow-lg m-auto mt-4 Image-hover lg:block card-main">
            <img
              class="w-full"
              src = "${secondP.articles[i].urlToImage}"
              alt="${secondP.articles[i].author}"
            />
            <div class="px-6 py-4">
              <div class="firstDiv font-bold text-xl mb-2">
              ${secondP.articles[i].title}
              </div>
              <p class="text-gray-700 text-base">
              ${secondP.articles[i].description}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            </div>
            <div class="knowMore text-end text-gray-700 my-4 w-full">
              <button
                class="bg-gray-200 py-2 px-4 mx-4 text-xs rounded-lg font-semibold"
              >
              <a href =${secondP.articles[i].url}  >
              Know More &rarr;
                </a>
              </button>
            </div>
          </div >`
            document.querySelector(".card-container-home_page").insertAdjacentHTML("beforeend", CardBody);
        }
    });