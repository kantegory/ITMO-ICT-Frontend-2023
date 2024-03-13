<template>
    <div>
      <p>Привет, {{ username }}!</p>
      <h3>Избранные проекты:</h3>
      <ul>
        <li v-for="project in favoriteProjects" :key="project.id">
          {{ project.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileCom',
    props: {
      username: {
        type: String,
        required: true,
      },
      favoriteProjects: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style>
   </style>
  