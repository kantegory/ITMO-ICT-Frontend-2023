<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center">
      <v-alert
        v-if="errorMessages.length > 0"
        v-for="(error, index) in errorMessages"
        :key="index"
        type="error"
        dismissible
      >
        {{ error }}
      </v-alert>
      <v-form @submit.prevent="handleLogin">
        <v-card>
          <v-card-title>Вход в систему</v-card-title>
          <v-card-text>
            <v-text-field
              label="Имя пользователя"
              outlined
              required
              v-model="username"
            ></v-text-field>
            <v-text-field
              label="Пароль"
              outlined
              required
              type="password"
              v-model="password"
            ></v-text-field>
          </v-card-text>
          <v-flex class="text-xs-center" mt-5>
            <v-btn color="primary" type="submit">Войти</v-btn>
          </v-flex>
        </v-card>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  components: {
  },
  data() {
    return {
      loading: false,
      message: "",
      username: "",
      password: "",
      errorMessages: []
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;

      let user = {
        username: this.username, 
        password: this.password
      }

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/");
        })
        .catch(error => {
          debugger
        this.loading = false;
        if (error.response && error.response.data && error.response.data.message) {
          debugger
          this.errorMessages.push(error.response.data);
        } else {
          this.errorMessages.push(Object.values(error.response.data).flat().join());
        }
      });
    },
  },
};
</script>
