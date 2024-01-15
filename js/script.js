//Basic routes
const global = {
  currentPage: window.location.pathname,
};

//Fetch API Data from the TMDB
async function getData(endpoint) {
  const API_KEY = "1ee4dbd88245c6ef9cc61c2d1042c921";
  const API_URL = "https://api.themoviedb.org/3/";

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();

  return data;
}
//Get Popular movies API

async function getPopularMovies() {
  const { results } = await getData("movie/popular");

  results.forEach((movie) => {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.innerHTML = `
    <a href="movie-details.html?id=${movie.id}">
    ${
      movie.poster_path
        ? `<img
      src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
      class="card-img-top"
      alt="${movie.title}"
    />`
        : `<img
      src="images/no-image.jpg"
      class="card-img-top"
      alt="${movie.title}"
    />`
    }
  </a>
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">
      <small class="text-muted">Release: ${movie.release_date}</small>
    </p>
  </div>
  `;

    document.querySelector("#popular-movies").appendChild(div);
  });
}

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
      getPopularMovies();
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
