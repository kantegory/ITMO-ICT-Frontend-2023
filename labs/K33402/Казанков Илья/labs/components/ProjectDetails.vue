<template>
  <div class="project-details">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <p>Group: {{ project.group }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProjectInfo',
  props: {
    project: { 
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
