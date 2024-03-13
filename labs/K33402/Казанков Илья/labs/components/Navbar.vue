<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/profile">Profile</router-link>
    </nav>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  nav {
    margin-bottom: 20px;
    background-color: #ecf0f1;
    padding: 10px;
    text-align: center;
  }
  
  router-link {
    margin: 0 10px;
  }
  </style>
  