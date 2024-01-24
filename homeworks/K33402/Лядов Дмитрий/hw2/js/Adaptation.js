function adaptation() {
  const certificates = document.getElementById("certificates");
  const logo = document.getElementById("logo");
  const footlogo = document.getElementById("foot-logo");
  const footimgs = document.getElementById("foot-imgs");
  const signin = document.getElementById("signin");
  //   const photo = document.getElementById("myphoto");
  if (window.innerWidth > 1150) {
    certificates.classList.remove("d-none");
  } else {
    certificates.classList.add("d-none");
  }
  if (window.innerWidth > 950) {
    logo.classList.remove("d-none");
    footimgs.classList.remove("d-none");
  } else {
    logo.classList.add("d-none");
    footimgs.classList.add("d-none");
  }
  if (window.innerWidth > 570) {
    signin.classList.remove("d-none");
    footlogo.classList.remove("d-none");
  } else {
    signin.classList.add("d-none");
    footlogo.classList.add("d-none");
  }
}
