<template>
  <div>
    <b-card-group deck>
      <b-card v-for="project in projects" :key="project.id">
        <b-card-title>{{ project.title }}</b-card-title>
        <b-card-text>{{ project.description }}</b-card-text>
        <b-button @click="addToFavorites(project)" variant="primary">Добавить в избранное</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'ProjectList',
  props: {
    projects: Array,
  },

  setup() {
    const refDummy = ref(null);
    watch(refDummy, () => {});

    const addToFavorites = (project) => {
      console.log('Добавлено в избранное:', project);
    };

    return {
      addToFavorites,
    };
  },
};
</script>
