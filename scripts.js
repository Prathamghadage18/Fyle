// app.js

const search = document.getElementById("search");
const username = document.getElementById("username");
const repos = document.getElementById("repos");

search.addEventListener("click", () => {
  const user = username.value.trim();
  if (user) {
    fetchRepositories(user, repos);
  } else {
    alert("Please enter a GitHub username");
  }
});

const searchPagination = document.getElementById("search-pagination");
const usernamePagination = document.getElementById("username-pagination");
const reposPagination = document.getElementById("repos-pagination");
const pageSelect = document.getElementById("page-select");

searchPagination.addEventListener("click", () => {
  const user = usernamePagination.value.trim();
  const perPage = pageSelect.value;
  if (user) {
    fetchRepositoriesWithPagination(user, perPage, reposPagination);
  } else {
    alert("Please enter a GitHub username");
  }
});

function fetchRepositories(user, targetElement) {
  targetElement.innerHTML = "Loading..."; // Show loading indicator
  fetch(`https://api.github.com/users/${user}/repos`)
    .then((response) => response.json())
    .then((data) => {
      targetElement.innerHTML = ""; // Clear loading indicator
      data.forEach((repo) => {
        const card = document.createElement("div");
        card.classList.add("col-md-4");
        card.innerHTML = `
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">${repo.name}</h5>
							<p class="card-text">${repo.description || ""}</p>
							<a href="${repo.html_url}" class="btn btn-primary">View Repository</a>
						</div>
					</div>
				`;
        targetElement.appendChild(card);
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Error fetching repositories");
      targetElement.innerHTML = ""; // Clear loading indicator in case of an error
    });
}

function fetchRepositoriesWithPagination(user, perPage, targetElement) {
  targetElement.innerHTML = "Loading..."; // Show loading indicator
  fetch(`https://api.github.com/users/${user}/repos?per_page=${perPage}`)
    .then((response) => response.json())
    .then((data) => {
      targetElement.innerHTML = ""; // Clear loading indicator
      data.forEach((repo) => {
        const card = document.createElement("div");
        card.classList.add("col-md-4");
        card.innerHTML = `
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">${repo.name}</h5>
							<p class="card-text">${repo.description || ""}</p>
							<a href="${repo.html_url}" class="btn btn-primary">View Repository</a>
						</div>
					</div>
				`;
        targetElement.appendChild(card);
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Error fetching repositories");
      targetElement.innerHTML = ""; // Clear loading indicator in case of an error
    });
}
