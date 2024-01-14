<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" lg="6">
        <v-card class="pa-4">
            <h1>{{ task.title }}</h1>
            <p>Описание: <b>{{ task.description }}</b></p>
            <p>Категория: <b>{{ task.category }}</b></p>
            <p>Исполнитель: <b>{{ displayTaskUser }}</b></p>
            <p>Статус: <b>{{ task.completed }}</b></p>
            <template v-if="displayTaskUser !== 'не назначен' && task.completed !== 'завершена'">
              <v-select
                class="mt-4"
                v-model="selectedStatus"
                :items="taskStatuses"
                item-value="id"
                label="Выберите статус"
              ></v-select>
              <v-btn @click="changeTaskStatus" class="mt-3 bg-success">Сменить статус</v-btn>
              <v-alert v-if="showAlert" type="error" class="mt-3">Сначала выберите статус!</v-alert>
            </template>
            <p><router-link :to="'/tasks'"><v-btn class="mt-3 bg-success">Назад</v-btn></router-link></p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "TaskDetail",
    components: {
    },
    data() {
      return {
        task: [],
        taskUser: '',
        taskStatuses: [
          {
            id: 'в работе',
            title: 'в работе'
          },
          {
            id: 'запланирована',
            title: 'запланирована'
          },
          {
            id: 'завершена',
            title: 'завершена'
          }
        ],
        selectedStatus: '',
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
      displayTaskUser() {
        return this.taskUser ? this.taskUser : "не назначен";
      },
    },
    created() {
      if (!this.loggedIn) {
        this.$router.push("/login");
      }
      else {
        this.fetchTask();
        this.fetchTaskUser();
      }
    },
    methods: {
      fetchTask() {
        this.loading = true;

        let taskID = this.$route.params.id;

        this.$store.dispatch("task/fetchTaskDetail", taskID).then(() => {
          this.task = this.$store.state.task.taskDetail
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
      fetchTaskUser() {
        this.loading = true;

        let taskID = this.$route.params.id;

        this.$store.dispatch("task/fetchTaskUser", taskID).then(() => {
          this.taskUser = this.$store.state.task.taskUser.user_name
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
      changeTaskStatus() {
        this.loading = true;

        let taskID = this.$route.params.id;
        let taskStatus = this.selectedStatus

        let statusObject = {
          taskID: taskID,
          taskStatus: taskStatus
        }

        this.$store.dispatch("task/changeTaskStatus", statusObject).then(() => {
          if (this.$store.state.task.taskStatusChanged) {
            this.task.completed = this.selectedStatus;
          }
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
