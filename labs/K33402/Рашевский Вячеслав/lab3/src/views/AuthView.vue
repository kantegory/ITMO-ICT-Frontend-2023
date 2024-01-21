<script setup>
import SignInView from "@/components/SignInComponent.vue";
import SignUpView from "@/components/SignUpComponent.vue";
</script>

<template>
  <main class="container-fluid row d-flex flex-row">
    <div class="d-flex flex-column align-items-center">
      <sign-in-view/>
      <span class="text-break">Or</span>
      <sign-up-view/>
    </div>
  </main>
</template>

<style scoped>
sign-in-view {
  width: 50%;
}
</style>