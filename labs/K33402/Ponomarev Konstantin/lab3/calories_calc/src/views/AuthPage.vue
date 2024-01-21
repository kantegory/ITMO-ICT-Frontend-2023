<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import authorizationRepository from "@/domain/repository/authorization/instance";
import {useRouter} from "vue-router";
import {useUserInfoStore} from "@/stores/userInfoStore";

export default {
  setup() {
    const router = useRouter()
    const userInfoStore = useUserInfoStore()
    return {router, userInfoStore};
  },
  components: {BaseLayout},
  data() {
    return {
      form: {
        username: null,
        password: null,
        showLoading: false,
        wasValidated: false,
      }
    }
  },
  methods: {
    async submitForm() {
      this.form.showLoading = true
      if (!this.formIsValid()) {
        this.form.wasValidated = true
      } else {
        this.form.wasValidated = false
        try {
          await authorizationRepository.authorizeUser(
              this.form.username,
              this.form.password
          )
          await this.router.push('/');
        } catch (e) {
          console.log(e)
        }
      }
      this.form.showLoading = false
    },
    formIsValid() {
      return this.form.password && this.form.username
    },
    primaryButtonText() {
      if (this.form.showLoading) {
        return "Загрузка"
      } else {
        return "Войти"
      }
    }
  }
};
</script>

<template>
  <base-layout>
    <h1>Вход в калькулятор калорий</h1>
    <form class="needs-validation" @submit.prevent="submitForm"
          :class="{ 'was-validated': form.wasValidated }"
          novalidate>
      <div class="mb-2">
        <label for="authLogin" class="form-label">Имя пользователя</label>
        <input type="text" id="authLogin" class="form-control" required v-model="form.username">
        <div class="invalid-feedback">Введите корректное имя</div>
      </div>
      <div class="mb-2">
        <label for="inputPassword5" class="form-label">Пароль</label>
        <input type="password" id="inputPassword5" class="form-control" required v-model="form.password">
        <div class="invalid-feedback">Введите корректный пароль</div>
      </div>
      <div class="d-grid gap-2 mt-5">
        <button class="btn btn-primary w-100" type="submit" :disabled="form.showLoading">
        <span class="spinner-border spinner-border-sm" aria-hidden="true"
              :class="{'invisible': !form.showLoading}"></span>
          <span role="status">{{ primaryButtonText() }}</span>
        </button>
        <router-link class="btn btn-link" to="/registration">Создать новый аккаунт</router-link>
      </div>
    </form>
  </base-layout>
</template>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
