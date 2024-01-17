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
      <v-form @submit.prevent="handleRegister">
        <v-card>
          <v-card-title>Регистрация</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="username"
              label="Имя пользователя"
              outlined
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Пароль"
              outlined
              required
              type="password"
            ></v-text-field>
          </v-card-text>
          <v-flex class="text-xs-center" mt-5>
            <v-btn color="primary" type="submit">Подтвердить</v-btn>
          </v-flex>
        </v-card>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    name: "Register",
    components: {
    },
    data() {
      return {
        loading: false,
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
        this.$router.push("/profile");
      }
    },
    methods: {
      handleRegister() {
        this.loading = true;

        let user = {
          username: this.username, 
          password: this.password
        }

        this.$store.dispatch("auth/register", user).then(
          () => {
            this.$router.push("/login");
          })
          .catch(error => {
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
