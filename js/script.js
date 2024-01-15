//Basic routes
const global = {
  currentPage: window.location.pathname,
};

//Highlighting the active link
function highlightActiveLink() {
  const link = document.querySelectorAll(".nav-link");

  link.forEach((link) => {
    if (link.getAttribute("href") == global.currentPage) {
      link.setAttribute("class", "active");
    }
  });
}

function init() {
  //Routes
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("Home Page");
      break;
    case "/shows.html":
      console.log("Shows Page");
      break;
    case "/movie-details.html":
      console.log("Movie Details Page");
      break;
    case "/search.html":
      console.log("Search Page");
      break;
    case "/tv-details.html":
      console.log("TV Details");
      break;
  }

  highlightActiveLink();
}
document.addEventListener("DOMContentLoaded", init);
