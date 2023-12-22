<template>
  <base-layout>
    <h1>Login to calculator</h1>
    <div>
      <div class="mb-2">
        <label for="authLogin" class="form-label">Username</label>
        <input type="text" id="authLogin" class="form-control">
      </div>
      <div class="mb-2">
        <label for="inputPassword5" class="form-label">Password</label>
        <input type="password" id="inputPassword5" class="form-control">
      </div>
    </div>
    <div class="d-grid gap-2 mt-5">
      <button class="btn btn-primary" type="button">Sign in</button>
      <button class="btn btn-link" type="button">Create an account</button>
    </div>
  </base-layout>
</template>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>

<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>
