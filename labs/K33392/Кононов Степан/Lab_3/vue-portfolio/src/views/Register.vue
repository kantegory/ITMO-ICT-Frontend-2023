<template>
  <div class="container mt-5">
    <form @submit.prevent="register">
      <header>
        <h1>Регистрация</h1>
      </header>
      <div class="mb-3">
        <label for="firstname" class="form-label">Имя пользователя :</label>
        <input v-model="registerData.firstname" type="text" id="firstname" name="firstname" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input v-model="registerData.email" type="email" id="email" name="email" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль:</label>
        <input v-model="registerData.password" type="password" id="password" name="password" class="form-control" required minlength="6">
      </div>
      <div class="mb-3">
        <label for="gender" class="form-label">Пол:</label>
        <select v-model="registerData.gender" id="gender" name="gender" class="form-select" required>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>
      <div class="mb-3 text-danger">{{ errorMessage }}</div>
      <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
    </form>

    <div class="text-center цщ">
      <p class="mt-3">
        Уже есть аккаунт? <router-link to="/">Войти</router-link>
      </p>
    </div>
    <div class="bottom-right-container">
      <svg class="themeIcon" id="themeIcon" role="img">
        <!--<use xlink:href="images/icons.svg#ic_moon"></use>-->
      </svg>
    </div>
  </div>

  <theme-switcher></theme-switcher>

</template>

<script>
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

export default {
  components: {ThemeSwitcher},
  data() {
    return {
      registerData: {
        firstname: '',
        email: '',
        password: '',
        gender: 'male',
        avatar: 1,

      },
      errorMessage: '',
    };
  },
  methods: {
    getRandomAvatar(gender) {
      const minMaleAvatar = 1;
      const maxMaleAvatar = 50;
      const minFemaleAvatar = 51;
      const maxFemaleAvatar = 100;

      const min = gender === 'male' ? minMaleAvatar : minFemaleAvatar;
      const max = gender === 'male' ? maxMaleAvatar : maxFemaleAvatar;

      this.registerData.avatar = Math.floor(Math.random() * (max - min + 1)) + min;
      return this.registerData.avatar;
    },

    async register() {
      try {
        this.errorMessage = ''; // Reset error message on each registration attempt
        this.getRandomAvatar(this.registerData.gender)
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          body: JSON.stringify(this.registerData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const responseJson = await response.json();

        const { accessToken, user } = responseJson;

        localStorage.accessToken = accessToken;
        localStorage.user = JSON.stringify({
          ...user,
          avatar: this.registerData.avatar,
        });
        this.checkAuth();
      } catch (error) {
        this.errorMessage = 'Ошибка при регистрации. Пожалуйста, попробуйте еще раз.';
      }
    },
    checkAuth() {
      if (localStorage.accessToken) {
        this.$router.push('/profile');
      }
    },
  },
  mounted() {
    this.checkAuth();
  },
};
</script>


<style scoped>

</style>
