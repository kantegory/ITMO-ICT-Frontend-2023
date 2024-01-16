<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h3 v-if="!userLoggedIn" style="text-align: center; margin-top: 20px;">Войдите в свой аккаунт</h3>
  <form v-if="!userLoggedIn" @submit.prevent="loginUser">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Почта</label>
      <input type="email" class="form-control" v-model="user.email">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Пароль</label>
      <input type="password" class="form-control" v-model="user.password">
    </div>
    <button type="submit" class="btn btn-primary">Войти</button>
  </form>

  <div v-if="userLoggedIn" style="text-align: center; margin-top: 20px;">
    <h4>Добро пожаловать!</h4>
    <p>{{ user.email }}</p>
  </div>
</template>

<script>

import { useEnter } from "@/composables/useEnter";

export default {
  setup() {
    const { user, userLoggedIn, loginUser } = useEnter();

    return { user, userLoggedIn, loginUser };
  }
};
</script>