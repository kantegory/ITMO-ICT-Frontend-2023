<script setup>
import useAuth from '@/composable/useAuth'

const { logout, OpenProfile } = useAuth()
const name = JSON.parse(localStorage.getItem("user")).id
// console.log(typeof name)
</script>
<template>
    <p class="dropdown-toggle nav-item ms-auto nav-links nav-text " href="#" role="button" id="ProfileDD"
    data-bs-toggle="dropdown" aria-expanded="false" style="display: block;
    font-size: 1.17em;
    margin-top: 1em;
    margin-bottom: 1em;
    font-weight: bold;
    padding-right: 100px;">
    {{ name }}
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="background-color: #4A4A4A;">
      <li><a @click="OpenProfile" class="dropdown-item nav-text" style="color:white">my profile</a></li>
      <li><a class="dropdown-item nav-text" @click="logout"><div style="color:white">logout</div></a></li>
    </ul>
  </p>
</template>
<style scoped>
    .dropdown-menu :hover{
        background-color: grey;
    }
</style>