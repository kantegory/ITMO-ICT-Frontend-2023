<script setup>
import { inject } from 'vue'
const IsLogined = inject('IsLogined')
var user = localStorage.getItem("user")
console.log(user)
const profileUsername = JSON.parse(user).id

const logout = () => {
  localStorage.clear()
  IsLogined.value = false
}
const OpenProfile = () =>{
  console.log('click')
  location.replace('/profile')
}
</script>
<template>
    <p class="dropdown-toggle nav-item ms-auto nav-links nav-text " href="#" role="button" id="ProfileDD"
    data-bs-toggle="dropdown" aria-expanded="false" style="display: block;
    font-size: 1.17em;
    margin-top: 1em;
    margin-bottom: 1em;
    font-weight: bold;
    padding-right: 100px;">
    {{ profileUsername }}
    <ul class="dropdown-menu border-blue" aria-labelledby="dropdownMenuLink" style="background-color: #02011e;">
      <li><a @click="OpenProfile" to="/profile" class="dropdown-item nav-text" >View profile</a></li>
      <li><a class="dropdown-item nav-text" @click="logout">Log out</a></li>
    </ul>
  </p>
</template>
<style scoped>
.nav-item {
  box-sizing: border-box;
  padding-right: 30px;
  padding-left: 30px;
  font-style: inherit;
}
.nav-links {
  text-decoration: none;
}

.nav-signin {
  box-sizing: border-box;
  margin: auto;
  padding-right: 30px;
  padding-left: 30px;
  font-style: inherit;
  padding-left: 550px;
}

.nav-text {
  color: #8738f8;
}
</style>