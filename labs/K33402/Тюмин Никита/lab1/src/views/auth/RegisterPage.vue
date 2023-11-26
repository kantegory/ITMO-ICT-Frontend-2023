<template>
  <div class="container __container">
    <h2>Register</h2>

    <form>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control __input">
      </div>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control __input">
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control __input">
      </div>
      <div class="mb-3">
        <label class="form-label">Repeat password</label>
        <input type="password" class="form-control __input">
      </div>
      <div class="__buttons">
        <button type="submit" class="btn __submit_button">Log in</button>
        <a href="/login">Already registered?</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterPage"
}
</script>

<style scoped>

</style>