let header = document.querySelector(".header");
let lastelem = null;

const token = localStorage.getItem("accessToken");

function addProfile() {
  var user = localStorage.getItem("user");
  var name = JSON.parse(user).id;
  return `
    <div class="d-flex align-items-center">
  <div class="nav-item">

    <img src="./img/logo.png" style="margin-left: 10px;"></img>

  </div>

  <div class="nav-item">
    <a href="about.html" class="nav-links">
      <h3 class="nav-text">ABOUT</h3>
    </a>
  </div>
  <div class="nav-item">
    <a href="portfolio.html" class="nav-links">
      <h3 class="nav-text">PORTFOLIO</h3>
    </a>
  </div>
  <div class="nav-item">
    <a href="services.html" class="nav-links">
      <h3 class="nav-text">SERVICES</h3>
    </a>
  </div>
  <div class="nav-item">
    <a href="#footer" class="nav-links">
      <h3 class="nav-text">CONTACTS</h3>
    </a>
  </div>

  <p class="dropdown-toggle nav-item ms-auto nav-links nav-text " href="#" role="button" id="ProfileDD"
    data-bs-toggle="dropdown" aria-expanded="false" style="display: block;
    font-size: 1.17em;
    margin-top: 1em;
    margin-bottom: 1em;
    font-weight: bold;
    padding-right: 100px;">
    ${name}
  </p>

  <ul class="dropdown-menu border-blue" aria-labelledby="dropdownMenuLink" style="background-color: #02011e;">
    <li><a class="dropdown-item nav-text" href="profile.html">View profile</a></li>
    <li><a class="dropdown-item nav-text" href="#" onclick="logout()">Log out</a></li>
  </ul>

</div>
`;
}

if (token === null || token === "undefined") {
  fetch("./templates/headerNoLogin.html")
    .then((res) => res.text())
    .then((data) => {
      header.innerHTML = data;
    });
} else {
  header.innerHTML = addProfile();
}

const footer = document.querySelector(".footer");
fetch("./templates/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });
