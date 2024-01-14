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
            <template v-if="displayTaskUser === 'не назначен' && task.completed !== 'завершена'">
              <v-select
                class="mt-4"
                v-model="selectedUser"
                :items="users"
                item-value="id"
                label="Выберите исполнителя"
              ></v-select>
              <v-btn @click="assignUserToTask" class="mt-3 bg-success">Назначить исполнителя</v-btn>
              <v-alert v-if="showAlert" type="error" class="mt-3">Сначала выберите пользователя!</v-alert>
            </template>
            <p>
              <v-btn @click="deleteTask" class="mt-3 bg-red">Удалить</v-btn>
            </p>
            <p><router-link :to="'/tasks_all'"><v-btn class="mt-3 bg-success">Назад</v-btn></router-link></p>
        </v-card>
        <v-card class="pa-4">
            <div class="comment-input">
              <textarea v-model="commentText" class="mt-3 form-control"></textarea>
              <v-btn @click="addComment" class="mt-3 bg-info">Добавить комментарий</v-btn>
            </div>
            <h1 class="my-5">Комментарии</h1>
            <v-list v-if="comments.length === 0">
              <v-list-item>
                <v-list-item-content>Пока ни одного комментария</v-list-item-content>
              </v-list-item>
            </v-list>
            <v-list v-else>
              <v-list-item
                v-for="comment in comments"
                :key="comment.id"
              >
                <v-card>
                  <v-list-item-title>{{ comment.user_name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ comment.text }}</v-list-item-subtitle>
                </v-card>
              </v-list-item>
            </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "TaskDetailAll",
    components: {
    },
    data() {
      return {
        task: [],
        taskUser: '',
        selectedUser: '',
        users: [],
        showAlert: false,
        comments: [],
        commentText: '',
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
        this.fetchUsers();
        this.fetchComments();
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
      fetchUsers() {
        this.$store.dispatch("task/fetchUsers").then(() => {
          let usersList = this.$store.state.task.users
          usersList.forEach(element => {
            this.users.push({
              id: element.id,
              title: element.username
            })
          });
        }).catch(error => {
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
      fetchComments() {
        let taskID = this.$route.params.id;

        this.$store.dispatch("task/fetchComments", taskID).then(() => {
          this.comments = this.$store.state.task.comments
        }).catch(error => {
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
      assignUserToTask() {
        if (this.selectedUser === '') {
          this.showAlert = true;
        } else {
          let taskObject = {
            task: this.$route.params.id,
            user: this.selectedUser
          }

          this.$store.dispatch("task/assignUserToTask", taskObject).then(() => {
            this.taskUser = this.$store.state.task.taskAssigned.user_name
          }).catch(error => {
            if (error.response && error.response.data && error.response.data.message) {
              this.errorMessages.push(error.response.data);
            } else {
              const errors = Object.values(error.response.data).flat();

              errors.forEach(errorMessage => {
                this.errorMessages.push(errorMessage);
              });
            }
          });
        }
      },
      deleteTask() {
        let taskID = this.$route.params.id

        this.$store.dispatch("task/deleteTask", taskID).then(() => {
          if (this.$store.state.task.taskDeleted)
            this.$router.push("/tasks_all");
        }).catch(error => {
          alert(error)
        });
      },
      addComment() {
        let taskID = this.$route.params.id

        let commentObject = {
          text: this.commentText,
          task: taskID
        }

        this.$store.dispatch("task/addComment", commentObject).then(() => {
          this.comments.push(this.$store.state.task.commentAdded)
        }).catch(error => {
          alert(error)
        });
      },
    },
  };
</script>

<style>
  .comment-input textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical; /* Позволяет изменять размеры вертикально */
    margin-bottom: 10px; /* Пространство между textarea и кнопкой */
  }

  .comment-input button {
    width: 100%;
  }
</style>