<script setup>
async function fetchAbout() {
  const response = await fetch("http://localhost:3000/about");
  if (!response.ok) {
    const msg = `An error has occurred: ${response.status}, ${response.statusText}`;
    throw new Error(msg);
  }
  const responseJson = await response.json();

  const aboutTitle = document.getElementById("aboutTitle");
  const aboutDesc = document.getElementById("aboutDesc");
  aboutTitle.textContent = responseJson.title;
  aboutDesc.textContent = responseJson.desc;
}

fetchAbout();
</script>

<template>
  <div class="card col-12 col-xl-5 col-md-6 my-5 mx-auto m-lg-0 text-start">
    <h5 class="card-header">About us</h5>
    <div class="card-body">
      <h5 id="aboutTitle" class="card-title"></h5>
      <p id="aboutDesc" class="card-text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
}
</script>