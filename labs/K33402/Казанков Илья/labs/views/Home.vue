<template>
  <div>
    <Header />
    
    <b-container class="mt-4">
      <div class="filters row mb-3">
        <input v-model="searchQuery" @input="searchProjects" class="form-control mr-2" placeholder="Search">
        <button @click="resetFilters" class="btn btn-secondary" style="width: 100px;">Reset Filters</button>
        <button @click="filterByGroup('Unity')" class="btn btn-primary ml-auto mr-2" style="width: 100px;">Unity</button>
        <button @click="filterByGroup('UE')" class="btn btn-primary mr-2" style="width: 100px;">UE</button>
        <button @click="filterByGroup('SQL')" class="btn btn-primary mr-2" style="width: 100px;">SQL</button>
      </div>

      <b-row>
        <b-col md="4" v-for="project in filteredProjects" :key="project.id" class="mb-3">
          <ProjectCard :project="project" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import axios from 'axios';
import Header from '../components/Header.vue';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    ProjectCard,
  },
  setup() {
    const projects = ref([]); 
    const filteredProjects = ref([]);
    const searchQuery = ref('');

    const filterByGroup = (group) => {
      filteredProjects.value = projects.value.filter(project => project.group === group);
    };

    const searchProjects = () => {
      const query = searchQuery.value.toLowerCase();
      filteredProjects.value = projects.value.filter(project =>
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
      );
    };

    const resetFilters = () => {
      filteredProjects.value = projects.value;
      searchQuery.value = '';
    };

    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3001/projects');
        projects.value = response.data;
        filteredProjects.value = response.data;
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    watch(searchQuery, () => {
      searchProjects();
    });

    fetchProjects();

    return {
      projects,
      filteredProjects,
      searchQuery,
      filterByGroup,
      resetFilters,
    };
  },
};
</script>

<style scoped>
.filters {
  margin-bottom: 20px;
}

.project-card {
  width: calc(33.33% - 20px);
  margin-right: 20px;
  margin-bottom: 20px; 
}

.project-card:last-child {
  margin-right: 0;
}

</style>