<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center">
        <v-card>
          <v-card-title>Задачи</v-card-title>
            <v-list v-if="tasksListAll.length === 0">
              <v-list-item>
                <v-list-item-content>Список задач пуст</v-list-item-content>
              </v-list-item>
            </v-list>
            <v-list v-else>
              <v-list-item
                v-for="task in tasksListAll"
                :key="task.id"
              >
                <router-link :to="'/tasks/all/' + task.id">
                  <v-card>
                    <v-list-item-title>{{ task.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ task.category }}</v-list-item-subtitle>
                  </v-card>
                </router-link>
              </v-list-item>
            </v-list>
        </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    name: "TaskList",
    components: {
    },
    data() {
      return {
        tasksListAll: [],
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
    },
    created() {
      if (!this.loggedIn) {
        this.$router.push("/login");
      }
      else {
        this.fetchTasks();
      }
    },
    methods: {
      fetchTasks() {
        this.loading = true;

        let user = 6

        this.$store.dispatch("task/fetchTasksAll").then(() => {
          this.tasksListAll = this.$store.state.task.tasksListAll
        }).catch(error => {
          this.loading = false;
          if (error.response && error.response.data && error.response.data.message) {
            this.errorMessages.push(error.response.data);
          } else {
            const errors = Object.values(error.response.data).flat();

            errors.forEach(errorMessage => {
              this.errorMessages.push(errorMessage);
            });
          }
        });
      },
    },
  };
</script>
