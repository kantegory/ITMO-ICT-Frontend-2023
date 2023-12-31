function adapt() {
  const contacts = document.getElementById("contacts");
  const logo = document.getElementById("logo");
  const photo = document.getElementById("myphoto");
  if (window.innerWidth > 1150) {
    contacts.classList.remove("d-none");
  } else {
    contacts.classList.add("d-none");
  }
  if (window.innerWidth > 950) {
    logo.classList.remove("d-none");
  } else {
    logo.classList.add("d-none");
  }
  if (window.innerWidth > 950) {
    photo.classList.remove("d-none");
  } else {
    photo.classList.add("d-none");
  }
}
