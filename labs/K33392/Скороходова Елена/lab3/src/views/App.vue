<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html,
body {
  height: 100%;
}

body {
  background: var(--bg-color);
  min-width: 320px;
  font-family: "Montserrat", sans-serif;
  color: #2d2d2d;
}

h5 {
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 113.9%;
  letter-spacing: 0.75px;
  margin-bottom: 30px;
}
</style>
