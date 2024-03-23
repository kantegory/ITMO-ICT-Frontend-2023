<script setup>
import {registerUser, signinUser} from "@/auth_script";
import router from "@/router";

async function signUp() {
  const ans = await registerUser();
  if (!ans) {
    router.push('/auth');
  } else {
    router.push('/account');
  }
}

async function signIn() {
  const ans = await signinUser();
  if (!ans) {
    router.push('/auth');
  } else {
    router.push('/account');
  }
}
</script>

<template>
  <main class="d-flex flex-column align-items-center">
    <form id="signinForm" class="card col-5 my-3 mx-3 card-body">
      <h5 class="card-title text-center">войти</h5>
      <label class="form-label" for="email-in">почта:</label>
      <input type="text" name="login" id="email-in" placeholder="Email..." class="form-control mb-1">
      <label class="form-label" for="password-in">пароль:</label>
      <input type="password" name="password" id="password-in" placeholder="Password..."
             class="form-control mb-1">
      <input @click="signIn" type="button" value="войти в аккаунт" class="btn btn-secondary form-control my-1">
    </form>
    <span class="text-black">или</span>
    <form id="signupForm" class="card col-5 my-3 mx-3 card-body">
      <h5 class="card-title text-center">зарегистрироваться</h5>
      <label class="form-label" for="email-up">почта:</label>
      <input type="text" name="login" id="email-up" placeholder="Email..." class="form-control mb-1">
      <label class="form-label" for="password-up">придумайте пароль:</label>
      <input type="password" name="password" id="password-up" placeholder="Password..." class="form-control mb-1">
      <label class="form-label" for="confirmation-password-up">повторите:</label>
      <input type="password" name="password" id="confirmation-password-up" placeholder="Same password..."
             class="form-control mb-1">
      <input @click="signUp" type="button" value="зарегистрировать аккаунт" class="btn btn-secondary form-control my-1">
    </form>
  </main>
</template>
<script>
export default {
  name: 'AuthComp'
}
</script>