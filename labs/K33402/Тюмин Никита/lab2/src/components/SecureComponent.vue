<template>
  <header-component
    class="header"
  />
  <router-view
    class="content"
  />
  <footer-component
    class="footer"
  />
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style>
.header {
  background-color : #352F44;
  position: absolute;
  width: 100%;
  height: 60px;
}
.footer {
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color : #2a2536;
}
.content {
  margin-bottom: 60px;
  margin-top: 100px;
}
body::-webkit-scrollbar {
  width: 8px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #352F44;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #B9B4C7;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px transparent;  /* creates padding around scroll thumb */
}
</style>