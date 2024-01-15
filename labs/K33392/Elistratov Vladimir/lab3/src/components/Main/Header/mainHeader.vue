<script>
  import RegModal from "@/components/auth/regModel.vue";
<<<<<<< Updated upstream

  export default {
    name: 'mainHeader',
=======
  import LoginModal from "@/components/auth/loginModel.vue";

  export default {
    name: 'mainHeader',
    components: {RegModal, LoginModal},
>>>>>>> Stashed changes
  }
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <h1>TimeVault</h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<<<<<<< Updated upstream
        <span class="navbar-toggler-icon"></span>
=======
        <svg class="navbar-toggler-icon" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
>>>>>>> Stashed changes
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav border-start border-2 ms-auto">
          <li class="nav-item ms-2 mb-1">
            <button type="button" class="btn btn-lg btn-my-main" data-bs-toggle="modal" data-bs-target="#loginFormModal" tabindex="0">Вход</button>
          </li>
          <li class="nav-item ms-2 mb-1">
            <button type="button" class="btn btn-lg btn-my-main" data-bs-toggle="modal" data-bs-target="#regFormModal" tabindex="0">Регистрация</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<<<<<<< Updated upstream

=======
  <reg-modal/>
  <login-modal/>
>>>>>>> Stashed changes
</template>

<style>

</style>