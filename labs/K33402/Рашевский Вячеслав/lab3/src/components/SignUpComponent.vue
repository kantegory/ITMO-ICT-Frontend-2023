<script setup>
import {registerUser} from "@/auth_script";
import router from "@/router";

async function signUp() {
  const ans = await registerUser();
  if (!ans) {
    await router.push('/auth');
  } else {
    await router.push('/account');
  }
}
</script>

<template>
  <form id="signupForm" class="card col-5 my-3 mx-3 card-body">
    <h5 class="card-title text-center">Sign up</h5>
    <label class="form-label" for="email-up">Email:</label>
    <input type="text" name="login" id="email-up" placeholder="Email..." class="form-control mb-1">
    <label class="form-label" for="password-up">Password:</label>
    <input type="password" name="password" id="password-up" placeholder="Password..." class="form-control mb-1">
    <label class="form-label" for="confirmation-password-up">Password again:</label>
    <input type="password" name="password" id="confirmation-password-up" placeholder="Same password..."
           class="form-control mb-1">
    <router-link @click="signUp" type="submit" class="btn btn-primary form-control my-1" to="">Sign up
    </router-link>
  </form>
</template>

<style scoped>

</style>