<script setup></script>

<template>
  <div class="container-fluid textabout">
    <div class="d-flex flex-row justify-content-evenly align-items-center">
      <div class="d-flex flex-column border-top">
        <h1 style="text-align: center; padding-top: 10px">About me</h1>
        <h2 style="text-align: center">I`m front-end developer from Saints-Petersburg</h2>
        <h3 style="line-height: 1.5; padding-top: 15px">
          I`m striving to create innovative and visually appealing user interfaces<br />
          with over two years of experience in frontend development.<br />
          I have a deep understanding of modern web technologies, standards and trends,<br />
          as well as experience in working in a team to achieve outstanding results
        </h3>
        <router-link
          to="/services"
          type="button"
          class="buybutton text-uppercase"
          href="services.html"
          style="padding-top: 33px"
        >
          <h3>View my services</h3>
        </router-link>
      </div>
      <img class="myphoto" src="/myphoto.jpg" />
    </div>
  </div>
</template>
<style scoped>
.textabout {
  min-height: 100vh;
  padding-top: 100px;
}
.myphoto {
  max-width: 900px;
  max-height: 700px;
}
.aboutmetext {
  padding-top: 150px;
}
.buybutton {
  display: block;
  background-color: #02011e;
  color: #8738f8;
  margin: auto;
  width: 66%;
  height: 100px;
  margin-top: 10%;
  font: inherit;
  font-size: xx-large;
  text-align: center;
  text-decoration: none;
}
</style>
