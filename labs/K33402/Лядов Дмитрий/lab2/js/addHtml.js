const token = localStorage.getItem("accessToken")
function addProfile(){
    var user = localStorage.getItem("user")
    var name = JSON.parse(user).id
    return `
    <div class="d-flex align-items-center">
  <img src="img/logo.png" height="150px">

  <div class="nav-item">
    <a href="catalog.html" class="nav-links">catalog</a>
  </div>
  <div class="nav-item">
    <a href="sales.html" class="nav-links">sales</a>
  </div>
  <div class="nav-item">
    <a href="certificates.html" class="nav-links">certificates</a>
  </div>
  <div class="nav-item ms-auto">
    <button onclick="ModalCart.show()" class="nav-links" style="background-color: #4A4A4A;border: none;"><img src="img/cart1.png" height="75px"></button>
  </div>
  <p class="dropdown-toggle nav-item ms-auto nav-links nav-text " href="#" role="button"
    data-bs-toggle="dropdown" aria-expanded="false" style="display: block;
    font-size: 1.5em;
    margin-top: 1em;
    margin-bottom: 1em;
    font-weight: bold;
    padding-right: 100px;">
    ${name}
  </p>

  <ul class="dropdown-menu border-blue" aria-labelledby="dropdownMenuLink" style="background-color: white;color:">
    <li><a class="dropdown-item nav-text" href="profile.html">View profile</a></li>
    <li><a class="dropdown-item nav-text" href="#" onclick="logout()">Log out</a></li>
  </ul>

</div>
</div>
`
}

if (token === null||token === "undefined") {

    fetch('/templates/header.html')
        .then(res => res.text())
        .then(data => {
            header.innerHTML = data
        })

}
else {

    
    header.innerHTML = addProfile()
        



}
const footer = document.getElementById('footer')
fetch('/templates/footer.html')
    .then(res => res.text())
    .then(data => {
        footer.innerHTML = data
    })