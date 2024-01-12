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
        repeatPassword: null,
        showLoading: false,
        wasValidated: false,
      }
    }
  },
  methods: {
    async submitForm() {
      if (!this.formIsValid()) {
        this.form.wasValidated = true
      } else {
        this.form.wasValidated = false
        this.form.showLoading = true
        try {
          const userInfo = await authorizationRepository.sendRegistrationData(
              this.form.username,
              this.form.password
          )
          this.userInfoStore.userInfo = userInfo
          await this.router.push('/calculatorParams');
        } catch (e) {
          console.log(e)
        }
        this.form.showLoading = false
      }
    },
    formIsValid() {
      return this.form.password && !this.usernameError() && this.passwordMatch()
    },
    primaryButtonText() {
      if (this.form.showLoading) {
        return "Proccesing"
      } else {
        return "Create"
      }
    },
    passwordMatch() {
      return this.form.password === this.form.repeatPassword
    },
    usernameError() {
      const usernamePattern = /^[a-zA-Z0-9_]+$/;
      if (!this.form.username) {
        return 'Please input your username';
      } else if (!usernamePattern.test(this.form.username)) {
        return 'Username can only have alphabetic symbols, numbers and underscores.';
      }
      return '';
    }
  }
};
</script>

<template>
  <base-layout>
    <h1>Create new account</h1>
    <form class="mb-5 needs-validation"
          :class="{ 'was-validated': form.wasValidated }"
          ref="registrationForm"
          @submit.prevent="submitForm"
          novalidate>
      <div class="mb-2">
        <label for="registrationLogin" class="form-label">Username</label>
        <div class="input-group has-validation">
          <input
              type="text"
              id="registrationLogin"
              class="form-control"
              v-model="form.username"
              required>
          <div class="invalid-feedback">{{ usernameError() }}</div>
        </div>
      </div>

      <div class="mb-2">
        <label for="registrationPassword" class="form-label">Password</label>
        <div class="input-group has-validation">
          <input
              type="password"
              id="registrationPassword"
              class="form-control"
              v-model="form.password"
              required>
          <div class="invalid-feedback">Please input your password</div>
        </div>
      </div>

      <div class="mb-4">
        <label for="repeatRegistrationPassword" class="form-label">Repeat your password</label>
        <div class="input-group has-validation">
          <input
              type="password"
              id="repeatRegistrationPassword"
              class="form-control"
              v-model="form.repeatPassword"
              required>
          <div class="invalid-feedback">
            The passwords do not match
          </div>
        </div>
      </div>
      <button class="btn btn-primary w-100" type="submit" :disabled="form.showLoading">
        <span class="spinner-border spinner-border-sm" aria-hidden="true"
              :class="{'invisible': !form.showLoading}"></span>
        <span role="status">{{ primaryButtonText() }}</span>
      </button>
    </form>
  </base-layout>
</template>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
