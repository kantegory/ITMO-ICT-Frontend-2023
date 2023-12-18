<script>
  import RegModal from "@/components/auth/regModel.vue";

  export default {
    name: 'loggedMainHeader',
  }
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <h1>TimeVault</h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav border-start border-2 ms-auto">
          <li class="nav-item ms-2 mb-1">
            <button type="button" class="btn btn-lg btn-my-main" data-bs-toggle="modal" data-bs-target="#CreateCapsuleFormModalId" tabindex="0">
              Создать капсулу
              <svg class="icons">
                <use xlink:href="#addIcon"></use>
              </svg>
            </button>
          </li>
          <li class="nav-item ms-2 mb-1">
            <button type="button" class="btn btn-lg btn-my-main" onclick="location.href='vaulttec/profile';" tabindex="0">
              Профиль
              <svg class="icons">
                <use xlink:href="#profileIcon"></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<style>

</style>