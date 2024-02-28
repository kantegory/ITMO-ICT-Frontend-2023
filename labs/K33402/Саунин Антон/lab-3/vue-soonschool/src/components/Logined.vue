<script setup>
import useAuth from '@/composable/useAuth'

const { logout, OpenProfile } = useAuth()
const name = JSON.parse(localStorage.getItem("user")).id
</script>
<template>
    <p class="dropdown-toggle nav-item ms-auto nav-links nav-text " href="#" role="button" id="ProfileDD"
    data-bs-toggle="dropdown" aria-expanded="false" style="display: block;
    font-size: xx-large;
    margin-top: 1em;
    margin-bottom: 1em;
    padding-right: 100px;">
    {{ name }}
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="background-color: #077015;height: 100px;width: 200px;">
      <li><a @click="OpenProfile" class="dropdown-item nav-text" style="color:#ffd700;align-self: center;">my profile</a></li>
      <li><a class="dropdown-item nav-text" @click="logout"><div style="color:#ffd700">logout</div></a></li>
    </ul>
  </p>
</template>
<style scoped>
    .dropdown-menu :hover{
        background-color: #288b56;
    }
</style>