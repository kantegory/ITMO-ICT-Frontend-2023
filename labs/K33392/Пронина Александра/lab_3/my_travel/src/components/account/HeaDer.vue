<template>
  <header>
    <h5 class="logo">{{ username }}</h5>
    <nav class="navigation">
      <a href="#"><span></span></a>
      <a href="#">search<span></span></a>
      <a href="#">settings<span></span></a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaDer',
  props: {
    username: String, // передаётся имя пользователя
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
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
.logo {
  font-size: 1.75em;
  color: #fff;
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 75px;
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
</style>
