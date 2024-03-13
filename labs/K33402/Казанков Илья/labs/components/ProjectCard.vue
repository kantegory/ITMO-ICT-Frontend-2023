<template>
  <div class="project-card" @click="goToProjectInfo(project.id)">
    <img :src="getImageUrl(project.group)" alt="Project Image" class="project-image">
    <div class="project-details">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <p>Group: {{ project.group }}</p>
      <button v-if="isAuthenticated" @click.stop="addToFavorites(project)" class="btn btn-primary">Добавить в избранное</button>
      <span v-else>Требуется авторизация для добавления в избранное</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isAuthenticated: false 
    };
  },
  methods: {
    getImageUrl(group) {
      switch (group) {
        case 'Unity':
          return require('@/assets/unity.png');
        case 'UE':
          return require('@/assets/UE.png');
        case 'SQL':
          return require('@/assets/sql.png');
        default:
          return require('@/assets/logo.png'); 
      }
    },
    goToProjectInfo(projectId) {
      this.$router.push({ name: 'ProjectInfo', params: { id: projectId } });
    },
    addToFavorites(project) {
      console.log('Добавлено в избранное:', project);
    }
  }
};
</script>

<style scoped>
.project-card {
  display: flex;
  align-items: center;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer; 
}

.project-image {
  width: 50%; 
  border-radius: 5px 0 0 5px; 
  margin-right: 10px; 
}

.project-details {
  width: 50%; 
}
</style>
