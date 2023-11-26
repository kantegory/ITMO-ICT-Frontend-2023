<template>
  <div class="container __container">
    <h2>Log in</h2>

    <form>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control __input">
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input class="form-control __input">
      </div>
      <div class="__buttons">
        <button type="submit" class="btn __submit_button">Log in</button>
        <a href="/register">New here?</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage"
}
</script>

<style scoped>
</style>