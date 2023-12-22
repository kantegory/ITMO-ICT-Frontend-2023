<template>
  <div>
    <HeaDer :username="username" />
    <ParallaxSection :username="username" />
  </div>
</template>

<script>
import HeaDer from './account/HeaDer.vue';
import ParallaxSection from './account/ParallaxSection.vue';

export default {
  name:'AccoUnt',
  components: {
    HeaDer,
    ParallaxSection,
  },
  data() {
    return {
      username: this.data(),
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body {
  min-height: 100vh;
}
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  user-select: none;
}
h5 {
  color: #fff3cd; /* Зеленый цвет */
  text-shadow: 0px 0px 10px #ff7518, 0px 0px 20px #ff7518, 0px 0px 30px #ff7518;
  animation: fog 20s;
}

.navigation a {
  position: relative;
  font-size: 1.25em;
  color: #fff;
  font-weight: 500;
  margin-left: 75px;
  padding: 5px 25px;
  transition: .5s;
}
.navigation a:hover {
  color: #fff3cd;
  text-shadow: 0px 0px 10px #ff7518, 0px 0px 20px #ff7518, 0px 0px 30px #ff7518;
}
.navigation a span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff fixed;
  border-radius: 50px;
  z-index: -1;
  transform: scale(0);
  opacity: 0;
  transition: .5s;
}
.navigation a:hover span {
  transform: scale(1);
  opacity: 0.25;
}
.parallax img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}
.parallax img#gate-left {
  transform: translateX(-282px);
}
.parallax img#gate-right {
  transform: translateX(282px);
}
.navigation ul {
  display: flex;
  list-style: none;
}
.navigation ul li {
  margin-left: 40px;
}
.navigation ul li a {
  color: #fff;
  font-size: 12px;
  font-weight: 300;
  text-decoration: none;
}
.navigation ul li a:hover {
  color: #f1f1f1;
}

.account {
  position: fixed;
}
.account:hover .dropdown-menu {
  display: block;
}
.dropdown-menu a {
  display: block;
  padding: 10px;
  text-decoration: none;
}
.dropdown-menu a:hover {
}
</style>