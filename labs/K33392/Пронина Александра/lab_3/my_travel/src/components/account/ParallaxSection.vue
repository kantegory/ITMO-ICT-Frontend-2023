<template>
  <section class="parallax">
    <h4 id="text">Welcome back, {{ username }}!</h4>
    <img src="tree-left.png" id="tree-left">
    <img src="tree-right.png" id="tree-right">
    <img src="gate-left.png" id="gate-left">
    <img src="gate-right.png" id="gate-right">
    <img src="grass.png" id="grass" >
  </section>
</template>

<script>
export default {
  name:'ParallaxSection',
  props: {
    username: String, // имя пользователя
  },
};
</script>

<style scoped>
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


.account:hover .dropdown-menu {
  display: block;
}
</style>