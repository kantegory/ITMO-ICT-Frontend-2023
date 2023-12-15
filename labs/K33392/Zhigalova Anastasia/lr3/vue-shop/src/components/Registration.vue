<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <h3 v-if="!userRegistered" style="text-align: center; margin-top: 30px;">Пройти регистрацию</h3>
    <form v-if="!userRegistered" @submit.prevent="registerUser">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Почта</label>
        <input type="email" class="form-control" v-model="user.email" placeholder="Введите почту">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Пароль</label>
        <input type="password" class="form-control" v-model="user.password" placeholder="Введите пароль">
      </div>
      <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
    </form>
  
    <div v-if="userRegistered" style="text-align: center; margin-top: 20px;">
      <h4>Добро пожаловать!</h4>
      <p>{{ user.email }}</p>
    </div>
  </template>
  
  <script>

import { useRegister } from "@/composables/useRegister";

 export default {
  setup() {
    const { user, userRegistered, registerUser } = useRegister();

    return { user, userRegistered, registerUser };
  }
};
  </script>