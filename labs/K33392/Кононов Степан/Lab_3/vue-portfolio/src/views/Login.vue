<template>
  <div class="container mt-5">
    <header>
      <h1 class="text-center">Вход</h1>
    </header>
    <form @submit.prevent="handleLoginFormSubmit" class="col-md-4 mx-auto">
      <div class="mb-3">
        <label for="username" class="form-label">Email:</label>
        <input v-model="email" type="text" id="username" name="email" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль:</label>
        <input v-model="password" type="password" id="password" name="password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Войти</button>

      <div v-if="error" class="alert alert-danger mt-3" role="alert">
        {{ error }}
      </div>
    </form>
    <div class="text-center">
      <p class="mt-3">
        <router-link to="/register">Создать аккаунт</router-link>
      </p>
    </div>
  </div>
  <theme-switcher></theme-switcher>
</template>

<script>
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  components: {
    ThemeSwitcher
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
      themes: ['light', 'dark', 'auto'],
      currentThemeIndex: 0,
    };
  },
  methods: {
    async sendLoginData(loginData) {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          body: JSON.stringify(loginData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const responseJson = await response.json();
        this.handleLoginResponse(responseJson);
      } catch (error) {
        console.error('Error:', error);
        this.displayErrorAlert();
      }
    },
    handleLoginResponse(responseJson) {
      if (responseJson.accessToken) {
        localStorage.accessToken = responseJson.accessToken;
        localStorage.user = JSON.stringify(responseJson.user);
        this.$router.push( '/profile')
      } else {
        this.displayErrorAlert();
      }
    },
    displayErrorAlert() {
      this.error = 'Неправильный email или пароль. Пожалуйста, попробуйте снова.';
      setTimeout(() => {
        this.error = null;
      }, 3000);
    },
    handleLoginFormSubmit() {
      const loginData = {
        email: this.email,
        password: this.password,
      };
      this.sendLoginData(loginData);
    },
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

.alert.fade-in {
  animation: fadeIn 0.5s;
}

.alert.fade-out {
  animation: fadeOut 0.5s;
}
.bottom-right-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  bottom: 30px;
  right: 30px;
}

.themeIcon {
  width: 70px;
  height: 70px;
}
</style>
