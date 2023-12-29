<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center">
        <v-card>
          <v-card-title>Задачи</v-card-title>
            <v-card-title>В прогрессе</v-card-title>
            <v-list v-if="inProgressTasks.length === 0">
              <v-list-item>
                <v-list-item-content>Список задач пуст</v-list-item-content>
              </v-list-item>
            </v-list>
            <v-list v-else>
              <v-list-item
                v-for="task in inProgressTasks"
                :key="task.id"
              >
                <router-link :to="'/tasks/' + task.id">
                  <v-card>
                    <v-list-item-title>{{ task.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ task.category }}</v-list-item-subtitle>
                    <!-- Остальные поля задачи, которые вы хотите отобразить -->
                  </v-card>
                </router-link>
              </v-list-item>
            </v-list>
            <v-card-title>Запланированные</v-card-title>
            
            <v-list v-if="plannedTasks.length === 0">
              <v-list-item>
                <v-list-item-content>Список задач пуст</v-list-item-content>
              </v-list-item>
            </v-list>
            <v-list v-else>
              <v-list-item
                v-for="task in plannedTasks"
                :key="task.id"
              >
                <router-link :to="'/tasks/' + task.id">
                  <v-card>
                    <v-list-item-title>{{ task.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ task.category }}</v-list-item-subtitle>
                    <!-- Остальные поля задачи, которые вы хотите отобразить -->
                  </v-card>
                </router-link>
              </v-list-item>
            </v-list>
            <v-card-title>Завершенные</v-card-title>
            <v-list v-if="completedTasks.length === 0">
              <v-list-item>
                <v-list-item-content>Список задач пуст</v-list-item-content>
              </v-list-item>
            </v-list>
            <v-list v-else>
              <v-list-item
                v-for="task in completedTasks"
                :key="task.id"
              >
                <router-link :to="'/tasks/' + task.id">
                  <v-card>
                    <v-list-item-title>{{ task.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ task.category }}</v-list-item-subtitle>
                    <!-- Остальные поля задачи, которые вы хотите отобразить -->
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
    name: "TaskListAll",
    components: {
    },
    data() {
      return {
        inProgressTasks: [],
        plannedTasks: [],
        completedTasks: [],
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

        let user = localStorage.getItem('id')

        this.$store.dispatch("task/fetchTasks", user).then(() => {
          this.inProgressTasks = this.$store.state.task.tasksList.in_progress_tasks;
          this.plannedTasks = this.$store.state.task.tasksList.planned_tasks;
          this.completedTasks = this.$store.state.task.tasksList.completed_tasks;
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
