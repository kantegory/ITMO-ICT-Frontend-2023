<template>
  <v-toolbar>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">
        {{ appTitle }}
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <template v-if="!currentUser">
        <v-btn
          flat
          to="/"
        >
          <v-icon left dark>mdi-home</v-icon>
          Главная
        </v-btn>
        <v-btn
          flat
          to="/register"
        >
          <v-icon left dark>mdi-view-day</v-icon>
          Регистрация
        </v-btn>
        <v-btn
          flat
          to="/login"
        >
        <v-icon left dark>mdi-login</v-icon>
          Войти
        </v-btn>
      </template>
      <template v-else>
        <v-btn flat @click="handleFetchAllTasks">
          Все задачи
        </v-btn>
        <v-btn flat @click="handleFetchUserTasks">
          Мои задачи
        </v-btn>
        <v-btn flat @click="handleAddTask">
          + Задача
        </v-btn>
        <v-btn flat>
          Здравствуйте, {{ username }}
        </v-btn>
        <v-btn flat @click="logOut">
          <v-icon left dark>mdi-logout</v-icon>
          Выйти
        </v-btn>
      </template>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      appTitle: "Менеджер задач",
      username: ''
    }
  },
  computed: {
    currentUser() {
      if (this.$store.state.auth.status.loggedIn)
        this.fetchUserId()

      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
    handleAddTask() {
      this.$router.push('/add_task');
    },
    handleFetchUserTasks() {
      this.$router.push('/tasks');
    },
    handleFetchAllTasks() {
      this.$router.push('/tasks_all');
    },
    fetchUserId() {
      this.$store.dispatch("auth/fetchUserId").then(() => {
        this.username = localStorage.getItem("username");
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
    }
  }
};
</script>
